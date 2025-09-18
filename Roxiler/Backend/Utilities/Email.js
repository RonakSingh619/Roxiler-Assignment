// const nodemailer = require("nodemailer");
import nodemailer from "nodemailer"

// configure transporter (using Gmail as example)
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "singhronak356@gmail.com",       // replace with your Gmail
    pass: "riyg eklc uhyi mgfm"          // generate App Password (not Gmail password)
  }
});

// mail options
let mailOptions = {
  from: "singhronak356@gmail.com",
  to: "pranaviyanpallewar04062003@gmail.com",          // recipient email
  subject: "Hello from ronak's Node.js",
  text: "This is a test email sent using Nodemailer!"
};

// send mail
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error:", error);
  }
  console.log("Email sent:", info.response);
});
