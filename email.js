let node = require('nodemailer')

// const email = 'uxkqpxnfj7d5rxbg@ethereal.emai';

// const transporter = node.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'uxkqpxnfj7d5rxbg@ethereal.email',
//         pass: 'JzY54yRq5tRXjvjMSM'
//     }
// });

let { createTransport } = require('nodemailer');

const email = 'ar.manzano.94@gmail.com';

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: email,
        pass: 'xerxywydkjmiczdb'
    }
});

let subject = process.argv[2];
let html = process.argv[3];


(async () => {
    const options = {
        from: "Andres Manzano",
        to:'amanzano@lean-tech.io',
        subject,
        html,
        attachments:[
            {
                path: 'imgtest.png'
            }
        ]
    }
    try{
        const respuesta = await transporter.sendMail(options)
        console.log(respuesta)
    }
    catch(err){
        console.log(err)
    }
})()
