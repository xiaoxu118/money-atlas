import type { TopicModule } from './content-map';
export const topicHref = (topic: { module: TopicModule; slug: string }) =>
  `/knowledge/${topic.module}/${topic.slug}/`;
