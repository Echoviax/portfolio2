'use client';

import { useState } from "react";
import SidebarButton from "./SidebarButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav aria-hidden="true" className="mobile-nav-container">
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobileNav">
                <div></div>
                <div></div>
                <div></div>
            </button>
            
            {/* Links */}
            <div className={`mobile-links ${menuOpen ? "open" : ""}`}>
                <SidebarLink 
                    link="https://github.com/Echoviax" 
                    icon={faGithub}
                    alt="Github" 
                    mobile
                />
                <SidebarLink 
                    link="mailto:lunariannova@gmail.com" 
                    icon={faEnvelope}
                    alt="Email" 
                    mobile
                />
                <SidebarLink 
                    link="https://linked.in/in/luna-berl" 
                    icon={faLinkedin} 
                    alt="LinkedIn"
                    mobile
                />
            </div>

            {/* Navigation */}
            <div className={`mobile-page-nav ${menuOpen ? "open" : ""}`}>
                <SidebarButton link={"about"} text="About" mobile />
                <SidebarButton link={"featured"} text="Featured" mobile />
                <SidebarButton link={"projects"} text="Projects" mobile />
                {/* <SidebarButton link={"gallery"} text="Gallery" mobile /> */}
                <SidebarButton link={"ai"} text="Non-AI Policy" mobile />
            </div>
        </nav>
    );
}