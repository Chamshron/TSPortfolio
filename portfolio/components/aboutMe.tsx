"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function AboutMe() {
  const {activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const {ref, inView} = useInView({
    threshold:0.75,
  });

    useEffect(() => {
      if(inView){
        setActiveSection("About");
       } 
    }, [inView, setActiveSection])
   

  return (
    <motion.section className=' mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    id='about'
    ref={ref}
    >
        <h2 className='font-medium text-3xl mb-3'>About Me</h2>
        <p className='mb-3 text-justify'>After graduating in the pandemic with a degree in <span className='font-medium'>Mandarin Chinese and German</span>, I persued a career in CRM Customer Support. It was there working closely with DevOps engineers I developed a passion for programming and enrolled in CodeClan, a coding bootcamp in Scotland. There I learned <span className='font-medium'>full-stack web development</span> and my passion for <span className='italic'>problem-solving</span> blossomed. My core stack is <span className='font-medium'>React, Node.js, and MongoDB</span>. I am also familar with Typescript, Python, and Java. I am always looking to learn new technologies.I am current looking for a <span className='font-medium'>full-time position as a software developer</span>.</p>
        <p className='text-justify'>
            <span className='italic'>When {`I'm`} not coding</span>, I practice and coach a Japanese martial art called Kendo. I also enjoy <span className='font-medium'>learning new languages</span>, coding and non-coding langauges.</p>
    </motion.section>
  )
}
