const nodemailer = requrie("nodemailer")

const  sendEmail = async (to, subject, html)=>{
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth: {
                user : 'harshitkasera01@gmail.com',
                pass : ''
            }
        });
        const mailOptions = {
            from: 'YourApp <your-email@gmail.com',
            to,
            subject,
            html,
        }
        await transporter.sendEmail(mailOptions)
        console.log("Email sent successfully")
    }
    catch(error){
        console.error("Email not sent", error.message)
        throw new Error("Email sending failed")
    }
}