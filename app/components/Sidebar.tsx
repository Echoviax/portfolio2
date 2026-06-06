export default function Sidebar() {
    return (
        <nav className="nav-sidebar">
            <section className="theme-btn-parent">
                Theme button here
            </section>
            <section className="nav-buttons">
                <a className="nav-button">About</a>
                <a className="nav-button">Featured</a>
                <a className="nav-button">Projects</a>
                <a className="nav-button">Gallery</a>
                <a className="nav-button">Non-AI Disclosure</a>
            </section>
            <section className="sidebar-footer">
                Contact goes here
            </section>
        </nav>
    );
}