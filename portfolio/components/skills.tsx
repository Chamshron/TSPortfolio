"use client";
import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

const fadeInAnimiation = {
    initial: {
        opacity: 0,
        y:100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y:0,
        transition: {
            delay: 0.05 * index,
        }
    }),
};

export default function Skills() {
    const {ref} = useSectionInView("Skills");
  return (
    <section className=' scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40'
    id='skills'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3'>My Skills</h2>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800'>
            {skillsData.map((skill, index) => (
                <motion.li 
                className=' bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80' 
                key={index}
                variants={fadeInAnimiation}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
                custom={index}
                >{skill}</motion.li>
            ))}
        </ul>
    </section>
  )
}
