import { useState, useEffect } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  function handleTabClick(tab) {
    setActiveTab(tab);

    const section = document.getElementById(tab);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observerOptions = {
      root: null,
      rootMargin: "-200px",
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9, 1],
    };

    let activeSection = "";

    const observer = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let newActiveTab = activeTab;

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          newActiveTab = entry.target.id;
        }
      });

      if (newActiveTab !== activeSection) {
        activeSection = newActiveTab;
        setActiveTab(newActiveTab);
      }
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [activeTab]);

  return (
    <div className="bg-black min-h-screen px-[10%] relative cursor-default">
      <Header onClick={handleTabClick} activeTab={activeTab} />
      <main>
        <About onClick={handleTabClick}/>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
