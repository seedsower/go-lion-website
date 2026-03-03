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
          {/* Lion Logo/Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pan-gold to-pan-red rounded-full flex items-center justify-center animate-pulse-slow shadow-[0_0_60px_rgba(255,215,0,0.4)]">
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 md:w-24 md:h-24 text-pan-black"
                fill="currentColor"
              >
                <path d="M50 20 L35 35 L30 25 L25 35 L20 30 L25 45 L20 50 L30 55 L25 65 L35 60 L40 70 L45 60 L50 65 L55 60 L60 70 L65 60 L70 65 L75 55 L80 50 L75 45 L80 30 L75 35 L70 25 L65 35 L50 20 Z M50 40 C55 40 60 45 60 50 C60 55 55 60 50 60 C45 60 40 55 40 50 C40 45 45 40 50 40 Z" />
              </svg>
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
