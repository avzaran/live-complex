import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Panorama from "./components/Panorama";
import Clasters from "./components/Clasters";
import Advantages from "./components/Advantages";
import Apartments from "./components/Apartments";
import Contact from "./components/Contact";
import Presentation from "./components/Presentation";
import RareFormats from "./components/RareFormats";
import QuizRoutes from "./components/Quiz/QuizRoutes";
import QuizIntro from "./components/Quiz/QuizIntro";

function LandingPage({ activeSection, sectionRefs }) {
  return (
    <>
      <Header />
      <div id="hero" ref={sectionRefs.hero}>
        <Hero />
      </div>
      <div id="panorama" ref={sectionRefs.panorama}>
        <Panorama />
      </div>
      <div id="presentation" ref={sectionRefs.presentation}>
        <Presentation />
      </div>
      <div id="clasters" ref={sectionRefs.clasters}>
        <Clasters />
      </div>
      <div id="advantages" ref={sectionRefs.advantages}>
        <Advantages />
      </div>
      <div id="rareFormats" ref={sectionRefs.rareFormats}>
        <RareFormats />
      </div>
      <div id="quiz" ref={sectionRefs.quizRef}>
        <QuizIntro />
      </div>
      <div id="apartments" ref={sectionRefs.apartments}>
        <Apartments />
      </div>
      <div id="contact" ref={sectionRefs.contact}>
        <Contact />
      </div>
      <NavBar activeSection={activeSection} />
    </>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sectionRefs = {
    hero: useRef(null),
    panorama: useRef(null),
    presentation: useRef(null),
    clasters: useRef(null),
    advantages: useRef(null),
    rareFormats: useRef(null),
    apartments: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          const id = visibleSection.target.id;
          setActiveSection(id);
        }
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            activeSection={activeSection}
            sectionRefs={sectionRefs}
          />
        }
      />
      <Route path="/quiz/*" element={<QuizRoutes />} />
    </Routes>
  );
}

export default App;
