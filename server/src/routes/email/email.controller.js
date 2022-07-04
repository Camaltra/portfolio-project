const sendSignInEmail = require("../../services/email");

require("dotenv").config();

const httpSendSignUpEmail = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  if (!email || !username) {
    return res.status(400).json({ error: "Can't send the email" });
  }

  if (
    !process.env.SENDGRID_API_KEY ||
    !process.env.SENDGRID_EMAIL ||
    !process.env.SENDGRID_SIGNUP_TEMPLATE
  )
    return res.status(200).json({ error: "Params not initilize" });
  await sendSignInEmail(email, username).catch((err) => {
    console.error(err);
  });

  return res.status(200).json({ success: "Email send" });
};

module.exports = {
  httpSendSignUpEmail,
};
