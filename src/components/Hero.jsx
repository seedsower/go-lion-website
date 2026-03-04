import React, { useEffect, useRef } from 'react';
import { Play, ChevronDown } from 'lucide-react';
import Particles from './Particles';

const Hero = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = logo.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      logo.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };

    const handleMouseLeave = () => {
      logo.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    };

    logo.addEventListener('mousemove', handleMouseMove);
    logo.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      logo.removeEventListener('mousemove', handleMouseMove);
      logo.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-pan-red/20 via-pan-black to-pan-black"></div>

      {/* Particles */}
      <Particles />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 section-container">
        <div ref={logoRef} className="transition-transform duration-200 ease-out">
          {/* Lion Logo - Roaring Lion */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pan-gold to-pan-red rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
              <img
                src="/GO LION/roaring-lion.png"
                alt="Go Lion - Roaring Lion Logo"
                className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,215,0,0.6)] animate-float"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 text-gradient animate-in text-shadow-glow">
            GO LION
          </h1>

          {/* Album Title */}
          <div className="mb-8 animate-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-6xl font-display text-white mb-3 tracking-wider">
              BURN THE THRONE
            </h2>
            <p className="text-pan-gold text-xl md:text-2xl font-semibold">
              Debut Album • Available Now
            </p>
          </div>

          {/* Sound Wave Visualization */}
          <div className="flex justify-center items-center gap-1 mb-12 animate-in" style={{ animationDelay: '0.4s' }}>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-pan-green rounded-full"
                style={{
                  height: `${Math.random() * 40 + 10}px`,
                  animation: `pulse ${Math.random() * 1 + 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05}s`,
                }}
              ></div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in" style={{ animationDelay: '0.6s' }}>
            <a href="#music-player" className="btn-primary inline-flex items-center justify-center gap-2">
              <Play size={20} fill="currentColor" />
              Listen Now
            </a>
            <a href="#videos" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Play size={20} />
              Watch Video
            </a>
          </div>

          {/* Pull Quote */}
          <blockquote className="text-xl md:text-2xl italic text-earth-tan max-w-3xl mx-auto mb-8 animate-in" style={{ animationDelay: '0.8s' }}>
            "The throne is empty now. Take your seat, my people."
          </blockquote>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-pan-gold hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={40} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
