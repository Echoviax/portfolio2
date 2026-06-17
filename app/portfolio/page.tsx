import { Metadata } from "next";
import AIPage from "../components/AI";
import AboutPage from "../components/About";
import ProjectsPage from "../components/Projects";
import FeaturedPage from "../components/Featured";
import Footer from "../components/Footer";
import BlogComponent from "../components/BlogComponent";
import MobileNav from "../components/MobileNav";
import ShaderBackground from "../components/ShaderBackground";
import Sidebar from "../components/Sidebar";
import { ShaderProvider } from "../context/ShaderContext";

export const metadata: Metadata = {
  title: "Portfolio | Luna Berl",
  description: "A website dedicated to hosting reference to wondrous projects created by Luna Berl",
};

export default function Page() {
  return (
    <ShaderProvider>
      <Sidebar />
      <MobileNav />
      <ShaderBackground />
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
          <ProjectsPage />
        </section>

        {/* <section id="gallery" tabIndex={-1}>
          <h1>Gallery</h1>
        </section> */}

        {/* <section id="ai" tabIndex={-1}>
          <h1>Gen AI</h1>
          <AIPage />
        </section> */}

        <section id="blog" tabIndex={-1}>
          <h1>Blog</h1>
          <BlogComponent />
        </section>

        <Footer />
      </main>
    </ShaderProvider>
  );
}
