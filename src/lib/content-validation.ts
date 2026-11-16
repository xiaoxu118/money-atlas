export interface TopicMeta {
  id: string;
  slug: string;
  module: string;
  status: string;
  concepts: string[];
}
export function validateTopics(
  topics: TopicMeta[],
  conceptIds: readonly string[],
) {
  const ids = new Set<string>();
  const routes = new Set<string>();
  for (const topic of topics) {
    if (ids.has(topic.id)) throw new Error(`重复主题 ID: ${topic.id}`);
    const route = `${topic.module}/${topic.slug}`;
    if (routes.has(route)) throw new Error(`重复主题路径: ${route}`);
    routes.add(route);
    ids.add(topic.id);
    for (const concept of topic.concepts)
      if (!conceptIds.includes(concept))
        throw new Error(`未知概念: ${concept}`);
  }
}
