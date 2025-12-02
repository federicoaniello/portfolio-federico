import { EmailTemplate } from '@/app/components/emails/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log(process.env.RESEND_API_KEY)
    const body = await req.json();
    const { name, email, message } = body;
    console.log(body)
    const data = await resend.emails.send({
      from: '<anything>@zoismarea.resend.app',
      to: ['federicoaniello@hotmail.it'],
      subject: 'New message from your portfolio',
      react: await EmailTemplate({ firstName: name, message }),
      replyTo: email
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
