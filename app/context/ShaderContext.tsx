"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ShaderContextType {
    areEffectsActive: boolean;
    toggleEffects: () => void;
}

const ShaderContext = createContext<ShaderContextType | undefined>(undefined);

export function EffectProvider({ children }: { children: React.ReactNode }) {
    const [areEffectsActive, setAreEffectsActive] = useState(true);

    // Load preference
    useEffect(() => {
        const storedPreference = localStorage.getItem("shaderActive");
        if (storedPreference !== null)
            setAreEffectsActive(storedPreference === "true");
    }, []);

    // Toggle the shader
    const toggleEffects = () => {
        setAreEffectsActive((prev) => {
            const newValue = !prev;
            localStorage.setItem("shaderActive", String(newValue));
            return newValue;
        });
    };

    // Actual object
    return (
        <ShaderContext.Provider value={{ areEffectsActive, toggleEffects }}>
            {children}
        </ShaderContext.Provider>
    );
}

export function useEffects() {
    const context = useContext(ShaderContext);
    if (context === undefined)
        throw new Error("useShader must be used within a ShaderProvider");
    return context;
}