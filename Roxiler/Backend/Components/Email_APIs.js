import { db } from '../Components/DataBase/MyDB.js'


export const sendOTP = async (req, res) => {

  const { email } = req.body;

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Store OTP with expiry (5 min)
  otpStore[email] = { otp, expiry: Date.now() + 5 * 60 * 1000 };

  try {
    // Setup Gmail transporter (use app password for Gmail)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourgmail@gmail.com",   // replace
        pass: "your-app-password",     // not your Gmail password, use App Password
      },
    });

    await transporter.sendMail({
      from: "yourgmail@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    res.json({ success: true, message: "OTP sent successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
}

import obj from '../Data/Email.json' assert { type: 'json' }

console.log("name:", obj.sender);