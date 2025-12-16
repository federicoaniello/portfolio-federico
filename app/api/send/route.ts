import { EmailTemplate } from '@/app/components/emails/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: `email@zoismarea.resend.app`,
      to: 'federicoaniello@hotmail.it',
      subject: 'Nuovo messaggio dal sito portfolio',
      react: await EmailTemplate({ firstName: name, message }),
      replyTo: email
    });
    
    return Response.json(data);
  } catch (error) {

    return Response.json({ error });
  }
}
