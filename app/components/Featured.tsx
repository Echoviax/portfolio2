'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/Project";
import ProjectPopup from "./ProjectPopup";

const emmolb: Project = {
    id: 1,
    title: "EMMOLB",
    description: `<p>EMMOLB is my token child. It is a third-party viewer for an online simulator called MMOLB.</p>
    <p>MMOLB is a chaotic online baseball simulator, inspired by an earlier "cosmic horror" baseball simulator known as Blaseball.</p>
    <p>I am not a real baseball fan. I'd be hard pressed to name a baseball team not located in my home state. But man are these simulators addicting.</p>
    <p>During my time 'playing' MMOLB, I realised there were a lot of features missing from the front-end of it that just wouldn't get added due to it being developed by one person. So I decided to take it upon myself and create a third-party front-end for MMOLB using their public API, and add a bunch of features requested by other fans of MMOLB. The project has grown massively since then. It peaked at over 100 concurrent users, and now has 5 different contributors on GitHub.</p>
    <p>It is in no way the best website I have ever made, but it has the most heart, features, time dedicated, and code.</p>`,
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
            <div id="featured-card">
                <ProjectCard project={emmolb} onClick={() => setSelectedProject(emmolb)} big={true} />
            </div>
            {selectedProject && (
                <ProjectPopup project={selectedProject} closeFunction={() => setSelectedProject(null)} />
            )}
        </>
    );
}