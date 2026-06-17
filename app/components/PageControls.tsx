'use client';

import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useEffects } from "../context/ShaderContext";
import '../styles/PageControls.css'

export default function PageControls() {
    const { theme, setTheme } = useTheme();
    const { areEffectsActive, toggleEffects } = useEffects();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    
    return (
        <div className="page-controls">
            {!mounted ? (
                <button className="invisible">
                    Toggle Theme
                </button>
            ) : (
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-5 h-5" />
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
            )}
            <button onClick={toggleEffects}>
                {areEffectsActive ? "Disable Effects" : "Enable Effects"}
            </button>
        </div>
    )
}