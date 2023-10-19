import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SENDER_EMAIL,
    to: process.env.MAIN_EMAIL,
    subject: `[Digital Army] - Contact Form Submission: ${body.fullname}`,
    text: `
      -- Contact Form Submission > Digital Army
      > Uses <a href="https://www.findservices.tech/">FindServices</a> Mailer (1 Year Subscription)
  
      - Full Name: ${body.fullname}
      - Email: ${body.email}
      - What Are You: ${body.whatareyou}
      - Company Name: ${body.companyname || "N/A"}
      - Needed Services: ${
        body.neededservices ? body.neededservices.join(", ") : "N/A"
      }
      - Area of Interest: ${body.areaofinterest || "N/A"}
      - CV Link: ${body.cvlink || "N/A"}
      - Pricing: ${body.pricing || "N/A"}
      - Provided Services: ${body.providedservices || "N/A"}
      
      - Message:
      ${body.message}
    `,
  };

  try {
    await mailTransporter.sendMail(mailOptions);
    return new Response("200");
  } catch (error) {
    return new Response("500");
  }
}
