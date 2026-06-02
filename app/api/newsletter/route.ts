import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const isPlaceholderKey = !apiKey || apiKey.includes('xxxx') || apiKey === 're_xxxxxxxxxxxxxxxxxxxxxxxx';

    if (isPlaceholderKey) {
      // Dev fallback: just pretend it worked (no real key = no real sending yet)
      console.log('[DEV] Newsletter signup (simulated):', email);
      return NextResponse.json({ 
        success: true, 
        message: 'Subscribed (dev mode — add your real RESEND_API_KEY to .env.local for real subscriptions)' 
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (AUDIENCE_ID) {
      // Add contact to Resend Audience for proper list management
      const { error } = await resend.contacts.create({
        email: email.toLowerCase().trim(),
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      });

      if (error && !error.message?.toLowerCase().includes('already exists')) {
        console.error('Resend contact error:', error);
        // Still continue to send welcome even if contact fails
      }
    } else {
      console.log(`[Resend] No AUDIENCE_ID set. Logged subscription for: ${email} (create audience in Resend for full list features)`);
    }

    // Send a nice welcome email (works even without audience)
    try {
      await resend.emails.send({
        from: process.env.NEXT_PUBLIC_FROM_EMAIL || 'onboarding@resend.dev',
        to: email,
        subject: 'Welcome to SleepBetterHub Weekly Insights',
        html: `
          <p>Hi there,</p>
          <p>Thanks for subscribing to SleepBetterHub's weekly sleep science digest.</p>
          <p>You'll get evidence-based tips, new product tests, and honest reviews straight to your inbox.</p>
          <p><a href="http://localhost:3000">Visit SleepBetterHub</a></p>
          <p>— The SleepBetterHub Team</p>
        `,
      });
    } catch (e) {
      console.error('Welcome email send failed:', e);
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully! Check your inbox for a welcome email.' });
  } catch (err) {
    console.error('Newsletter subscription error:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
