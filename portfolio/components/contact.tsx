"use client";
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import SubmitButton from './submitButton';
import toast from 'react-hot-toast';

export default function Contact() {
    const {ref} = useSectionInView("Contact");
    

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
        <p className=' text-gray-700 dark:text-white/70'>Please contact me directly at <a className='underline' href='mailto:emmacameron219@gmail.com'>emmacameron219@gmail.com</a>  or through this form.</p>

        <form className=' flex flex-col mt-10 dark:text-black'
        action={ async formData => {
            const { data, error} = await sendEmail(formData);

            if(error){
                toast.error(error);
                return;
            }
                toast.success("Thanks! Email sent successfully")
        }}
        >
            <input className=' px-4 h-14 rounded-lg border border-black/10 dark:bg-white/80 dark:focus:bg-white/100' 
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your Email Here'
            />

            <textarea className=' px-4 h-52 my-3 p-4 rounded-lg border border-black/10 dark:bg-white/80 dark:focus:bg-white/100'
            name='message'
            placeholder='Your Message '
            required
            maxLength={5000}
            />

            <div className=' flex justify-center'><SubmitButton /></div>
        </form>
    </motion.section>
  )
}
