import { sendEmail } from "lib/mail.utils";

export const POST = async (request) => {
  const res = await request.json();
  const email = res.email;
  try {
    const result = await sendEmail({
      from: email,
      to: "yiru.wang.art@gmail.com",
      name: "Yiru Wang",
      subject: "Request for Exhibition Ticket",
      body: `<div style="text-align: center;">
      <p>Hello, Yiru.</p>
      <p>I am writing to kindly request information on how I might obtain tickets to the exhibition.</p>
      <p>My email address is 
        <a href="mailto:${email}" style="color: blue;">${email}</a>
      </p>
    </div>`,
    });
    return Response.json({
      accepted: result.accepted,
    });
  } catch (error) {
    return Response.json({
      message: "Unable to send email this time, try again later.",
    });
  }
};
