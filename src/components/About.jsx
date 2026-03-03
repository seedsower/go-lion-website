import React, { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-green/10 to-pan-black overflow-hidden"
    >
      {/* Parallax Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            The Pride
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto"></div>
        </div>

        {/* Mission Statement */}
        <div className={`max-w-4xl mx-auto mb-20 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center mb-8">
            Born in the heart of the struggle, forged in the fire of truth, Go Lion emerged
            not as a band, but as a movement. We are voices for the voiceless, rhythm for the
            revolutionaries, and melody for the marginalized.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
            Our music is rooted in the conscious reggae tradition—following the path laid by
            legends, yet walking toward tomorrow. We don't just sing about change; we are the
            change. <span className="text-pan-gold font-semibold">The throne is burning. The people are rising.</span>
          </p>
        </div>

        {/* Pull Quote */}
        <div className={`my-20 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <blockquote className="relative">
            <div className="absolute -left-4 -top-4 text-9xl text-pan-gold/20 font-display">"</div>
            <p className="text-3xl md:text-5xl font-display italic text-center text-white relative z-10 py-8">
              The throne is empty now.
              <br />
              <span className="text-pan-gold">Take your seat, my people.</span>
            </p>
            <div className="absolute -right-4 -bottom-4 text-9xl text-pan-gold/20 font-display">"</div>
          </blockquote>
        </div>

        {/* Band Members Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          {[
            { name: 'Marcus "Roar" Thompson', role: 'Lead Vocals & Rhythm Guitar', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop' },
            { name: 'Assata Williams', role: 'Bass & Backing Vocals', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
            { name: 'Kwame "Thunder" Johnson', role: 'Drums & Percussion', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
          ].map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <div className="aspect-square relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Color overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pan-red/40 via-pan-gold/20 to-pan-green/40 group-hover:opacity-0 transition-opacity duration-500"></div>
                {/* Noise overlay */}
                <div className="absolute inset-0 noise-overlay"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-pan-black via-pan-black/95 to-transparent">
                <h3 className="text-2xl font-display font-bold text-pan-gold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Members */}
        <div className={`mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '1.1s' }}>
          {[
            { name: 'Isaiah "Keys" Martin', role: 'Keyboards & Melodica', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
            { name: 'Zuri Anderson', role: 'Lead Guitar & Backing Vocals', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop' },
          ].map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-[16/9] md:aspect-[2/1] relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pan-red/40 via-pan-gold/20 to-pan-green/40 group-hover:opacity-0 transition-opacity duration-500"></div>
                <div className="absolute inset-0 noise-overlay"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-pan-black via-pan-black/95 to-transparent">
                <h3 className="text-xl md:text-2xl font-display font-bold text-pan-gold mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
