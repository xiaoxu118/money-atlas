type Edit = { index: number; original: string; text: string };

export async function setupPageEditor() {
  const main = document.querySelector('main');
  if (!main) return;
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      return node.textContent?.trim() &&
        parent &&
        !parent.closest('svg, script, style, textarea, input, button, [hidden]')
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  const originals = nodes.map((n) => n.data.trim());
  const panel = document.querySelector<HTMLElement>('#page-editor');
  const status = panel?.querySelector<HTMLElement>('[role=status]');
  let saved: Edit[];
  try {
    const response = await fetch('/page-edits.json', { cache: 'no-store' });
    if (!response.ok) throw new Error();
    const data = await response.json();
    saved = data[location.pathname] ?? [];
    for (const edit of saved) {
      if (originals[edit.index] === edit.original)
        nodes[edit.index].data = edit.text;
    }
  } catch {
    if (status) status.textContent = '无法读取已保存内容，请刷新重试';
    return;
  }
  if (!panel || !status) return;
  const editButton = panel.querySelector<HTMLButtonElement>('[data-edit]')!;
  const saveButton = panel.querySelector<HTMLButtonElement>('[data-save]')!;
  const cancelButton = panel.querySelector<HTMLButtonElement>('[data-cancel]')!;
  let spans: HTMLElement[] = [];
  let snapshot: string[] = [];
  let editing = false;
  let dirty = false;
  const changed = () => {
    dirty = true;
    status.textContent = '有未保存修改';
  };
  const finish = () => {
    spans.forEach((span, i) => {
      nodes[i].data = span.textContent ?? '';
      span.replaceWith(nodes[i]);
    });
    spans = [];
    editing = false;
    dirty = false;
    editButton.hidden = false;
    saveButton.hidden = cancelButton.hidden = true;
  };
  editButton.addEventListener('click', () => {
    snapshot = nodes.map((n) => n.data);
    spans = nodes.map((node) => {
      const span = document.createElement('span');
      span.dataset.editableText = '';
      span.contentEditable = 'plaintext-only';
      span.textContent = node.data;
      span.addEventListener('input', changed);
      node.replaceWith(span);
      return span;
    });
    editing = true;
    editButton.hidden = true;
    saveButton.hidden = cancelButton.hidden = false;
    status.textContent = '点击虚线框内的文字进行修改';
  });
  main.addEventListener('click', (event) => {
    if (editing && (event.target as Element).closest('a'))
      event.preventDefault();
  });
  cancelButton.addEventListener('click', () => {
    spans.forEach((span, i) => {
      span.textContent = snapshot[i];
    });
    finish();
    status.textContent = '已取消修改';
  });
  saveButton.addEventListener('click', async () => {
    saveButton.disabled = cancelButton.disabled = true;
    status.textContent = '正在保存…';
    const edits = spans
      .map((span, index) => ({
        index,
        original: originals[index],
        text: span.textContent ?? '',
      }))
      .filter((edit) => edit.text.trim() !== edit.original);
    try {
      const response = await fetch('/__page-editor/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          path: location.pathname,
          edits,
          previous: saved,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || '保存失败');
      saved = edits;
      finish();
      status.textContent = '已保存到项目';
    } catch (error) {
      status.textContent =
        error instanceof Error ? error.message : '保存失败，请重试';
    } finally {
      saveButton.disabled = cancelButton.disabled = false;
    }
  });
  window.addEventListener('beforeunload', (event) => {
    if (dirty) event.preventDefault();
  });
}
