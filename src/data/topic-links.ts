import type { TopicModule } from './content-map';
import { topicPlan } from './content-map';
export const topicHref = (topic: { module: TopicModule; slug: string }) =>
  `/knowledge/${topic.module}/${topic.slug}/`;

export function readingEntryHref(
  module: TopicModule = 'macro',
  group?: string,
) {
  const topic = topicPlan.find(
    (topic) => topic.module === module && (!group || topic.group === group),
  );
  if (!topic) throw new Error(`找不到阅读入口: ${module}/${group ?? ''}`);
  return topicHref(topic);
}
