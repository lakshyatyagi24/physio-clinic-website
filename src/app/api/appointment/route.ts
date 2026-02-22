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

  // Plain text version
  const emailText = [
    `New Appointment Request - HealRight Physiotherapy`,
    ``,
    `PATIENT DETAILS`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    ``,
    `APPOINTMENT DETAILS`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Preferred Date: ${preferred_date || "Not specified"}`,
    `Service Requested: ${service || "Not specified"}`,
    ``,
    `MESSAGE`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `${message || "No message provided"}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `HealRight Physiotherapy - Restore Motion, Reclaim Life`,
    `Dr. Anchal Tyagi (PT)`,
    ``,
    `Phone: +91 92137 29266`,
    `Email: healrightphysio@gmail.com`,
    `Website: https://healrightphysio.in/`,
    ``,
    `Address:`,
    `306, M.k. Tyagi Villa, Sai Garden 2, Shahberi,`,
    `Sector 4, Greater Noida West,`,
    `Gautam Budh Nagar, UP - 201301`,
  ].join("\n");

  // HTML version
  const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Appointment Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
          
          <!-- Header with Brand -->
          <tr>
            <td style="background: linear-gradient(135deg, #9B5E2F 0%, #7a4a24 100%); padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                🏥 HealRight Physiotherapy
              </h1>
              <p style="margin: 8px 0 0 0; color: #f0e6d9; font-size: 14px; font-weight: 400;">
                Restore Motion, Reclaim Life
              </p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #22c55e; padding: 16px 30px; text-align: center;">
              <p style="margin: 0; color: #ffffff; font-size: 16px; font-weight: 600;">
                ✨ New Appointment Request Received
              </p>
            </td>
          </tr>

          <!-- Patient Details -->
          <tr>
            <td style="padding: 30px 30px 20px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1e1814; font-size: 20px; font-weight: 700; border-bottom: 3px solid #9B5E2F; padding-bottom: 10px;">
                📋 Patient Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Name</span>
                    <span style="color: #1e1814; font-size: 16px; font-weight: 600;">${name}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Phone</span>
                    <a href="tel:${phone}" style="color: #9B5E2F; font-size: 16px; font-weight: 600; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Email</span>
                    <a href="mailto:${email}" style="color: #9B5E2F; font-size: 16px; font-weight: 600; text-decoration: none;">${email}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Appointment Details -->
          <tr>
            <td style="padding: 20px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1e1814; font-size: 20px; font-weight: 700; border-bottom: 3px solid #9B5E2F; padding-bottom: 10px;">
                📅 Appointment Details
              </h2>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Preferred Date</span>
                    <span style="color: #1e1814; font-size: 16px; font-weight: 600;">${preferred_date || "Not specified"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #6b7280; font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Service Requested</span>
                    <span style="color: #1e1814; font-size: 16px; font-weight: 600;">${service || "Not specified"}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message Section -->
          ${message ? `
          <tr>
            <td style="padding: 20px 30px 30px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #1e1814; font-size: 20px; font-weight: 700; border-bottom: 3px solid #9B5E2F; padding-bottom: 10px;">
                💬 Patient Message
              </h2>
              <div style="background-color: #f9fafb; border-left: 4px solid #9B5E2F; padding: 16px 20px; border-radius: 4px;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </td>
          </tr>
          ` : ''}

          <!-- Footer -->
          <tr>
            <td style="background-color: #1e1814; padding: 30px; text-align: center;">
              <h3 style="margin: 0 0 16px 0; color: #ffffff; font-size: 18px; font-weight: 700;">
                HealRight Physiotherapy
              </h3>
              <p style="margin: 0 0 4px 0; color: #d1d5db; font-size: 14px;">
                Dr. Anchal Tyagi (PT)
              </p>
              <p style="margin: 0 0 20px 0; color: #9ca3af; font-size: 13px; font-style: italic;">
                Restore Motion, Reclaim Life
              </p>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
                <tr>
                  <td style="padding: 8px 0; border-top: 1px solid #374151;">
                    <a href="tel:+919213729266" style="color: #9B5E2F; font-size: 14px; text-decoration: none; font-weight: 500;">
                      📞 +91 92137 29266
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <a href="mailto:healrightphysio@gmail.com" style="color: #9B5E2F; font-size: 14px; text-decoration: none; font-weight: 500;">
                      ✉️ healrightphysio@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <a href="https://healrightphysio.in/" style="color: #9B5E2F; font-size: 14px; text-decoration: none; font-weight: 500;">
                      🌐 healrightphysio.in
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0 0 0; border-top: 1px solid #374151;">
                    <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.6;">
                      📍 306, M.k. Tyagi Villa, Sai Garden 2, Shahberi,<br>
                      Sector 4, Greater Noida West,<br>
                      Gautam Budh Nagar, UP - 201301
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  await transport.sendMail({
    from: {
      address: senderAddress,
      name: senderName,
    },
    to: [recipient],
    subject: `🏥 New Appointment Request - ${name}`,
    text: emailText,
    html: emailHtml,
    category: "Appointment",
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
