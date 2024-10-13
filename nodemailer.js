const nodemailer = require('nodemailer');
const { config } = require('./config/config');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  secure: true, // true for port 465, false for other ports
  port: 465,
  auth: {
    user: config.appMailEmail,
    pass: config.appMailPassword,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: config.appMailEmail, // sender address
    to: config.appMailEmail, // list of receivers
    subject: 'Correo de prueba2XD', // Subject line
    text: 'Finisimo', // plain text body
    html: '<b>If you want</b>', // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendMail();
