"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) => {

    const message = formData.get('senderMessage');
    const email = formData.get('senderEmail');

    if (!message || typeof message !== "string"){
        return{
            error: "Woops! That's an invalid message friend"
        };
    }

    if (!email || typeof email !== "string"){
        return{
            error: "Woops! That's an invalid email address friend"
        };
    }

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'emmacameron219@gmail.com',
        subject: 'Message from contact form',
        reply_to: email,
        text: message,
    });
}