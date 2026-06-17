import { useMemo } from "react";
import './styles/Landing.css';
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shards of Space",
    description: "Expressing myself through web design",
};

export default function Landing() {
    const stars = useMemo(() => {
        return Array.from({ length: 100 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 3 + 1}px`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `-${Math.random() * 5}s`,
        }));
    }, []);

    const shatteredPieces = useMemo(() => {
        const cuts = [
            "polygon(0 0, 35% 0, 25% 55%, 0 35%)",
            "polygon(35% 0, 100% 0, 100% 45%, 60% 65%, 25% 55%)",
            "polygon(0 35%, 25% 55%, 15% 100%, 0 100%)",
            "polygon(25% 55%, 60% 65%, 45% 100%, 15% 100%)",
            "polygon(60% 65%, 100% 45%, 100% 100%, 45% 100%)"
        ];

        return cuts.map((clipPath, i) => ({
            id: i,
            clipPath,
            tx: `${(Math.random() - 0.5) * 3}%`,
            ty: `${(Math.random() - 0.5) * 3}%`,
            rot: `${(Math.random() - 0.5) * 5}deg`,
            animationDuration: `${Math.random() * 3 + 4}s`,
            animationDelay: `-${Math.random() * 5}s`, 
        }));
    }, []);
    
    return (
        <main className="reset-main">
            <div className="landing-container">
                {stars.map((star) => (
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
                ))}
                
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
                                    '--tx': piece.tx,
                                    '--ty': piece.ty,
                                    '--rot': piece.rot,
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