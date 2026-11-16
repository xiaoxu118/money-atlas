import { getCollection } from 'astro:content';
import { concepts, conceptIds } from '../data/concepts';
import { topicGroups, topicPlan, topicRelations } from '../data/content-map';
import { validateTopics } from './content-validation';
export async function publishedTopics() {
  const all = await getCollection('topics');
  validateTopics(
    all.map((l) => l.data),
    conceptIds,
  );
  for (const topic of all) {
    const planned = topicPlan.find((entry) => entry.id === topic.data.id);
    if (
      !planned ||
      planned.module !== topic.data.module ||
      planned.slug !== topic.data.slug ||
      planned.group !== topic.data.group
    )
      throw new Error(`主题与大纲不一致: ${topic.data.id}`);
    if (
      !topicGroups.some(
        (group) =>
          group.id === topic.data.group && group.module === topic.data.module,
      )
    )
      throw new Error(`无效分组: ${topic.data.group}`);
  }
  const published = all
    .filter((l) => l.data.status === 'published')
    .sort((a, b) => a.data.displayOrder - b.data.displayOrder);
  for (const id of [...concepts.flatMap((c) => [...c.topics])]) {
    if (!published.some((l) => l.data.id === id))
      throw new Error(`目录引用未发布主题: ${id}`);
  }
  for (const [from, targets] of Object.entries(topicRelations)) {
    for (const id of [from, ...targets])
      if (!published.some((topic) => topic.data.id === id))
        throw new Error(`关联阅读引用未发布主题: ${id}`);
  }
  return published;
}
