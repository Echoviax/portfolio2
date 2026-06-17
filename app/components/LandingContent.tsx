'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { useEffects } from "../context/ShaderContext";
import PageControls from "./PageControls";

interface Star {
    id: number; top: string; left: string; size: string; animationDuration: string; animationDelay: string;
}

interface ShatteredPiece {
    id: number; clipPath: string; tx: string; ty: string; rot: string; animationDuration: string; animationDelay: string;
}

export default function LandingContent() {
    const { areEffectsActive } = useEffects();
    const [stars, setStars] = useState<Star[]>([]);
    const [shatteredPieces, setShatteredPieces] = useState<ShatteredPiece[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `-${Math.random() * 5}s`,
        }));
        
        setStars(generatedStars);

        const cuts = [
            "polygon(0 0, 35% 0, 25% 55%, 0 35%)",
            "polygon(35% 0, 100% 0, 100% 45%, 60% 65%, 25% 55%)",
            "polygon(0 35%, 25% 55%, 15% 100%, 0 100%)",
            "polygon(25% 55%, 60% 65%, 45% 100%, 15% 100%)",
            "polygon(60% 65%, 100% 45%, 100% 100%, 45% 100%)"
        ];

        const generatedPieces = cuts.map((clipPath, i) => ({
            id: i,
            clipPath,
            tx: `${(Math.random() - 0.5) * 3}%`,
            ty: `${(Math.random() - 0.5) * 3}%`,
            rot: `${(Math.random() - 0.5) * 5}deg`,
            animationDuration: `${Math.random() * 3 + 4}s`,
            animationDelay: `-${Math.random() * 5}s`, 
        }));
        
        setShatteredPieces(generatedPieces);
    }, []);
    
    return (
        <main className="reset-main">
            <PageControls />
            <div className="landing-container">
                {areEffectsActive 
                ?
                    stars.map((star) => (
                        <div
                            key={star.id}
                            className="star"
                            style={{
                                top: star.top,
                                left: star.left,
                                width: star.size,
                                height: star.size,
                                animationDuration: star.animationDuration,
                                animationDelay: star.animationDelay,
                            }}
                        />
                    )) 
                :
                    null
                }
                
                <div className="content">
                    <h1 className="shatter">
                        <span className="base-text">shardsof.space</span>
                        
                        {shatteredPieces.map((piece) => (
                            <span
                                key={piece.id}
                                className="glass-shard"
                                aria-hidden="true"
                                style={{
                                    clipPath: piece.clipPath,
                                    '--tx': areEffectsActive ? piece.tx : 0,
                                    '--ty': areEffectsActive ? piece.ty : 0,
                                    '--rot': areEffectsActive ? piece.rot : 0,
                                    animationDuration: piece.animationDuration,
                                    animationDelay: piece.animationDelay,
                                } as React.CSSProperties}
                            >
                                shardsof.space
                            </span>
                        ))}
                    </h1>

                    <div className="links-parent">
                        <Link href={"/portfolio"} className="landing-link">Portfolio</Link>
                        <Link href={"/blog"} className="landing-link">Blog</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}