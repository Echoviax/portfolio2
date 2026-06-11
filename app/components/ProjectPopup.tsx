import { Project } from "../types/Project";
import { Link } from "../types/Link";
import LinkComponent from "./LinkComponent";
import { useEffect } from "react";
import CategoryTag, { ProjectCategory } from "./ProjectCategory";

export default function ProjectPopup({project, closeFunction}: {
    project: Project, 
    closeFunction: () => void
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const close = (e: KeyboardEvent) => {
            if (e.key === 'Escape')
                closeFunction();
        }

        window.addEventListener('keydown', close)
        
        return () => {
            window.removeEventListener('keydown', close);
            document.body.style.overflow = ''; 
        }
    }, [closeFunction])
    
    return (
        <div aria-modal="true" className="project-popup" onClick={closeFunction}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                {/* Title */}
                <div className="popup-title">
                    <h2>{project.title}</h2>
                    <button autoFocus onClick={closeFunction}>
                        X
                    </button>
                </div>
                
                {/* Image */}
                <div className="popup-image">
                    {project.imagePath ? <img src={`/images/projects/${project.imagePath}/image1.png`} alt="banner" /> : null}
                </div>
                
                {/* Links */}
                <div className="popup-links">
                    {project.links && project.links.map((l: Link) => (
                        <LinkComponent link={l} key={l.href} />
                    ))}
                </div>
                
                {/* Tags */}
                <div className="popup-tags">
                    {project.categories && project.categories.map((c: ProjectCategory, i) => (
                        <CategoryTag category={c} key={i} />
                    ))}
                </div>

                {/* Description */}
                <div dangerouslySetInnerHTML={{__html: project.description}} className="popup-description" />

                {/* Dates */}
                <div className="project-dates">
                    <p>{project.dates}</p>
                </div>
            </div>
        </div>
    );
}