const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default function handler(req, res) {
  const body = JSON.parse(req.body);

  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Phone: ${body.phone}\r\n
  Message: ${body.msg}
  `;

  const data = {
    to: "hello@lissner.dev",
    from: "hello@lissner.dev",
    replyTo: body.email,
    subject: "New message from lissner.dev",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "Ok" });
}
