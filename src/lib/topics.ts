import { getCollection } from 'astro:content';
import { concepts, conceptIds } from '../data/concepts';
import { experiments } from '../data/experiment-registry';
import { validateTopics } from './content-validation';
export async function publishedTopics() {
  const all = await getCollection('topics');
  validateTopics(
    all.map((l) => l.data),
    conceptIds,
  );
  const published = all
    .filter((l) => l.data.status === 'published')
    .sort((a, b) => a.data.displayOrder - b.data.displayOrder);
  for (const id of [
    ...concepts.flatMap((c) => [...c.topics]),
    ...experiments.map((e) => e.topic),
  ]) {
    if (!published.some((l) => l.data.id === id))
      throw new Error(`目录引用未发布主题: ${id}`);
  }
  return published;
}
