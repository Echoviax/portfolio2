'use client';

import { useEffect, useState } from "react";
import PageControls from "./PageControls";
import BackButton from "./BackButton";
import Link from "next/link";
import { useEffects } from "../context/ShaderContext";

interface Star {
    id: number; top: string; left: string; size: string; animationDuration: string; animationDelay: string;
}

export default function NotFoundContent() {
    const { areEffectsActive } = useEffects();
    const [stars, setStars] = useState<Star[]>([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 99}%`,
            left: `${Math.random() * 99}%`,
            size: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `-${Math.random() * 5}s`,
        }));
        
        setStars(generatedStars);
    }, []);
        
    return (
        <main>
            <PageControls />
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
            <div className='not-found-container'>
                <BackButton />
                <h1>404 - Not found</h1>
                <p>Were you perhaps looking for...</p>
                <div className='not-found-links'>
                    <Link href={"/"} className='not-found-link' >Home</Link>
                    <Link href={"/portfolio"} className='not-found-link' >Portfolio</Link>
                    <Link href={"/blog"} className='not-found-link' >Blog</Link>
                </div>
            </div>
        </main>
    );
}