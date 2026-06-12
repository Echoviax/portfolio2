'use client';

export default function SidebarButton({text, link, mobile}: {text: string, link: string, mobile?: boolean}) {
    return (<a
        href={`#${link}`}
        className={mobile ? "nav-button-mobile" : "nav-button"}
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