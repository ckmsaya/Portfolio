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

    let frame = 0;

    const updateActiveSection = () => {
      const viewportAnchor = window.innerHeight * 0.42;
      const closest = sections.reduce(
        (best, section) => {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - viewportAnchor);
          const isOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;

          if (isOnScreen && distance < best.distance) {
            return { id: section.id as SectionId, distance };
          }

          return best;
        },
        { id: "hero" as SectionId, distance: Number.POSITIVE_INFINITY },
      );

      setActiveSection(closest.id);
    };

    const queueUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveSection);
    };

    queueUpdate();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-brand-secondary selection:text-brand-primary overflow-x-hidden">
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
