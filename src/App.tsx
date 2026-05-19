/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const sectionIds = ["hero", "projects", "about", "services", "skills", "contact", "footer"] as const;

type SectionId = (typeof sectionIds)[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>("hero");

  useEffect(() => {
    document.body.dataset.theme = activeSection;
  }, [activeSection]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) {
          return;
        }

        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveSection((visibleEntries[0].target.id as SectionId) || "hero");
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.2,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-brand-primary overflow-hidden">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

