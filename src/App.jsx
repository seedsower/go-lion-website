import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Album from './components/Album';
import MusicPlayer from './components/MusicPlayer';
import VideoSection from './components/VideoSection';
import TourDates from './components/TourDates';
import MerchPreview from './components/MerchPreview';
import LyricsMessage from './components/LyricsMessage';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Album />
        <MusicPlayer />
        <VideoSection />
        <TourDates />
        <MerchPreview />
        <LyricsMessage />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
