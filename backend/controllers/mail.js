const mailSender = require("../utils/mailSender");
const {
  contactConfirmationEmail,
  contactMe,
} = require("../mail/templates/contactReply");

require("dotenv").config();

exports.sendMail = async (req, res) => {
  try {
    const email = req.body.email;
    const personName = req.body.name;
    const Message = req.body.message;
    // console.log(email);
    await mailSender(
      email,
      "Thank You For Contacting Us",
      contactConfirmationEmail(personName)
    );
    await mailSender(
      "jainarchit1604@gmail.com",
      "Awaiting your response",
      contactMe(personName, email, Message)
    );
    // console.log("hello");
    return res.json({
      success: true,
      message: "Email Sent Successfully",
    });
  } catch (err) {
    // console.log("hello");
    return res.status(400).json({
      success: false,
      message: "Failed at Sending Mail,Error",
    });
  }
};
