import { readFile, writeFile, rename } from 'node:fs/promises';

export default function pageEditor() {
  const file = new URL('../public/page-edits.json', import.meta.url);
  let queue = Promise.resolve();
  return {
    name: 'local-page-editor',
    hooks: {
      'astro:server:setup': ({ server }) => {
        server.middlewares.use('/__page-editor/save', async (req, res) => {
          res.setHeader('Content-Type', 'application/json; charset=utf-8');
          try {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end('{}');
              return;
            }
            const origin = req.headers.origin;
            if (!origin || new URL(origin).host !== req.headers.host) {
              res.statusCode = 403;
              res.end('{}');
              return;
            }
            let body = '';
            for await (const chunk of req) {
              body += chunk;
              if (Buffer.byteLength(body) > 500_000)
                throw new Error('页面内容过大');
            }
            const { path, edits, previous } = JSON.parse(body);
            if (
              typeof path !== 'string' ||
              !/^\/(?:[a-zA-Z0-9_-]+\/)*$/.test(path) ||
              !Array.isArray(edits) ||
              edits.length > 2000 ||
              !edits.every(
                (e) =>
                  Number.isInteger(e.index) &&
                  e.index >= 0 &&
                  typeof e.original === 'string' &&
                  typeof e.text === 'string' &&
                  e.text.length <= 20000,
              )
            ) {
              throw new Error('保存内容无效');
            }
            const operation = queue.then(async () => {
              const data = JSON.parse(await readFile(file, 'utf8'));
              if (
                JSON.stringify(data[path] ?? []) !== JSON.stringify(previous)
              ) {
                const error = new Error('此页面已在其他窗口修改，请刷新后重试');
                error.status = 409;
                throw error;
              }
              data[path] = edits;
              const temporary = new URL(
                '../public/page-edits.json.tmp',
                import.meta.url,
              );
              await writeFile(temporary, JSON.stringify(data, null, 2) + '\n');
              await rename(temporary, file);
            });
            queue = operation.catch(() => {});
            await operation;
            res.end(JSON.stringify({ ok: true }));
          } catch (error) {
            res.statusCode = error.status ?? 400;
            res.end(JSON.stringify({ error: error.message }));
          }
        });
      },
    },
  };
}
