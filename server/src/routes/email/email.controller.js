const sendSignInEmail = require("../../services/email");

const httpSendSignUpEmail = async (req, res) => {
  const email = req.body.email;
  const username = req.body.username;

  if (!email || !username) {
    return res.status(400).json({ error: "Can't send the email" });
  }

  await sendSignInEmail(email, username);

  return res.status(200).json({ success: "Email send" });
};

module.exports = {
  httpSendSignUpEmail,
};
