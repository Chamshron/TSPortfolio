"use client";
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';
import {motion} from "framer-motion";

export default function Contact() {
    const {ref} = useSectionInView("Contact");

    const sendEmail = async (formData : FormData) => {
        "use server";
        console.log("Running on server");
        console.log(formData.get("senderEmail"));
        console.log(formData.get("senderMessage"));
    }

  return (
    <motion.section className='scroll-mt-28 mb-28 sm:mb-28 w-[min(100%,38rem)] text-center'
    id='contact'
    ref={ref}
    initial={{
        opacity:0,
    }}
    whileInView={{
        opacity:1,
    }}
    transition={{
        duration:1,
    }}
    viewport={{
        once:true,
    }}
    >
        <h2 className='font-medium text-3xl mb-3 text-center'>Contact Me</h2>
        <p className=' text-gray-700'>Please contact me directly at <a className='underline' href='mailto:emmacameron219@gmail.com'>emmacameron219@gmail.com</a>  or through this form.</p>
        <form className=' flex flex-col mt-10'
        action={ async (formData) => {
            console.log("Running on client")
            console.log(formData.get("senderEmail"));
            console.log(formData.get("senderMessage"));
            sendEmail(formData);
        }}
        >
            <input className=' px-4 h-14 rounded-lg border border-black/10' 
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your Email Here' />
            <textarea className=' px-4 h-52 my-3 p-4 rounded-lg border border-black/10'
            name='senderMessage'
            placeholder='Your Message '
            required
            maxLength={500}
             />
            <button className=' group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-allfocus:scale-110 hover:scale-110 active:scale-105' 
            type='submit'
            >Submit<FaPaperPlane className=' text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '/></button>
        </form>
    </motion.section>
  )
}
