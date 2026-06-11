import { Project } from "../types/Project";

export default function ProjectPopup({project, closeFunction}: {project: Project, closeFunction: () => void}) {
    return (
        <div aria-modal="true" className="project-popup" onClick={closeFunction}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button autoFocus onClick={closeFunction}>
                    Close
                </button>
            </div>
        </div>
    );
}