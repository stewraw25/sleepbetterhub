import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components';
import { blogPosts } from '../lib/blog';

interface WeeklySleepInsightsProps {
  subscriberEmail?: string;
}

export default function WeeklySleepInsights({ subscriberEmail }: WeeklySleepInsightsProps) {
  // Pick the 3 most recent posts for the digest
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Html>
      <Head />
      <Preview>This week in sleep: Mouth tape testing results, nasal breathing protocol, and the real data on sleep hygiene</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Text style={brand}>SleepBetterHub</Text>
            <Text style={tagline}>Science-Backed Tools &amp; Honest Reviews for Deeper Sleep</Text>
          </Section>

          <Heading style={h1}>Weekly Sleep Insights</Heading>

          <Text style={subtitle}>
            Evidence-based tips, new product tests, and practical research summaries — curated for you.
          </Text>

          <Hr style={hr} />

          {/* Featured articles */}
          <Section>
            {featuredPosts.map((post, index) => (
              <div key={post.slug} style={{ marginBottom: '32px' }}>
                <Text style={articleCategory}>{post.category} • {post.readTime}</Text>
                <Heading as="h2" style={articleTitle}>
                  <Link href={`https://sleepbetterhub.com/blog/${post.slug}`} style={articleLink}>
                    {post.title}
                  </Link>
                </Heading>
                <Text style={articleExcerpt}>{post.excerpt}</Text>
                <Button
                  href={`https://sleepbetterhub.com/blog/${post.slug}`}
                  style={readButton}
                >
                  Read the full guide →
                </Button>
              </div>
            ))}
          </Section>

          <Hr style={hr} />

          {/* Quick tip / CTA */}
          <Section style={ctaSection}>
            <Heading as="h3" style={h3}>Not sure which mouth tape is right for you?</Heading>
            <Text style={text}>
              Take our 90-second personalized quiz. Thousands of readers have used it to find their best match.
            </Text>
            <Button
              href="https://sleepbetterhub.com/quiz"
              style={primaryButton}
            >
              Take the Sleep Quiz
            </Button>
          </Section>

          <Hr style={hr} />

          {/* Footer */}
          <Text style={footer}>
            You're receiving this because you subscribed to SleepBetterHub Weekly Sleep Insights.
            <br />
            <Link href="https://sleepbetterhub.com" style={footerLink}>sleepbetterhub.com</Link> · 
            <Link href="https://sleepbetterhub.com/about" style={footerLink}> Unsubscribe</Link>
          </Text>

          <Text style={tiny}>
            SleepBetterHub is not medical advice. Always consult a qualified healthcare professional for sleep concerns.
            {subscriberEmail ? ` Sent to ${subscriberEmail}` : ''}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles (inline for email clients)
const main = {
  backgroundColor: '#f8fafc',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '24px 20px 40px',
  maxWidth: '560px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
};

const header = {
  marginBottom: '24px',
};

const brand = {
  fontSize: '22px',
  fontWeight: 600,
  color: '#0f766e',
  margin: '0 0 4px',
  letterSpacing: '-0.3px',
};

const tagline = {
  fontSize: '12px',
  color: '#64748b',
  margin: 0,
  letterSpacing: '0.5px',
};

const h1 = {
  fontSize: '26px',
  lineHeight: '1.2',
  fontWeight: 600,
  color: '#0f172a',
  margin: '0 0 8px',
};

const subtitle = {
  fontSize: '15px',
  color: '#475569',
  margin: '0 0 24px',
  lineHeight: '1.5',
};

const hr = {
  borderColor: '#e2e8f0',
  margin: '24px 0',
};

const articleCategory = {
  fontSize: '11px',
  fontWeight: 500,
  color: '#0d9488',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px',
  margin: '0 0 4px',
};

const articleTitle = {
  fontSize: '18px',
  fontWeight: 600,
  color: '#0f172a',
  margin: '0 0 8px',
  lineHeight: '1.3',
};

const articleLink = {
  color: '#0f172a',
  textDecoration: 'none',
};

const articleExcerpt = {
  fontSize: '14px',
  color: '#475569',
  margin: '0 0 12px',
  lineHeight: '1.5',
};

const readButton = {
  backgroundColor: '#0d9488',
  color: '#ffffff',
  padding: '8px 16px',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: 500,
  textDecoration: 'none',
};

const ctaSection = {
  backgroundColor: '#f0fdfa',
  padding: '20px',
  borderRadius: '8px',
  margin: '8px 0 24px',
};

const h3 = {
  fontSize: '16px',
  fontWeight: 600,
  color: '#0f172a',
  margin: '0 0 8px',
};

const text = {
  fontSize: '14px',
  color: '#334155',
  margin: '0 0 16px',
  lineHeight: '1.5',
};

const primaryButton = {
  backgroundColor: '#0f766e',
  color: '#ffffff',
  padding: '12px 20px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  textDecoration: 'none',
};

const footer = {
  fontSize: '12px',
  color: '#64748b',
  marginTop: '32px',
  lineHeight: '1.6',
};

const footerLink = {
  color: '#64748b',
  textDecoration: 'underline',
};

const tiny = {
  fontSize: '10px',
  color: '#94a3b8',
  marginTop: '16px',
  lineHeight: '1.5',
};
