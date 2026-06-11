import { Project } from "../types/Project";
import { MiniCategoryTag, ProjectCategory } from "./ProjectCategory";

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
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
            className="project-card"
        >
            <div className="card-header">
                <h3 id={titleId}>{project.title}</h3>
                <div className="project-card-tags">
                    {project.categories && project.categories.map((c: ProjectCategory, i) => (
                        <MiniCategoryTag category={c} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};