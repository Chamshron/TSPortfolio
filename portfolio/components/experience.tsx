"use client";
import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
    const {ref} = useSectionInView("Experience");

  return (
    <section className=' scroll-mt-28 mb-28 max-w-[53rem] text-center sm:mb-40'
    id='experience'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3'>My Experience</h2>


    </section>
    
  )
}
