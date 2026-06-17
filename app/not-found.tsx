import Link from 'next/link';
import './styles/not-found.css'
import './styles/Theme.css'
import BackButton from './components/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundPage() {
    return (
        <main>
            <div className='not-found-container'>
                <BackButton />
                <h1>404 - Not found</h1>
                <p>Were you perhaps looking for...</p>
                <div className='not-found-links'>
                    <Link href={"/"} className='not-found-link' >Home</Link>
                    <Link href={"/blog"} className='not-found-link' >Blog</Link>
                </div>
            </div>
        </main>
    );
}