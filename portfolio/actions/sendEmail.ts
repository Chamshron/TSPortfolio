"use server";

import { validateString } from "@/lib/utilities";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) => {

    const message = formData.get('senderMessage');
    const email = formData.get('senderEmail');

    if (validateString(email, 500)){
        return{
            error: "Woops! invalid email friend"
        }
    }
    if(validateString(message, 5000)){
        return{
            error: "Woops! Invalid message friend"
        }
    }

    resend.emails.send({
        from: "onboarding@resend.dev",
        to: 'emmacameron219@gmail.com',
        subject: 'Message from contact form',
        reply_to: email,
        text: message,
    });
}