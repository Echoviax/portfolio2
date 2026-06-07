import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SidebarLink({link, icon, alt}: {link: string, icon: IconDefinition, alt: string}) {
    const accessibleLabel = `${alt} (opens in a new tab)`;
    
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="footer-btn" 
            aria-label={accessibleLabel}
        >
            <FontAwesomeIcon 
                icon={icon} 
                className="footer-btn"
                aria-hidden={true}
            />
        </a>
    );
}