"use client";
import React from 'react';
import Image from 'next/image';
import {motion} from "framer-motion";

export default function Intro() {
  return (
    <section className=''>
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
    </section>
  )
}
