import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
async function walk(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name),
      ),
    )
  ).flat();
}
const files = (await walk('dist')).map((file) => file.replaceAll('\\', '/'));
const pages = files.filter(
  (f) => f.endsWith('.html') && !f.includes('/archive/'),
);
const contents = new Map(
  await Promise.all(pages.map(async (p) => [p, await readFile(p, 'utf8')])),
);
let count = 0;
for (const [file, html] of contents) {
  const path =
    '/' +
    relative('dist', file)
      .replaceAll('\\', '/')
      .replace(/index\.html$/, '');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    const url = new URL(href, 'https://check.local' + path);
    if (url.origin !== 'https://check.local') continue;
    const target =
      'dist' +
      decodeURIComponent(url.pathname) +
      (url.pathname.endsWith('/') ? 'index.html' : '');
    if (!files.includes(target)) throw new Error(`${file}: 找不到 ${href}`);
    if (url.hash && contents.has(target)) {
      const id = decodeURIComponent(url.hash.slice(1));
      if (!contents.get(target).includes(`id="${id}"`))
        throw new Error(`${file}: 锚点不存在 ${href}`);
    }
    count++;
  }
}
console.log(`已验证 ${pages.length} 个页面、${count} 个内部链接和锚点。`);
