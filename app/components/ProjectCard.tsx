import { Project } from "../types/Project";

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
            <h3 id={titleId}>{project.title}</h3>
            <p>Click to expand</p>
        </div>
    );
};