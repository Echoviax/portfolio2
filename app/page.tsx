import { Metadata } from "next";
import AIPage from "./components/AI";
import AboutPage from "./components/About";
import ProjectsPage from "./components/Projects";

export const metadata: Metadata = {
  title: "Home | Shards of Space",
  description: "The home page...",
};

export default function Page() {
  return (
    <main id="main">
      <section id="about" tabIndex={-1}>
        <h1>About Me</h1>
        <AboutPage />
      </section>

      <section id="featured" tabIndex={-1}>
        <h1>Featured</h1>
      </section>

      <section id="projects" tabIndex={-1}>
        <h1>Projects</h1>
        {/* Masonry will go here... I'm thinking it should be awfully wide and 2-3 projects tall */}
        {/* Like scroll off the screen and loop like one of those image presenters on websites */}
        {/* Each project can be clicked to open a popup with more info on it... */}
        <ProjectsPage />
      </section>

      {/* <section id="gallery" tabIndex={-1}>
        <h1>Gallery</h1>
      </section> */}

      <section id="ai" tabIndex={-1}>
        <h1>Non-AI Policy</h1>
        <AIPage />
      </section>
    </main>
  );
}
