const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.msg}
    `;

    const data = {
      to: "hello@lissner.dev",
      from: "hello@lissner.dev",
      replyTo: body.email,
      subject: body.subject,
      text: message,
      html: message.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);

    res.status(200).json({ status: "Ok" });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
