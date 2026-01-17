import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  const emailT = process.env.EMAIL;
  if(!emailT) throw new Error('No email from ENV!');
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      from: 'email <onboarding@resend.dev>',
      to: [emailT],
      subject: 'New message from your portfolio',
      text: `<div>
    <h1>New message from ${name}!</h1>
    <p>${message}</p>
  </div>`,
      replyTo: email
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
