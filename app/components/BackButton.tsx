// https://stackoverflow.com/questions/76293275/how-to-add-back-button-in-server-component-of-next-js-13-4-2
'use client';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className='back-button'>
      <FontAwesomeIcon icon={faArrowLeft} height={16} width={16} />
      Back
    </button>
  );
}