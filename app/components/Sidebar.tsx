'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarButton from "./SidebarButton";
import { faEnvelope, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SidebarLink from "./SidebarLink";
import SkipLink from "./SkipLink";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useShader } from "../context/ShaderContext";

export default function Sidebar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { isShaderActive, toggleShader } = useShader();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="nav-sidebar">
            <SkipLink />
            <section className="theme-btn-parent">
                {!mounted ? (
                    <button className="theme-btn invisible">
                        <FontAwesomeIcon icon={faSun} className="w-5 h-5" />
                        Toggle Theme
                    </button>
                ) : (
                    <button className="theme-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                        <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-5 h-5" />
                        Toggle Theme
                    </button>
                )}
                <button className="theme-btn" onClick={toggleShader}>
                    {isShaderActive ? "Disable Effects" : "Enable Effects"}
                </button>
            </section>
            <section className="nav-buttons">
                <SidebarButton link={"about"} text="About" />
                <SidebarButton link={"featured"} text="Featured" />
                <SidebarButton link={"projects"} text="Projects" />
                {/* <SidebarButton link={"gallery"} text="Gallery" /> */}
                <SidebarButton link={"ai"} text="GenAI Policy" />
            </section>
            <section className="nav-footer">
                <SidebarLink 
                    link="https://github.com/Echoviax" 
                    icon={faGithub}
                    alt="Github" 
                />
                <SidebarLink 
                    link="mailto:lunariannova@gmail.com" 
                    icon={faEnvelope}
                    alt="Email" 
                />
                <SidebarLink 
                    link="https://linked.in/in/luna-berl" 
                    icon={faLinkedin} 
                    alt="LinkedIn"
                />
            </section>
        </nav>
    );
}