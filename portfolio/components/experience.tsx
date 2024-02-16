"use client";
import React from "react";
import {
    VerticalTimeline,
     VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
    const {ref} = useSectionInView("Experience");

  return (
    <section className='scroll-mt-28 mb-28 sm:mb-40'
    id='experience'
    ref={ref}>
        <h2 className='font-medium text-3xl mb-3 text-center'>My Experience</h2>
        <VerticalTimeline 
        lineColor="">
            {experiencesData.map((item, index) => (
                    <VerticalTimelineElement 
                    key={index}
                    visible={true}
                    contentStyle={{
                        background:"#ffffff",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                    }}
                    contentArrowStyle={{
                        borderRight:"0.4rem solid #9ca3af",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                        background: "white",
                        fontSize: "1.5rem"
                    }}
                    >
                        <h3 className=" font-semibold capitalize">{item.title}</h3>
                        <p className=" font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
                    </VerticalTimelineElement>
            ))}
      </VerticalTimeline>
    </section>
  );
}
