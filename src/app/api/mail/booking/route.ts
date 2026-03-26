import { NextResponse } from 'next/server';
import { sendMail } from '@/app/lib/mail';

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone = '',
      packageTitle,
      packageDuration = '',
      stayType = '',          // ← NEW
      message = '',
    } = await req.json();

    if (!name || !email || !packageTitle) {
      return NextResponse.json(
        { success: false, error: 'Missing name, email, or packageTitle.' },
        { status: 400 }
      );
    }

    const html = `
      <h2>Curated Package Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Package:</strong> ${packageTitle}</p>
      ${packageDuration ? `<p><strong>Duration:</strong> ${packageDuration}</p>` : ''}
      ${stayType ? `<p><strong>Stay Type:</strong> ${stayType}</p>` : ''}
      ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ''}
    `;

    const text = `Curated Package Booking
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}Package: ${packageTitle}
${packageDuration ? `Duration: ${packageDuration}\n` : ''}${stayType ? `Stay Type: ${stayType}\n` : ''}${message ? `Message: ${message}\n` : ''}
`;

    await sendMail({
      subject: `[Booking] ${packageTitle}${stayType ? ` (${stayType})` : ''} - ${name}`,
      html,
      text,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error('[BOOKING MAIL ERROR]', e);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
