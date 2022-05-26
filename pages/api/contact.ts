import type { NextApiRequest, NextApiResponse } from 'next';
import { createTransport } from 'nodemailer';
import dotenv from 'dotenv';

import type { EmailFieldValues } from 'containers/contact-us/types';

dotenv.config();

type Data = EmailFieldValues;

const createEmailHTML = (data: Data) => {
  return `
  <h2>Emailer: ${data.name}</h2>
  <h4>Phone number: ${data.phoneNumber}</h4>
  <p><b>Message:</b></p>
  <p>${data.question}</p>
  `;
};

export default function (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = req.body as Data;

  const transporter = createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'bad.bad.jaguar@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: body.email,
    to: ['bad.bad.jaguar@gmail.com', 'alexander.ataakgayev@mbicycle.com'],
    subject: `Message From ${req.body.name}`,
    text: `Phone: ${body.phoneNumber} Message: ${body.question}`,
    html: createEmailHTML(req.body)
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.error(err);
    else
      console.log(info);
  });

  res.status(200);
}
