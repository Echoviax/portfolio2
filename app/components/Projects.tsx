"use client";

import { useState, useRef } from "react";
import { Project } from "../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

const allProjects: Project[] = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    title: `Project ${i + 1}`,
    description: "This was a really cool project that I loved getting the opportunity to work on. Lorem ipsum dolor sit amet and such...",
    links: [
        {href: "https://GitHub.com", text: "GitHub", newTab: true}, 
        {href: "https://linked.in", text: "LinkedIn", newTab: false}
    ],
    categories: ['webdes', 'gamedes', 'gamedev', 'webdev'],
    dates: "March 2024 - Current"
}));


// 0 is evenly divisible by 3
let row1: Project[] = [];
let row2: Project[] = [];
let row3: Project[] = [];

for (let i = 0; i < allProjects.length; i++) {
    if (i % 3 == 0)
        row1.push(allProjects[i]);
    else if ((i - 1) % 3 == 0)
        row2.push(allProjects[i]);
    else
        row3.push(allProjects[i]);
}

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="project-scroller">
            <div className="project-controls">
                <button onClick={() => scroll("left")} aria-label="Scroll left">←</button>
                <button onClick={() => scroll("right")} aria-label="Scroll right">→</button>
            </div>

            <div ref={scrollContainerRef} className="hide-scroll project-content">
                <div className="project-grid">
                    <div className="project-column">
                        <div className="project-row" style={{animationDelay: "0.1s"}}>
                            {row1.map((project) => (
                                <ProjectCard key={`r1-${project.id}`} project={project} onClick={() => setSelectedProject(project)} />
                            ))}
                        </div>
                        <div className="project-row" style={{paddingLeft: "160px", animationDelay: "0.2s"}}>
                            {row2.map((project) => (
                                <ProjectCard key={`r2-${project.id}`} project={project} onClick={() => setSelectedProject(project)} />
                            ))}
                        </div>
                        <div className="project-row" style={{animationDelay: "0.3s"}}>
                            {row3.map((project) => (
                                <ProjectCard key={`r3-${project.id}`} project={project} onClick={() => setSelectedProject(project)} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <ProjectPopup project={selectedProject} categories={selectedProject.categories} links={selectedProject.links} closeFunction={() => setSelectedProject(null)} />
            )}
        </div>
    );
}