import React from "react";
import { Project } from "../types/Project";
import CategoryTag, { MiniCategoryTag, ProjectCategory } from "./ProjectCategory";
import Image from "next/image";

export default function ProjectCard({ project, onClick, big }: { project: Project; onClick: () => void; big?: boolean; }) {
    const titleId = `project-title-${project.id}`

    return (
        <div
            role="button"
            tabIndex={0}
            aria-labelledby={titleId}
            onClick={onClick}
            // Keyboard accessibility
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={big ? "project-card-big" : "project-card"}
        >
            {project.imagePath ? <Image width={1000} height={800} src={`/images/projects/${project.imagePath}/image1.png`} draggable={false} alt="banner" /> : null}
            <div className="card-header">
                <h3 id={titleId}>{project.title}</h3>
                <div className="project-card-tags">
                    {project.categories && project.categories.map((c: ProjectCategory, i) => {
                        const largeTags = big ?? false;

                        return (<React.Fragment key={i}>
                            {largeTags ? <CategoryTag category={c} /> : <MiniCategoryTag category={c} /> }
                        </React.Fragment>);
                    })}
                </div>
            </div>
        </div>
    );
};