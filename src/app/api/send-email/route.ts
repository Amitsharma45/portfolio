import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    const {data, error} = await resend.emails.send({
      from: 'Fardeen <onboarding@resend.dev>',
      to: ['fardeenmansuri0316@gmail.com'],
      subject: 'Message from Your Portfolio',
      react: EmailTemplate({ Email: email, Message: message }),
    });

    if(error) {
      return NextResponse.json(
        { success: false, message: 'Something went wrong while sending email :(' },
        { status: 501 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'I will get in touch with you soon :)' },
      { status: 200 }
    );
    
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error },
      { status: 501 }
    );
  }
}
