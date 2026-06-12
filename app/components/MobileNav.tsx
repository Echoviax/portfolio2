'use client';

import { useEffect, useState } from "react";
import SidebarButton from "./SidebarButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MobileNav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        
        if (savedTheme === "light")
            document.documentElement.setAttribute("data-theme", "light");
        else
            document.documentElement.removeAttribute("data-theme");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        
        if (newTheme === "light")
            document.documentElement.setAttribute("data-theme", "light");
        else
            document.documentElement.removeAttribute("data-theme");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <nav aria-hidden="true" className="mobile-nav-container">
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobileNav">
                <div></div>
                <div></div>
                <div></div>
            </button>
            
            <div className={`mobile-theme-parent ${menuOpen ? "open" : ""}`}>
                <button className="theme-btn-mobile" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-5 h-5" />
                    Toggle Theme
                </button>
            </div>

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