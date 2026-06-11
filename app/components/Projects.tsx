"use client";

import { useState, useRef } from "react";
import { Project } from "../types/Project";
import ProjectCard from "./ProjectCard";
import ProjectPopup from "./ProjectPopup";

// const allProjects: Project[] = Array.from({ length: 18 }, (_, i) => ({
//     id: i,
//     title: `Project ${i + 1}`,
//     description: "This was a really cool project that I loved getting the opportunity to work on. Lorem ipsum dolor sit amet and such...",
//     links: [
//         {href: "https://GitHub.com", text: "GitHub", newTab: true}, 
//         {href: "https://linked.in", text: "LinkedIn", newTab: false}
//     ],
//     categories: ['webdes', 'gamedes', 'gamedev', 'webdev'],
//     dates: "March 2024 - Current",
//     imagePath: "placeholder"
// }));

const bayseball: Project = {
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

const expQuest: Project = {
    id: 2,
    title: "EXP Quest",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://www.figma.com/design/sfm76FnzomVuznJ5htl7Qa/EXP-Quest?node-id=0-1&m=dev&t=lpVhuOcGHlYnOASd-1", text: "Figma", newTab: true}
    ],
    categories: ['webdes'],
    dates: "November 2025 - December 2025",
    imagePath: "expQuest"
}

const gemFinder: Project = {
    id: 3,
    title: "Gem Finder",
    description: "lorem ipsum dolor sit amet",
    categories: ['webdes'],
    dates: "December 2025",
    imagePath: "gemFinder"
}

const meda: Project = {
    id: 4,
    title: "Meda",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://github.com/echoviax/meda-cli", text: "GitHub", newTab: true}
    ],
    categories: ['dev'],
    dates: "October 2024 - November 2024",
    imagePath: "meda"
}

const monsterWorld: Project = {
    id: 5,
    title: "Monster World",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://www.figma.com/design/cW3aaDTBCmIjfOtoXNxDvc/Untitled?node-id=0-1&m=dev&t=sSRtDkaeSKHsLYO5-1", text: "Figma", newTab: true}
    ],
    categories: ['gamedes'],
    dates: "October 2025",
    imagePath: "monsterWorld"
}

const nBody: Project = {
    id: 6,
    title: "N-Body Simulation",
    description: "lorem ipsum dolor sit amet",
    categories: ['dev'],
    dates: "December 2025",
    imagePath: "nBody"
}

const systemsCritical: Project = {
    id: 7,
    title: "Systems Critical",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://www.figma.com/design/TfJ6o8ZTYnToYlb0NU8Z37/Systems-Critical?node-id=0-1&m=dev&t=rhIjFSfCh6gjvOL5-1", text: "Figma", newTab: true}
    ],
    categories: ['gamedes'],
    dates: "March 2026 - May 2026",
    imagePath: "systemsCritical"
}

const ultrazine: Project = {
    id: 8,
    title: "Ultrazine",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://people.rit.edu/mrb7646/235/project1/", text: "Live", newTab: true},
        {href: "https://people.rit.edu/mrb7646/235/project1/src/Source.pdf", text: "Source", newTab: true},
    ],
    categories: ['webdes'],
    dates: "March 2026",
    imagePath: "ultrazine"
}

const wanted: Project = {
    id: 9,
    title: "Wanted",
    description: "lorem ipsum dolor sit amet",
    categories: ['gamedes', 'gamedev'],
    dates: "October 2025",
    imagePath: "wanted"
}

const domtris: Project = {
    id: 10,
    title: "DOMtris",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://people.rit.edu/mrb7646/235/project3/", text: "Live", newTab: true},
    ],
    categories: ['gamedev', 'webdev'],
    dates: "April 2026",
    imagePath: "domtris"
}

const wayfinder: Project = {
    id: 11,
    title: "Wayfinder",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "https://github.com/Echoviax/wayfinder", text: "GitHub", newTab: true},
    ],
    categories: ['gamedev', 'dev'],
    dates: "April 2026 - Current",
    imagePath: "wayfinder"
}

const lfg: Project = {
    id: 12,
    title: "Looking for Group",
    description: "lorem ipsum dolor sit amet",
    links: [
        {href: "example.com", text: "Live", newTab: true},
        {href: "https://github.com/LookingforGrp-rit/LookingForGroup", text: "GitHub", newTab: true},
    ],
    categories: ['webdes', 'webdev'],
    dates: "May 2026 - August 2026",
    imagePath: "lfg"
}

const allProjects: Project[] = [systemsCritical, lfg, bayseball, wayfinder, ultrazine, wanted, meda, domtris, monsterWorld, nBody, gemFinder, expQuest] 

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
                <p>Click on any project to view more details</p>
                <div className="project-control-buttons">
                    <button onClick={() => scroll("left")} aria-label="Scroll left">←</button>
                    <button onClick={() => scroll("right")} aria-label="Scroll right">→</button>
                </div>
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
                <ProjectPopup project={selectedProject} closeFunction={() => setSelectedProject(null)} />
            )}
        </div>
    );
}