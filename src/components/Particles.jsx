import React from 'react';

const Particles = () => {
  // Generate random particles
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 5}s`,
    drift: `${(Math.random() - 0.5) * 100}px`,
    size: Math.random() * 4 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full bg-gradient-to-t from-pan-red via-pan-gold to-transparent opacity-60 blur-sm"
          style={{
            left: particle.left,
            bottom: '-10px',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            '--duration': particle.duration,
            '--delay': particle.delay,
            '--drift': particle.drift,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
