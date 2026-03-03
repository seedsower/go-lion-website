import React, { useState, useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [activeCategory, setActiveCategory] = useState('featured');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const videos = {
    featured: [
      {
        id: 1,
        title: 'Burn the Throne (Official Music Video)',
        thumbnail: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=450&fit=crop',
        duration: '5:42',
      },
    ],
    live: [
      {
        id: 2,
        title: 'Rise Again - Live at Revolution Hall',
        thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&h=450&fit=crop',
        duration: '6:15',
      },
      {
        id: 3,
        title: 'Liberation Day - Festival Performance',
        thumbnail: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&h=450&fit=crop',
        duration: '7:20',
      },
    ],
    behind: [
      {
        id: 4,
        title: 'Making of Burn the Throne',
        thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
        duration: '12:34',
      },
      {
        id: 5,
        title: 'Studio Sessions: The Creative Process',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop',
        duration: '18:45',
      },
      {
        id: 6,
        title: 'The Message Behind the Music',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=450&fit=crop',
        duration: '15:22',
      },
    ],
  };

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
      id="videos"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-red/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Watch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className={`flex justify-center gap-4 mb-12 flex-wrap ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          {[
            { key: 'featured', label: 'Featured Video' },
            { key: 'live', label: 'Live Performances' },
            { key: 'behind', label: 'Behind the Scenes' },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                activeCategory === category.key
                  ? 'bg-pan-gold text-pan-black shadow-[0_0_20px_rgba(255,215,0,0.4)]'
                  : 'bg-pan-black/50 text-gray-300 border border-pan-gold/30 hover:border-pan-gold hover:text-white'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Featured Video */}
        {activeCategory === 'featured' && (
          <div className={`max-w-5xl mx-auto mb-12 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="relative group">
              <div className="aspect-video bg-pan-black rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={videos.featured[0].thumbnail}
                  alt={videos.featured[0].title}
                  className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pan-black/80 via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-pan-gold/90 flex items-center justify-center hover:bg-pan-gold hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(255,215,0,0.6)]">
                    <Play size={40} fill="currentColor" className="text-pan-black ml-2" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    {videos.featured[0].title}
                  </h3>
                  <p className="text-gray-300">{videos.featured[0].duration}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        {activeCategory !== 'featured' && (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            {videos[activeCategory].map((video, index) => (
              <div
                key={video.id}
                className="group relative"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="aspect-video bg-pan-black rounded-lg overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pan-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 rounded-full bg-pan-gold flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.6)]">
                      <Play size={28} fill="currentColor" className="text-pan-black ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-300">{video.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* YouTube Subscribe CTA */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <button className="btn-primary">
            Subscribe on YouTube
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
