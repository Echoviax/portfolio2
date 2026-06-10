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
      <section id="about">
        <h1>About</h1>
        <AboutPage />
      </section>

      <section id="featured">
        <h1>Featured</h1>
      </section>

      <section id="projects">
        <h1>Projects</h1>
      </section>

      <section id="gallery">
        <h1>Gallery</h1>
      </section>

      <section id="ai">
        <h1>Non-AI Policy</h1>
        <AIPage />
      </section>
    </main>
  );
}
