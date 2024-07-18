import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "qq",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const sendEmail = async (dto) => {
  const { to, subject, body } = dto;
  return await transport.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    html: body,
  });
};
