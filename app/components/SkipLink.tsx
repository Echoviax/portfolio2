'use client';

export default function SkipLink() {
    return (
        <a 
          href="#main" 
          className="skip-link"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main')?.focus();
          }}
        >
          Skip to main content
        </a>
    );
}