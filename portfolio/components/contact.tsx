"use client";
import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Contact() {
    const {ref} = useSectionInView("Contact");
  return (
    <section className='scroll-mt-28 mb-28 sm:mb-40'
    id='expericontactence'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3 text-center'>Contact Me</h2>
        <p>Please contact me directly at <a className='underline' href='mailto:emmacameron219@gmail.com'>emmacameron219@gmail.com</a>  or through this form.</p>
    </section>
  )
}
