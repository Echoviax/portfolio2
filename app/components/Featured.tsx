'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";
import ProjectPopup from "./ProjectPopup";

const emmolb: Project = {
    id: 1,
    title: "Bayseball",
    description: "Lorem ipsum dolor sit amet",
    links: [
        {href: "https://github.com/echoviax/bayseball-ui", text: "Github", newTab: true}
    ],
    categories: ['webdes', 'webdev', 'gamedes', 'gamedev'],
    dates: "June 2025 - August 2025",
    imagePath: "bayseball"
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