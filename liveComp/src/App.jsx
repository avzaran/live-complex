import { useEffect, useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Panorama from './components/Panorama';
import Clasters from './components/Clasters';
import Advantages from './components/Advantages';
import Apartments from './components/Apartments';
import Contact from './components/Contact';
import Presentation from './components/Presentation';


function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const sectionRefs = {
    hero: useRef(null),
    panorama: useRef(null),
    presentation: useRef(null),
    clasters: useRef(null),
    advantages: useRef(null),
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
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.6, // сколько % должно быть видно
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <div id="hero" ref={sectionRefs.hero}><Hero /></div>
      <div id="panorama" ref={sectionRefs.panorama}><Panorama /></div>
      <div id="presentation" ref={sectionRefs.presentation}><Presentation /></div>
      <div id="clasters" ref={sectionRefs.clasters}><Clasters /></div>
      <div id="advantages" ref={sectionRefs.advantages}><Advantages /></div>
      <div id="apartments" ref={sectionRefs.apartments}><Apartments /></div>
      <div id="contact" ref={sectionRefs.contact}><Contact /></div>

      <NavBar activeSection={activeSection} />
    </>
  );
}

export default App;
