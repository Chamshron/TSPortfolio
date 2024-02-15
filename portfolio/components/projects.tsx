"use client";
import React, {useEffect} from 'react';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Projects(){
  const {activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const {ref, inView} = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if(inView){
      setActiveSection("Projects");
     } 
  }, [inView, setActiveSection]);

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
