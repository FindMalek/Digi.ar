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
		from: `FindMalek Mailer <${process.env.SENDER_EMAIL}>`,
		to: process.env.MAIN_EMAIL,
		subject: `[Digital Army] - Contact Form Submission: ${body.fullname}`,
		html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
            }
            .container {
              width: 80%;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 5px;
              background-color: #f9f9f9;
            }
            .header {
              font-size: 20px;
              color: #333;
            }
            .content {
              margin-top: 20px;
            }
            .content p {
              margin: 5px 0;
            }
            .footer {
              margin-top: 30px;
              font-size: 14px;
              text-align: center;
            }
            a {
              color: #007bff;
              text-decoration: none;
            }
            a:hover {
              text-decoration: underline;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Contact Form Submission > Digital Army</h2>
            </div>
            <div class="content">
              <p><strong>Full Name:</strong> ${body.fullname}</p>
              <p><strong>Email:</strong> ${body.email}</p>
              <p><strong>What Are You:</strong> ${body.whatareyou}</p>

              <p><strong>Company Name:</strong> ${body.companyname || "N/A"}</p>
              <p><strong>Needed Services:</strong> ${
								body.neededservices ? body.neededservices.join(", ") : "N/A"
							}</p>
              <p><strong>Area of Interest:</strong> ${
								body.areaofinterest || "N/A"
							}</p>
              <p><strong>CV Link:</strong> ${
								body.cvlink
									? `<a href="${body.cvlink}" style="color: #007bff;">View CV</a>`
									: "N/A"
							}</p>
              <p><strong>Pricing:</strong> ${body.pricing || "N/A"}</p>
              <p><strong>Provided Services:</strong> ${
								body.providedservices || "N/A"
							}</p>

              <h3>Message:</h3>
              <p>${body.message}</p>
            </div>
            <div class="footer">
              <p>Uses <a href="https://www.findservices.tech/">FindServices</a> Mailer (1 Year Subscription)</p>
            </div>
          </div>
        </body>
      </html>
    `,
	};

	try {
		await mailTransporter.sendMail(mailOptions);
		return new Response("200");
	} catch (error) {
		return new Response("500");
	}
}
