"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utilities";
import ContactFormEmail from "@/emails/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "emmacameron219@gmail.com",
      subject: "Message from portfolio contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderMessage: senderMessage,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};