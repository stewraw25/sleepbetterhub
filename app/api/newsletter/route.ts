import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { getContactEmail, getSiteUrl, isRealEmail } from '@/lib/site';

const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

function notConfigured(reason: string) {
  console.error(`[newsletter] Signup rejected: ${reason} The address was not stored.`);
  return NextResponse.json(
    { error: 'We could not save your email because the mailing list is not set up. Nothing was stored.' },
    { status: 503 },
  );
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== 'string' || !isRealEmail(email.trim())) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 });
    }

    const address = email.trim().toLowerCase();
    const apiKey = process.env.RESEND_API_KEY;
    const keyMissing = !apiKey || apiKey.includes('xxxx') || apiKey === 're_xxxxxxxxxxxxxxxxxxxxxxxx';

    if (keyMissing) {
      return notConfigured('RESEND_API_KEY is missing or still a placeholder.');
    }

    if (!AUDIENCE_ID) {
      return notConfigured('RESEND_AUDIENCE_ID is not set, so the address cannot be stored.');
    }

    const from = getContactEmail();
    const resend = new Resend(apiKey);

    const { error } = await resend.contacts.create({
      email: address,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    const alreadyThere = Boolean(error?.message?.toLowerCase().includes('already'));
    if (error && !alreadyThere) {
      console.error('[newsletter] Resend did not store the contact.', error);
      return NextResponse.json(
        { error: 'We could not save your email. Nothing new was stored. Please try again later.' },
        { status: 502 },
      );
    }

    let welcomeSent = false;
    if (!isRealEmail(from)) {
      console.error('[newsletter] NEXT_PUBLIC_CONTACT_EMAIL is not a real address. Welcome email was not sent. The contact is stored.');
    } else {
      try {
        const site = getSiteUrl();
        const sent = await resend.emails.send({
          from,
          to: address,
          subject: 'Welcome to SleepBetterHub',
          html: `
            <p>Hi,</p>
            <p>Your email is on the SleepBetterHub list.</p>
            <p>Messages from this list are guides and product notes. This site does not send lab-test results.</p>
            <p><a href="${site}">Visit SleepBetterHub</a></p>
            <p>To be removed, email the contact address on <a href="${site}/privacy">the privacy page</a>. There is no automatic unsubscribe button.</p>
            <p>— SleepBetterHub</p>
          `,
        });
        if (sent.error) {
          console.error('[newsletter] Welcome email failed. The contact is stored.', sent.error);
        } else {
          welcomeSent = true;
        }
      } catch (sendError) {
        console.error('[newsletter] Welcome email threw. The contact is stored.', sendError);
      }
    }

    const message = alreadyThere
      ? 'That email is already on the list.'
      : welcomeSent
        ? 'You are on the list. Check your inbox for a short note.'
        : 'You are on the list. The welcome email could not be sent.';

    return NextResponse.json({ success: true, message });
  } catch (err) {
    console.error('[newsletter] Subscription error.', err);
    return NextResponse.json({ error: 'Something went wrong. Your email may not have been saved.' }, { status: 500 });
  }
}
