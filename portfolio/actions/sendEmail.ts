"use server";

import { motionValue } from "framer-motion";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const validateString = (value: unknown) => {
    if (!value || typeof motionValue !== "string"){
        return false;
    }
    return true;
}

export const sendEmail = async (formData : FormData) => {

    const message = formData.get('senderMessage');
    const email = formData.get('senderEmail');

    if (validateString(email)){
        return{
            error: "Woops! invalid email friend"
        }
    }
    if(validateString(message)){
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