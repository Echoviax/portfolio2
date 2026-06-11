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
    description: `<p>When I was obsessed with online baseball simulators like MMOLB, I tried making my own. That was the birth of Bayseball.</p>
    <p>The front-end is made in Next.js, the backend in Python with Flask, with an API to tie the two together.</p>
    <p>I got the simulation working as I wanted, and made it fully modular, so mechanics could be easily enabled and disabled. However, it never got off the ground as didn't promote it enough, and very quickly ran out of time to develop it as the new semester came around.</p>`,
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
    description: `<p>EXP Quest is a class project. It was a group project I worked on with 3 other people, with the goal of designing a gamified app to help people socialise.</p>
    <p>Mechanically, it relies on the user levelling up by completing harder and harder social challenges until they can defeat a 'boss'. Hoping that by the end of it, users would realise the world isn't all that scary.</p>
    <p>I was in charge of the Figma, and as such most of the stuff on there is my development. The Figma can be run to simulate what the app may be like, and from there the project ends. There is no real app.</p>`,
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
    description: `<p>I was approached by a friend during their time doing a web class and asked if I could help prototype the layout to their new project.</p>
    <p>The idea of the project is that you move a few sliders, and it will find a random Steam game under those filters. It would help users find "Hidden Gems" of games. That is, games that not many have heard of, but those who have, rate it highly.</p>`,
    categories: ['webdes'],
    dates: "December 2025",
    imagePath: "gemFinder"
}

const meda: Project = {
    id: 4,
    title: "Meda",
    description: `<p>During my first attempt to switch to Linux, I was overwhelmed by neovim, but not particularly impressed by the linting of nano.</p>
    <p>This encouraged me to write Meda, a Linux CLI text-editor with full linting support. Writing my own text editor would allow me to include all the features I want, in a UI I understand, and without the bloat of all the features I didn't want.</p>`,
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
    description: `<p>Monster World was a class project with 3 other people. We were tasked to make a 'spooky' game for a game jam called "Scream Jam". This was a jam in which we had a week to make a game.</p>
    <p>I was the UI designer for the project, and as such, got to design how the battle interface would look. With heavy inspiration from Pokemon, but my own color palette, this is what I came up with.</p>`,
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
    description: `<p>An N-Body simulation is an astronomical simulation to see how gravitational forces interact between n number of bodies. It is mainly used to simulate universes.</p>
    <p>As someone with a heavy interest in astronomy, and being bored one day, I took it upon myself to learn some HLSL to complement my C#, opened a Unity project, and made an n-body simulator that can comfortably run a few hundred thousand bodies at once.</p>`,
    categories: ['dev'],
    dates: "December 2025",
    imagePath: "nBody"
}

const systemsCritical: Project = {
    id: 7,
    title: "Systems Critical",
    description: `<p>Systems Critical is a beautiful beautiful board game. It was made for a class project along with 4 other people. While I pitched the original idea, over a few months with my group, we were able to iterate on it enough to come up with a full-fledged board game.</p>
    <p>It draws heavy inspiration from Sky Team, Citizen Sleeper, and FTL. I don't think pictures do it justice, and would really like to pick up development again at some point and try to publish the game for real, so be on the lookout for that.</p>`,
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
    description: `<p>Ultrazine was a solo web development class project to turn a magazine page into a web page.</p>
    <p>After spending a while looking for a page I liked, I settled on the one you can see in the source link, from Super Gaming.</p>
    <p>The color scheme of the original page reminded me a lot of the video game ULTRAKILL, and so when it came time to change the content to my own, I decided to change it over to an ULTRAKILL ad.</p>
    <p>I got a lot of compliments on this in class, with people telling me they thought they were just looking at the original magazine, and surprised it was a website.</p>`,
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
    description: `<p>Wanted was a quick solo class project to make a game using boids.</p>
    <p>After looking through the different boid algorithms, it reminded me a lot of the Mario64DSi game "Wanted!" So I grabbed some free assets from game-icons.net and got to work on a spiritual successor to that game.</p>
    <p>It was interesting to try and work out the balancing of this game, as well as how to spawn the wanted character in a way that they weren't hidden behind other characters.`,
    categories: ['gamedes', 'gamedev'],
    dates: "October 2025",
    imagePath: "wanted"
}

const domtris: Project = {
    id: 10,
    title: "DOMtris",
    description: `<p>DOMtris was a solo web development class project with the goal of creating a game in the browser using only the DOM.</p>
    <p>I spent a while thinking about what to do until I remembered the game Tetris, which seemed simple enough mechanically to get done in the timeline.</p>
    <p>I pushed the deadline a bit because designing a game in the DOM is actually much harder than it seemed, and that's why it is missing a controls explanation. But I like how it turned out in the end.</p>`,
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
    description: `<p>Wayfinder is a mod loader and manager for Neverway</p>
    <p>There is this little indie horror farming simulator called "Neverway." When the demo came out, I was quick to start datamining to see if I could figure any of the lore out for the full game. This was when the devs understandably told me that I couldn't share datamined info, but I could share anything that I found through modifying the game.</p>
    <p>I was able to decompile the game and make modifications to the source code to stop it from force ending when the demo was over, but it was still missing code for the rest of the game. This was still useful though as it let you explore more.</p>
    <p>Eventually I had enough people asking how I did it and no good answer that I went in search of mod managers that would work with it. BepInEX and Harmony both didn't work natively due to the AOT compiling for Neverway.</p>
    <p>So I got to learn the inner workings of DLLs and .NET compilation in order to inject my own DLL into the game that allowed for mod making, and that's when Wayfinder was birthed.</p>`,
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
    description: `<p>Looking for Group is a website for RIT students to post their game concepts and assemble a team of students to work on them.</p>
    <p>This was my first ever internship, and I was hired as an accessibility developer. I ended up doing a lot of front-end work on it as well, but my primary focus was accessibility.</p>
    <p>It taught me a lot about web dev, working in large teams, and accessibility in general. It is actually what inspired this page, since my last portfolio wasn't as accessible as I was hoping it would be.</p>`,
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