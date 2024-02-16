"use client";
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
    const {ref} = useSectionInView("Contact");
  return (
    <section className='scroll-mt-28 mb-28 sm:mb-28 w-[min(100%,38rem)] text-center'
    id='expericontactence'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3 text-center'>Contact Me</h2>
        <p className=' text-gray-700'>Please contact me directly at <a className='underline' href='mailto:emmacameron219@gmail.com'>emmacameron219@gmail.com</a>  or through this form.</p>
        <form className=' flex flex-col mt-10'>
            <input className=' px-4 h-14 rounded-lg border border-black/10' 
            type='email'
            placeholder='Your Email Here' />
            <textarea className=' px-4 h-50 my-3 p-4 rounded-lg border border-black/10'
            placeholder='Your Message '
             />
            <button className=' group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-allfocus:scale-110 hover:scale-110 active:scale-105' 
            type='submit'
            >Submit<FaPaperPlane className=' text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '/></button>
        </form>
    </section>
  )
}
