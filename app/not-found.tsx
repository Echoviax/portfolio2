import './styles/not-found.css'
import './styles/Landing.css';
import { Metadata } from 'next';
import NotFoundContent from './components/NotFoundContent';

export const metadata: Metadata = {
    title: "404 | Shards of Space",
    description: "Page not found",
};

export default function NotFoundPage() {
    return (
        <NotFoundContent />
    );
}