import { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/site';

/**
 * Search and AI answer crawlers are named so the choice is on record.
 * A named group replaces the `*` group for that bot, so each group repeats the disallow list.
 *
 * - Bingbot feeds Bing, Copilot, and ChatGPT search results.
 * - OAI-SearchBot and ChatGPT-User fetch pages for ChatGPT answers. GPTBot is OpenAI model training.
 * - PerplexityBot and Perplexity-User fetch pages for Perplexity answers.
 * - Google-Extended controls Gemini training and grounding. It does not affect Google Search or AI Overviews,
 *   which use Googlebot. Allowed here so Gemini can cite the site; remove it from AI_CRAWLERS to opt out.
 * - ClaudeBot, Claude-SearchBot, Applebot-Extended, DuckAssistBot, and CCBot are the other common AI crawlers.
 */
const DISALLOW = ['/api/', '/admin/', '/go/'];

const AI_CRAWLERS = [
  'Bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'ClaudeBot',
  'Claude-SearchBot',
  'Applebot-Extended',
  'DuckAssistBot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: DISALLOW },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  };
}
