import { Metadata } from "next";
import AIPage from "./components/AI";
import AboutPage from "./components/About";

export const metadata: Metadata = {
  title: "Home | Shards of Space",
  description: "The home page...",
};

export default function Page() {
  return (
    <main id="main">
      <section id="about" tabIndex={-1}>
        <h1>About</h1>
        <AboutPage />
      </section>

      <section id="featured" tabIndex={-1}>
        <h1>Featured</h1>
      </section>

      <section id="projects" tabIndex={-1}>
        <h1>Projects</h1>
      </section>

      <section id="gallery" tabIndex={-1}>
        <h1>Gallery</h1>
      </section>

      <section id="ai" tabIndex={-1}>
        <h1>Non-AI Policy</h1>
        <AIPage />
      </section>
    </main>
  );
}
