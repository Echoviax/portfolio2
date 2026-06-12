'use client';

import { useEffect, useRef, useState } from "react";
import SidebarButton from "./SidebarButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import SidebarLink from "./SidebarLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useShader } from "../context/ShaderContext";

export default function MobileNav() {
    const { isShaderActive, toggleShader } = useShader();
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node))
                setMenuOpen(false);
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <nav ref={navRef} aria-hidden="true" className="mobile-nav-container">
            <button onClick={() => setMenuOpen(!menuOpen)} className="mobileNav">
                <div></div>
                <div></div>
                <div></div>
            </button>
            
            <div className={`mobile-theme-parent ${menuOpen ? "open" : ""}`}>
                {mounted ?
                    <button className="theme-btn-mobile" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-5 h-5" />
                        {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </button>    :
                    <button className="theme-btn-mobile invisible">
                        <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
                        Toggle Theme
                    </button> 
                }
                <button className="theme-btn-mobile" onClick={toggleShader}>
                    {isShaderActive ? "Disable Effects" : "Enable Effects"}
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
                <SidebarButton link={"ai"} text="GenAI Policy" mobile />
            </div>
        </nav>
    );
}