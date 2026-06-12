"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ShaderContextType {
    isShaderActive: boolean;
    toggleShader: () => void;
}

const ShaderContext = createContext<ShaderContextType | undefined>(undefined);

export function ShaderProvider({ children }: { children: React.ReactNode }) {
    const [isShaderActive, setIsShaderActive] = useState(true);

    // Load preference
    useEffect(() => {
        const storedPreference = localStorage.getItem("shaderActive");
        if (storedPreference !== null)
            setIsShaderActive(storedPreference === "true");
    }, []);

    // Toggle the shader
    const toggleShader = () => {
        setIsShaderActive((prev) => {
            const newValue = !prev;
            localStorage.setItem("shaderActive", String(newValue));
            return newValue;
        });
    };

    // Actual object
    return (
        <ShaderContext.Provider value={{ isShaderActive, toggleShader }}>
            {children}
        </ShaderContext.Provider>
    );
}

export function useShader() {
    const context = useContext(ShaderContext);
    if (context === undefined)
        throw new Error("useShader must be used within a ShaderProvider");
    return context;
}