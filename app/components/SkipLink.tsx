'use client';

export default function SkipLink() {
    return (
        <a 
          href="#main" 
          className="skip-link"
          tabIndex={1}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main')?.focus();
          }}
        >
          Skip to main content
        </a>
    );
}