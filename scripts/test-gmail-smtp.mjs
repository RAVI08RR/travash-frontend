import nodemailer from 'nodemailer';

async function testSmtp() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER || 'leads.travash@gmail.com';
  const pass = process.env.SMTP_PASSWORD || 'hjihbjgfgeqnsfrl';

  console.log(`Testing SMTP Connection to ${host}:${port} with user "${user}"...`);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: { user, pass },
    requireTLS: true,
  });

  try {
    await transporter.verify();
    console.log('✓ SMTP Connection Verified Successfully!');

    const info = await transporter.sendMail({
      from: `"Travash Website" <${user}>`,
      to: process.env.ENQUIRY_TO || user,
      subject: 'Travash Website - SMTP Connection Test',
      text: 'This is a test email sent from Travash Website to verify Gmail SMTP configuration.',
      html: '<h3>Travash Website - SMTP Connection Test</h3><p>Your Gmail SMTP connection and App Password are set up and working properly!</p>',
    });

    console.log('✓ Test Email Sent Successfully!');
    console.log('  Message ID:', info.messageId);
    console.log('  Response:', info.response);
  } catch (err) {
    console.error('❌ SMTP Verification Failed:', err);
    process.exit(1);
  }
}

testSmtp();
