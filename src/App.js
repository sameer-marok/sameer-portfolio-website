import { useState, useEffect, useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { db } from './firebase'; // Your Firestore instance
import { doc, getDoc } from 'firebase/firestore';

import Education from './components/Education';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  // --- All Hooks are now at the top level ---
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Preserve Scroll Position on Reload ---

useEffect(() => {
  // Save scroll position before page unload
  const handleBeforeUnload = () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  };
  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);

// Restore scroll position AFTER data is loaded & rendered
useEffect(() => {
  if (!loading && portfolioData) {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      setTimeout(() => {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }, 0); // Wait until DOM has rendered
    }
  }
}, [loading, portfolioData]);

  // This memoized function loads the particle engine once
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles background loaded.");
  }, []);

  // --- Data Fetching Effect ---
  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "portfolio", "doc1"); 
      
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          // ✅ Logging the fetched data to the console
          console.log("Portfolio data from Firestore:", docSnap.data());
          setPortfolioData(docSnap.data());
        } else {
          console.error("Error: Document 'doc1' not found in 'portfolio' collection!");
        }
      } catch (error) {
        console.error("Error fetching document from Firestore:", error);
      } finally { 
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty array ensures this runs only once on mount

  // --- Conditional Loading/Error Screens ---
  if (loading) {
    return <div className="loading-screen">Loading Portfolio...</div>;
  }
  
  if (!portfolioData) {
    return <div className="loading-screen">Error: Could not load data. Check Firestore connection.</div>;
  }

  // --- Particle Configuration ---
  const particleOptions = {
    background: {
      color: { value: '#111827' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#374151' },
      links: {
        color: '#374151',
        distance: 150,
        enable: true,
        opacity: 1.7,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  // --- Main Render ---
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        className="particles-canvas"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <div className="content-wrapper">
        <Hero data={portfolioData} />
        <main>
          <About data={portfolioData.aboutMe} /> 
          <Education data={portfolioData.education} /> {/* <-- Add the new section */}
          <Experience data={portfolioData.experience} />
          <Projects data={portfolioData.projects} />
          <Skills data={portfolioData.skills} />
          <Contact data={portfolioData.contact} />
        </main>
      </div>
    </div>
  );
}

export default App;