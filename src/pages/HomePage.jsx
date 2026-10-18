import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import Experience from "../sections/Experience";
import Services from "../sections/Services";
import WhyWorkWithMe from "../sections/WhyWorkWithMe";
import Contact from "../sections/Contact";
import { useDocumentMeta } from "../lib/useDocumentMeta";

export default function HomePage() {
  useDocumentMeta(
    "Umer Hussain | Web Developer – WordPress & Shopify Specialist",
    "Portfolio of Umer Hussain, a Web Developer building fast, responsive websites with WordPress, Shopify, and modern front-end technologies."
  );

  // Scroll to the section named in the URL hash, such as /#projects.
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    if (element) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      element.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Services />
      <WhyWorkWithMe />
      <Contact />
    </>
  );
}
