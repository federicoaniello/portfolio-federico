import { Html, Head, Preview, Body, Container, Heading, Text, Hr } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, message }) => (
  <Html>
    <Head />
    <Preview>New Message from your Portfolio Contact Form</Preview>
    <Body style={{ backgroundColor: '#f6f6f6', fontFamily: 'sans-serif' }}>
      <Container style={{ margin: '0 auto', padding: '20px 0 48px', width: '580px' }}>
        <Heading style={{ fontSize: '24px', letterSpacing: '-0.5px', lineHeight: '1.3' }}>
          New Contact Form Submission
        </Heading>
        <Text style={{ fontSize: '14px', lineHeight: '1.4' }}>
          You received a new message from your personal website.
        </Text>
        <Hr style={{ borderColor: '#cccccc', margin: '20px 0' }} />
        <Text><strong>From:</strong> {name}</Text>
        <Text><strong>Email:</strong> {email}</Text>
        <Hr style={{ borderColor: '#cccccc', margin: '20px 0' }} />
        <Heading as="h2" style={{ fontSize: '20px' }}>Message:</Heading>
        <Text>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;