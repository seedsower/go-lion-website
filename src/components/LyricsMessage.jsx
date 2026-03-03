import React, { useState, useEffect, useRef } from 'react';

const LyricsMessage = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const quotes = [
    {
      text: "The throne is empty now. Take your seat, my people.",
      song: "Burn the Throne",
    },
    {
      text: "We come to burn the throne. Not with hate, but love alone.",
      song: "Burn the Throne",
    },
    {
      text: "Every time they knock us down, we rise again.",
      song: "Rise Again",
    },
    {
      text: "When the last chain breaks, we all go free.",
      song: "Liberation Day",
    },
    {
      text: "The revolution is love.",
      song: "Holy Ground",
    },
  ];

  const featuredLyrics = [
    {
      title: "Burn the Throne",
      lyrics: `Ashes to ashes, dust to dust
      The crown is heavy with blood and rust
      We come not as slaves, but as kings and queens
      To reclaim what's ours by any means

      Burn the throne, burn the throne
      No more masters, we stand alone
      Burn the throne, burn the throne
      The people's time has finally come`,
    },
    {
      title: "Rise Again",
      lyrics: `They push us down into the mud
      Try to silence our rebel blood
      But like the phoenix from the flame
      We rise again, we rise again

      You can break our bodies, chain our hands
      Build your walls across our lands
      But the spirit cannot die
      Watch us rise into the sky`,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
      id="lyrics"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-green/10 to-pan-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='50' font-family='serif' font-size='60' fill='%23FFD700' opacity='0.3'%3E♪%3C/text%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="section-container relative z-10">
        {/* Rotating Quote Display */}
        <div className={`text-center mb-24 min-h-[300px] flex flex-col items-center justify-center ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <div className="relative max-w-4xl mx-auto">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentQuoteIndex
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none'
                }`}
              >
                <blockquote className="relative">
                  <div className="absolute -left-8 -top-8 md:-left-12 md:-top-12 text-9xl text-pan-gold/20 font-display">"</div>
                  <p className="text-3xl md:text-6xl font-display italic text-white leading-relaxed mb-6 px-8">
                    {quote.text}
                  </p>
                  <div className="absolute -right-8 -bottom-8 md:-right-12 md:-bottom-12 text-9xl text-pan-gold/20 font-display">"</div>
                </blockquote>
                <p className="text-pan-gold text-xl md:text-2xl font-semibold mt-8">
                  — {quote.song}
                </p>
              </div>
            ))}
          </div>

          {/* Quote Navigation Dots */}
          <div className="flex gap-2 mt-12">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuoteIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuoteIndex
                    ? 'bg-pan-gold w-8'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Featured Lyrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuredLyrics.map((song, index) => (
            <div
              key={song.title}
              className={`bg-pan-black/50 border border-pan-gold/20 rounded-lg p-8 md:p-10 hover:border-pan-gold hover:bg-pan-gold/5 transition-all duration-300 ${
                isVisible ? 'animate-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.4 + index * 0.2}s` }}
            >
              <h3 className="text-3xl font-display font-bold text-pan-gold mb-6 text-center">
                {song.title}
              </h3>
              <div className="font-lyrics text-gray-300 leading-loose whitespace-pre-line text-center">
                {song.lyrics}
              </div>
            </div>
          ))}
        </div>

        {/* Message Section */}
        <div className={`mt-24 max-w-4xl mx-auto text-center ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-8">
            The Revolution is Love
          </h3>
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              Our music carries a message that transcends sound. It's a call to consciousness,
              a reminder that true power lies not in dominance, but in unity.
            </p>
            <p>
              We sing of struggles both ancient and modern—from colonial oppression to digital
              surveillance, from poverty to climate crisis. But always, we sing of hope.
            </p>
            <p className="text-pan-gold font-semibold text-2xl">
              "When we burn the throne, we don't build another. We plant a garden where all can eat."
            </p>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pan-gold to-transparent"></div>
          <div className="w-12 h-12 bg-gradient-to-br from-pan-red to-pan-gold rounded-full flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-pan-black" fill="currentColor">
              <path d="M50 30 L40 40 L35 35 L30 40 L40 50 L30 60 L35 65 L40 60 L50 70 L60 60 L65 65 L70 60 L60 50 L70 40 L65 35 L60 40 L50 30 Z" />
            </svg>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pan-gold to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default LyricsMessage;
