const sgMAil = require("@sendgrid/mail");

sgMAil.setApiKey(process.env.SENDGRID_API_KEY);

exports.sendWelcomeMail = (email, name) => {
  console.log("sending", email, name);
  sgMAil.send({
    to: email,
    from: "laura.kokielov@gmail.com",
    subject: "Welcome to Moodle",
    text: `Hi ${name}! 
    Welcome to Moodle!
    Enjoy!`,
  });
};

exports.sendNotificationMail = (email, name) => {
  sgMAil.send({
    to: email,
    from: "laura.kokielov@gmail.com",
    subject: "check your Moodle notifications",
    text: `Hi ${name}! 
    You have new notifications on Moodle!`,
  });
};
