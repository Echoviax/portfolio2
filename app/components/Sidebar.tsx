import SidebarButton from "./SidebarButton";

export default function Sidebar() {
    return (
        <nav className="nav-sidebar">
            <section className="theme-btn-parent">
                <button className="theme-button">Toggle Theme</button>
            </section>
            <section className="nav-buttons">
                <SidebarButton link={"about"} text="About" />
                <SidebarButton link={"featured"} text="Featured" />
                <SidebarButton link={"projects"} text="Projects" />
                <SidebarButton link={"gallery"} text="Gallery" />
                <SidebarButton link={"ai"} text="Non-AI Policy" />
            </section>
            <section className="sidebar-footer">
                Contact goes here
            </section>
        </nav>
    );
}