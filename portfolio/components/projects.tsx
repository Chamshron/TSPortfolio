"use client";
import React from 'react';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects()
{
  return (
    <section className=' scroll-mt-28 mb-28'>
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
