import { Project } from "../types/Project";

export default function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
    return (
        <div
            role="button"
            tabIndex={0}
            aria-label={`View details for ${project.title}`}
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
            <h3>{project.title}</h3>
            <p>Click to expand</p>
        </div>
    );
};