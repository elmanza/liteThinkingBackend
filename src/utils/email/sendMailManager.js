const AWS = require('aws-sdk');
const { config } = require('../../config');
const nodemailer = require('nodemailer');
const { EMAILS } = require('../../utils/constants')
let nameSenderEmail = 'Lite Thinking';
class SendMailManager {
  constructor() {
    // this.AWS = new AWS.SES(SESconfig);
  }

  getFinalAddresses(addresses) {
    let finalAddresses = Array.isArray(addresses) ? addresses : [addresses];
    if (config.dev) finalAddresses = config.supportEmails;
    return finalAddresses;
  }

  async sendMailAttachments({
    addresses,
    subject,
    htmlMessage,
    attachments = [],
    bccAddresses = []
  }) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      secure: false,
      auth: {
          user: config.email_server,
          pass: config.email_password
      },
      // SES: this.AWS
  });

    if (config.dev) {
      subject = `|IS_DEVELOP=${config.dev}| ${subject}`;
    }
     
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from:  `"${nameSenderEmail}" <${EMAILS.NOREPLY}>`,
      to: this.getFinalAddresses(addresses),
      bcc: config.dev ? [] : bccAddresses,
      subject,
      html: htmlMessage,
      attachments: attachments.map(file => ({
        filename: file.name,
        content: file.data
      }))
    }); 

    return info;
  }
}

module.exports = new SendMailManager();
