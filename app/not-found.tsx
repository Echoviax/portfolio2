import Link from 'next/link';
import './styles/not-found.css'
import './styles/Landing.css';
import BackButton from './components/BackButton';
import { useMemo } from 'react';
import PageControls from './components/PageControls';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "404 | Shards of Space",
    description: "Page not found",
};

export default function NotFoundPage() {
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
        
    return (
        <main>
            <PageControls />
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