'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";
import ProjectPopup from "./ProjectPopup";

const emmolb: Project = {
    id: 1,
    title: "EMMOLB",
    description: "Lorem ipsum dolor sit amet",
    links: [
        {href: "https://github.com/echoviax/emmolb", text: "GitHub", newTab: true},
        {href: "https://emmolb.com", text: "Live", newTab: true}
    ],
    categories: ['webdes', 'webdev'],
    dates: "June 2025 - Current",
    imagePath: "emmolb"
}

export default function FeaturedPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    return (
        <>
            <ProjectCard project={emmolb} onClick={() => setSelectedProject(emmolb)} big={true} />
            {selectedProject && (
                <ProjectPopup project={selectedProject} closeFunction={() => setSelectedProject(null)} />
            )}
        </>
    );
}