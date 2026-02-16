import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";

const token = process.env.MAILTRAP_TOKEN;
const recipient = process.env.APPOINTMENT_RECIPIENT;
const senderAddress = process.env.MAILTRAP_SENDER_ADDRESS || "hello@demomailtrap.co";
const senderName = process.env.MAILTRAP_SENDER_NAME || "HealRight Physiotherapy";

export async function POST(request: Request) {
  if (!token || !recipient) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Server mail configuration is missing.",
      }),
      { status: 500 }
    );
  }

  const body = await request.json();

  const {
    name,
    phone,
    email,
    preferred_date,
    service,
    message,
  } = body || {};

  if (!name || !phone || !email) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Missing required fields.",
      }),
      { status: 400 }
    );
  }

  const transport = Nodemailer.createTransport(
    MailtrapTransport({
      token,
    })
  );

  const emailText = [
    `New appointment request from HealRight Physiotherapy website:`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Preferred Date: ${preferred_date || "Not specified"}`,
    `Service: ${service || "Not specified"}`,
    `Message: ${message || ""}`,
  ].join("\n");

  await transport.sendMail({
    from: {
      address: senderAddress,
      name: senderName,
    },
    to: [recipient],
    subject: "New Appointment Request — HealRight Physiotherapy",
    text: emailText,
    category: "Appointment",
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
