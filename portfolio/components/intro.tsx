"use client"
import React from 'react';
import Image from 'next/image';

export default function Intro() {
  return (
    <section className=' top-10'>
        <div className='flex items-center justify-center'>
            <div className=' max-w-40'>
                <Image src="/emmacameron.png"
                        width="250"
                        height="250"
                        alt='Portrait images of Emma Cameron'
                        quality="95"
                        priority={true}
                        className=' h-24 w-24 rounded-full border-[0.35rem] border-white object-cover' />
            </div>
        </div>

    </section>
  )
}
