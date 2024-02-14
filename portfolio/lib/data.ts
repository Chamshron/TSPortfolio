import React from "react";
import subwaySamurai from "@/public/SubwaySamurai.png";
import navigate from "@/public/Navigate.png";

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