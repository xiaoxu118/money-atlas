import { readdirSync, readFileSync } from 'node:fs';
import { parse } from 'yaml';
import { describe, it, expect } from 'vitest';
import { topicPlan, topicGroups } from '../src/data/content-map';
import { concepts } from '../src/data/concepts';
import { topicHref } from '../src/data/topic-links';
const entries = ['macro', 'investing'].flatMap((module) =>
  readdirSync(`src/content/topics/${module}`)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => {
      const text = readFileSync(`src/content/topics/${module}/${file}`, 'utf8');
      const [, front, body] = text.split(/\n?---\n/);
      return { data: parse(front!), body: body! };
    }),
);
describe('完整大纲与内容覆盖', () => {
  it('64 个主题与 15 个分组逐一对应，两个模块均有正文和来源', () => {
    expect(topicPlan).toHaveLength(64);
    expect(topicGroups).toHaveLength(15);
    expect(entries).toHaveLength(64);
    expect(entries.filter((e) => e.data.module === 'macro')).toHaveLength(30);
    expect(entries.filter((e) => e.data.module === 'investing')).toHaveLength(
      34,
    );
    for (const planned of topicPlan) {
      const entry = entries.find((e) => e.data.id === planned.id);
      expect(entry, planned.id).toBeDefined();
      expect(entry!.data.group).toBe(planned.group);
      expect(entry!.data.status).toBe('published');
      expect(entry!.body.length).toBeGreaterThan(350);
      expect(entry!.data.sources.length).toBeGreaterThan(0);
      expect(entry!.data.concepts).toEqual([...planned.concepts]);
      expect(entry!.data.updatedAt).toBeUndefined();
    }
  });
  it('每篇先展示图，再展示解释，且无实验控件', () => {
    for (const entry of entries) {
      const visual = entry.body.search(/<(?:TopicVisual|MechanismFlow)\b/);
      expect(visual, entry.data.id).toBeGreaterThanOrEqual(0);
      expect(visual, entry.data.id).toBeLessThan(entry.body.indexOf('## '));
      expect(entry.body).not.toMatch(/client:|下一步|重置实验|<Quiz/);
    }
  });
  it('151 个概念引用双向一致，投资链接不再落入基础模块', () => {
    expect(concepts).toHaveLength(151);
    for (const concept of concepts) {
      expect(concept.summary.length).toBeGreaterThan(15);
      for (const id of concept.topics) {
        const entry = entries.find((e) => e.data.id === id);
        expect(entry?.data.concepts).toContain(concept.id);
      }
    }
    for (const entry of entries) {
      for (const id of entry.data.concepts) {
        expect(concepts.find((c) => c.id === id)?.topics).toContain(
          entry.data.id,
        );
      }
    }
    expect(topicHref({ module: 'investing', slug: 'bonds' })).toBe(
      '/knowledge/investing/bonds/',
    );
  });
  it('来源为明确外部地址，标题直接指向专业分析对象', () => {
    for (const entry of entries) {
      expect(entry.data.title.length).toBeGreaterThan(8);
      expect(entry.data.title).not.toMatch(/[？?]|变富|零基础/);
      for (const source of entry.data.sources) {
        expect(new URL(source.url).protocol).toBe('https:');
        expect(source.title.length).toBeGreaterThan(3);
      }
    }
  });
});
