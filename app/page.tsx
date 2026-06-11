import { Metadata } from "next";
import AIPage from "./components/AI";
import AboutPage from "./components/About";
import ProjectsPage from "./components/Projects";
import FeaturedPage from "./components/Featured";

export const metadata: Metadata = {
  title: "Portfolio | Shards of Space",
  description: "Luna Berl's portfolio",
};

export default function Page() {
  return (
    <main id="main" tabIndex={-1}>
      <section id="about" tabIndex={-1}>
        <h1>About Me</h1>
        <AboutPage />
      </section>

      <section id="featured" tabIndex={-1}>
        <h1>Featured</h1>
        <FeaturedPage />
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
