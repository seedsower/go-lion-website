import React, { useEffect, useRef, useState } from 'react';
import { Music, ExternalLink } from 'lucide-react';

const Album = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTrack, setHoveredTrack] = useState(null);

  const tracks = [
    { number: 1, title: 'The Awakening (Intro)', duration: '2:47', lyric: '"Open your eyes... the throne is burning..."' },
    { number: 2, title: 'Burn the Throne', duration: '5:42', lyric: '"We come not with hate, but love alone..."' },
    { number: 3, title: 'Breadline', duration: '4:24', lyric: '"While the rich man feast, the poor man starve..."' },
    { number: 4, title: 'Digital Babylon', duration: '4:56', lyric: '"They control the algorithm, but not our minds..."' },
    { number: 5, title: "Mama's Hands", duration: '4:08', lyric: '"These hands built nations, yet get no recognition..."' },
    { number: 6, title: 'Passport to Nowhere', duration: '5:12', lyric: '"Running from war, but closed are the doors..."' },
    { number: 7, title: 'Concrete Garden', duration: '3:58', lyric: '"Flowers grow through cracks in the street..."' },
    { number: 8, title: 'The Algorithm', duration: '4:33', lyric: '"Feed us lies in a digital disguise..."' },
    { number: 9, title: 'Rise Again', duration: '5:04', lyric: '"Every time they knock us down, we rise again..."' },
    { number: 10, title: 'Battlefield', duration: '4:47', lyric: '"This concrete jungle is a battlefield..."' },
    { number: 11, title: 'Holy Ground', duration: '5:21', lyric: '"Wherever the people stand, that is holy ground..."' },
    { number: 12, title: "The Children's Eyes", duration: '4:44', lyric: '"The future watches, waiting for our truth..."' },
    { number: 13, title: 'Liberation Day', duration: '6:33', lyric: '"When the last chain breaks, we all go free..."' },
  ];

  const streamingPlatforms = [
    { name: 'Spotify', icon: '🎵', url: '#' },
    { name: 'Apple Music', icon: '🍎', url: '#' },
    { name: 'YouTube Music', icon: '▶️', url: '#' },
    { name: 'Tidal', icon: '🌊', url: '#' },
    { name: 'Amazon Music', icon: '📦', url: '#' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="album"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-red/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Burn the Throne
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">The Debut Album</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Album Artwork */}
          <div className={`${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="sticky top-24">
              <div className="relative group">
                {/* Album Cover */}
                <div className="aspect-square bg-gradient-to-br from-pan-red via-pan-gold to-pan-green p-1 rounded-lg shadow-2xl transform group-hover:scale-105 transition-all duration-500 animate-glow">
                  <div className="w-full h-full bg-pan-black rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Placeholder Album Art */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pan-gold to-pan-red rounded-full flex items-center justify-center">
                          <svg
                            viewBox="0 0 100 100"
                            className="w-32 h-32 text-pan-black"
                            fill="currentColor"
                          >
                            <path d="M50 10 L30 30 L20 15 L10 30 L5 20 L15 45 L10 50 L25 60 L15 75 L30 65 L35 80 L45 65 L50 75 L55 65 L65 80 L70 65 L85 75 L75 60 L90 50 L85 45 L95 20 L90 30 L80 15 L70 30 L50 10 Z" />
                            <circle cx="50" cy="50" r="15" />
                            <text x="50" y="95" textAnchor="middle" className="text-[8px] fill-pan-gold font-display">BURN THE THRONE</text>
                          </svg>
                        </div>
                        <h3 className="text-4xl font-display font-bold text-white mb-2">
                          GO LION
                        </h3>
                        <p className="text-2xl text-pan-gold font-semibold">
                          Burn the Throne
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 noise-overlay"></div>
                  </div>
                </div>

                {/* Vinyl Record Peek */}
                <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-64 h-64 hidden lg:block">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-pan-black via-gray-900 to-pan-black shadow-2xl opacity-0 group-hover:opacity-100 group-hover:translate-x-12 transition-all duration-500">
                    <div className="absolute inset-8 rounded-full bg-pan-gold flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-pan-black"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Streaming Platforms */}
              <div className="mt-8">
                <h4 className="text-xl font-display font-bold text-white mb-4 text-center">
                  Stream Now On
                </h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {streamingPlatforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      className="flex items-center gap-2 px-4 py-2 bg-pan-black/50 border border-pan-gold/30 rounded-lg hover:border-pan-gold hover:bg-pan-gold/10 transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-2xl">{platform.icon}</span>
                      <span className="text-sm font-semibold text-gray-300 group-hover:text-pan-gold transition-colors">
                        {platform.name}
                      </span>
                      <ExternalLink size={14} className="text-gray-500 group-hover:text-pan-gold transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Pre-order Vinyl */}
              <div className="mt-8 text-center">
                <button className="btn-primary w-full md:w-auto">
                  Pre-Order Limited Edition Vinyl
                </button>
                <p className="text-sm text-gray-400 mt-3">
                  180g Gold & Red Splatter • Only 500 Copies
                </p>
              </div>
            </div>
          </div>

          {/* Track Listing */}
          <div className={`${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
              <Music className="text-pan-gold" size={32} />
              Track Listing
            </h3>
            <div className="space-y-2">
              {tracks.map((track, index) => (
                <div
                  key={track.number}
                  className="group relative bg-pan-black/30 border border-pan-gold/20 rounded-lg p-4 hover:bg-pan-gold/10 hover:border-pan-gold transition-all duration-300 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setHoveredTrack(index)}
                  onMouseLeave={() => setHoveredTrack(null)}
                  style={{ animationDelay: `${0.6 + index * 0.05}s` }}
                >
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-2xl font-display font-bold text-pan-gold w-8">
                        {track.number.toString().padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white group-hover:text-pan-gold transition-colors">
                          {track.title}
                        </h4>
                        {hoveredTrack === index && (
                          <p className="text-sm text-gray-400 italic mt-1 font-lyrics">
                            {track.lyric}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="text-gray-400 font-lyrics text-sm">
                      {track.duration}
                    </span>
                  </div>

                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pan-red/10 via-pan-gold/10 to-pan-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>

            {/* Total Duration */}
            <div className="mt-6 pt-6 border-t border-pan-gold/20 flex justify-between items-center">
              <span className="text-gray-400 font-semibold">Total Duration</span>
              <span className="text-pan-gold font-display font-bold text-xl">61:13</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
