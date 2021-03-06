const sgMail = require("@sendgrid/mail");

require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendSignInEmail = async (email, username) => {
  const msg = {
    to: email, // Change to your recipient
    from: process.env.SENDGRID_EMAIL, // Change to your verified sender
    templateId: process.env.SENDGRID_SIGNUP_TEMPLATE,
    dynamicTemplateData: {
      username: username,
    },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = sendSignInEmail;
