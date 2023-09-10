import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactForm {
  fullname: string;
  email: string;
  whatareyou: string;
  neededServices: string;
  message: string;
  areaofinterest: string;
  cvlink: string;
  pricing: string;
}

export async function POST(request: ContactForm) {
  const {
    fullname,
    email,
    whatareyou,
    neededServices,
    message,
    areaofinterest,
    cvlink,
    pricing,
  } = request;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
    const mailOption = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: "Contact Form Submission",
      html: `<p>You have a new contact form submission</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Email: ${email}</li>
    </ul>

    <br>

    <h3>Details</h3>
    <p>Full Name: ${fullname}</p>
    <p>I'am: ${whatareyou}</p>
    <p>Needed Services: ${neededServices}</p>
    <p>Area Of Interest: ${areaofinterest}</p>
    <p>Link: ${cvlink}</p>
    <p>Pricing: ${pricing}</p>

    <br>

    <h3>Message</h3>
    <p>${message}</p>

    `,
    };

    const result = transporter.sendMail(mailOption, (err, data) => {});
    return NextResponse.json({
      message: "Email sent successfully",
      status: 200,
    });
  } catch {
    return NextResponse.json({ message: "Something went wrong", status: 500 });
  }
}
