'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarButton from "./SidebarButton";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Sidebar() {
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
        <nav className="nav-sidebar">
            <section className="theme-btn-parent">
                <button className="theme-btn" onClick={toggleTheme}>
                    <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} className="w-5 h-5" />
                    Toggle Theme
                </button>
            </section>
            <section className="nav-buttons">
                <SidebarButton link={"about"} text="About" />
                <SidebarButton link={"featured"} text="Featured" />
                <SidebarButton link={"projects"} text="Projects" />
                <SidebarButton link={"gallery"} text="Gallery" />
                <SidebarButton link={"ai"} text="Non-AI Policy" />
            </section>
            <section className="nav-footer">
                <p>github.com/Echoviax</p>
                <p>lunariannova@gmail.com</p>
                <p>linked.in/in/luna-berl</p>
            </section>
        </nav>
    );
}