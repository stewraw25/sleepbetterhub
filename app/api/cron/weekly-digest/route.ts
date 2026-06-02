import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import WeeklySleepInsights from '../../../../emails/WeeklySleepInsights';

const FROM_EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL || 'insights@sleepbetterhub.com';
const CRON_SECRET = process.env.CRON_SECRET;

export async function GET(request: Request) {
  // Simple protection for the cron endpoint
  // Supports both Authorization: Bearer header (good for Vercel Cron) and ?secret= query param (easy for manual curl)
  const authHeader = request.headers.get('authorization');
  const url = new URL(request.url);
  const secretParam = url.searchParams.get('secret');

  const isAuthorized =
    !CRON_SECRET ||
    authHeader === `Bearer ${CRON_SECRET}` ||
    secretParam === CRON_SECRET;

  if (!isAuthorized) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ 
      error: 'RESEND_API_KEY not configured. Add it to test the weekly digest.' 
    }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // For production: You can fetch contacts from the audience and send to them.
    // For this starter, we send to the from address + any comma-separated test emails.
    const testRecipients = (process.env.TEST_EMAIL_RECIPIENTS || FROM_EMAIL)
      .split(',')
      .map(e => e.trim())
      .filter(Boolean);

    const results = [];

    for (const email of testRecipients) {
      const { data, error } = await resend.emails.send({
        from: `SleepBetterHub Insights <${FROM_EMAIL}>`,
        to: email,
        subject: 'This Week in Sleep: New mouth tape tests + nasal breathing protocol',
        react: WeeklySleepInsights({ subscriberEmail: email }),
      });

      if (error) {
        console.error(`Failed to send to ${email}:`, error);
        results.push({ email, success: false, error: error.message });
      } else {
        results.push({ email, success: true, id: data?.id });
      }
    }

    return NextResponse.json({
      success: true,
      sent: results.length,
      results,
      note: 'In production, replace testRecipients with a loop over your Resend audience contacts or trigger a Broadcast from the dashboard.',
    });
  } catch (err: unknown) {
    console.error('Weekly digest cron error:', err);
    const msg = err instanceof Error ? err.message : 'Failed to send digest';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
