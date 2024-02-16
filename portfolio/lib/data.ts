import React from "react";
import subwaySamurai from "@/public/SubwaySamurai.png";
import navigate from "@/public/Navigate.png";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name:"About",
        hash: "#about",
    },
    {
        name:"Projects",
        hash:"#projects",
    },
    {
        name:"Skills",
        hash:"#skills",
    },
    {
        name:"Experience",
        hash:"#experience",
    },
    {
        name:"Contact",
        hash:"#contact",
    },
 ] as const;

 export const projectsData = [
    {
        title: "Subway Samurai",
        description:"A platformer/turn-based game set in Glasgow.",
        tags:["React", "JavaScript", "HowlerJS", "CSS", "Java", "Spring", "Insomnia", "Postico"],
        imageUrl: subwaySamurai,
        githubURL:"https://github.com/Dannycarey23/SubwaySamurai_frontend",
    },
    {
        title: "Navigate - Helping People Find Shelter",
        description:"Internal, location-data and management application for the social services in Glasgow.",
        tags:["React", "JavaScript", "ArcGIS", "Express", "MongoDB"],
        imageUrl: navigate,
        githubURL:"https://github.com/markmcgrory/navigate_app",
    }
 ] as const;

 export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Python",
    "PostgreSQL",
    "Express",
    "Framer Motion",
    "Java",
    "Cypress",
    "Jester",
    "Mocha"
 ] as const;

 export const experiencesData = [
    {
      title: "Graduated CodeClan",
      location: "Glasgow",
      description:
        "I graduated after 16 weeks of intensive studying. I completed over 800 hours worth of hands-on coding, through both solo and group projects.",
      icon: React.createElement(LuGraduationCap),
      date: "Nov 2023",
    },
    {
      title: "Customer Support Staff",
      location: "Blackbaud Europe",
      description:
        "Since joining Blackbaud Europe in 2022, I quickly progress from an Associate to Staff member, supporting multiple different products including CRMs. Due to this I received the We Expect the Best award in Q2 of 2022.",
      icon: React.createElement(CgWorkAlt),
      date: "April 2022 - Jul 2023",
    },
    {
      title: "Customer Support Associate Specalist",
      location: "Blackbaud",
      description:
        "After joining Blackbaud in 2021, I went from a Customer Support Associate to an Associate Specialist for the North American region supporting the CRM the Raisers Edge/RE NXT. During my time I had many responsibilities, below are my most recent responsibilities.",
      icon: React.createElement(CgWorkAlt),
      date: "April 2021 - April 2022",
    },
  ] as const;