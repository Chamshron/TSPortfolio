"use client"
import React from 'react';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
    const {ref} = useSectionInView("Skills");

  return (
    <section className=' scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40'
    id='experience'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3'>Experience</h2>
    </section>
    
  )
}
