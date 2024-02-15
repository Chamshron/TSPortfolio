"use client";
import React, {useEffect} from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";
import Link from 'next/link';
import {BsArrowRight, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import {FaGithubSquare} from "react-icons/fa";
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Intro() {
    const {activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const {ref, inView} = useInView({
      threshold:0.5,
    });
  
      useEffect(() => {
        if(inView){
          setActiveSection("Home");
         } 
      }, [inView, setActiveSection])
    
  return (
    <section 
    className=' mb-28 max-w-[50rem] text-center scroll-mt-[100rem] sm:mb-0'
    id='home'
    ref={ref}
    >
        <div className='flex items-center justify-center'>
            <motion.div
            initial={{ scale:0, opacity: 0}}
            animate={{scale:1, opacity: 1}}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
            className='relative'
            >
                <Image src="/emmacameron.png"
                        width="250"
                        height="250"
                        alt='Portrait images of Emma Cameron'
                        quality="95"
                        priority={true}
                        className=' h-30 w-30 rounded-full border-[0.35rem] border-white object-cover' />
                        <motion.span className=' absolute bottom-5 right-1 text-5xl'
                        initial={{opacity:0, scale:0}}
                        animate={{opacity:1, scale: 1}}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.2,
                        }}
                        >
                        🐯     
                        </motion.span>
            </motion.div>
        </div>
        <motion.p className='mb-10 mt-4 text-2xl font-medium leading-[1.5] sm:text-4xl'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        >
                <span className='font-bold'> {`Hi, I'm Emma.`}</span> {`I'm a`} {" "}
                <span className='font-bold'>full-stack developer</span> with a background in CRM customer support. I enjoy buildings
                <span className='italic'> sites & apps</span>.
            </motion.p>
            <motion.div 
            className=' flex flex-col sm:flex-row  items-center justify-center gap-3 px-4 text-lg font-medium'
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{
                delay:0.1,
            }}
            >
                <Link href="#contact"
                className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-950 active:scale-105 transition'>
                    Contact me here<BsArrowRight className=' opacity-70 group-hover:translate-x-1 transition' />{" "}</Link>
                <a className=' group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10'
                href='/EmmaCameron_Resume.pdf'
                download
                >Download CV <HiDownload className=' opacity-70 group-hover:translate-y-1 transition' /> {" "}</a>  
                <a
                className=' bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950' 
                href='https://linkedin.com/in/emma-cameron-范恩茗）-54b671192' target='_blank'
                ><BsLinkedin /></a>
                <a
                className=' bg-white text-gray-900 p-4 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition border border-black/10 hover:text-gray-950' 
                href='https://github.com/Chamshron'
                target='_blank'
                ><FaGithubSquare /></a>  

            </motion.div>
    </section>
  )
}
