import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import EmailTemplate from '@/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.FORM_EMAIL_TO;

export async function POST(request: Request) {
  try {
    if (!emailTo) {
      throw new Error('FORM_EMAIL_TO environment variable is not set.');
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Must be from a domain you own/verified with Resend
      to: emailTo,
      subject: 'New Message from your Portfolio',
      reply_to: email,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email', details: error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Server Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: 'An internal server error occurred', details: errorMessage }, { status: 500 });
  }
}