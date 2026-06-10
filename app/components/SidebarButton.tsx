'use client';

export default function SidebarButton({text, link}: {text: string, link: string}) {
    return (<a
        href={`#${link}`}
        className="nav-button"
        onClick={(e) => {
            e.preventDefault();
            document.getElementById(`${link}`)?.focus();
        }}
    >
        {text}
    </a>)
}