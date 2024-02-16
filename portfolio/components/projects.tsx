"use client";
import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';

export default function Projects(){
  const {ref} = useSectionInView("Projects");

  return (
    <section className=' scroll-mt-12 mb-28'
    id='projects'
    ref={ref}>
        <h2 className=' text-center font-medium text-3xl mb-4'>My Projects</h2>
        <div>
            {projectsData.map((project, index) => (
                <React.Fragment key={index}>
                    <Project {...project} />
                </React.Fragment>
            ))}
        </div>
    </section>
  )
}
