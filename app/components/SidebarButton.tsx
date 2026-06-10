'use client';

export default function SidebarButton({text, link}: {text: string, link: string}) {
    return (<a
        href={`#${link}`}
        className="nav-button"
        onClick={(e) => {
            e.preventDefault();
            
            const target = document.getElementById(link);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                target.focus({ preventScroll: true }); 
            }
        }}
    >
        {text}
    </a>)
}