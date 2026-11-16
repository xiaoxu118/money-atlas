import type { ReactNode } from 'react';
export function ModelNote({ children }: { children: ReactNode }) {
  return (
    <aside className="model-note">
      <strong>模型边界</strong>
      <p>{children}</p>
    </aside>
  );
}
