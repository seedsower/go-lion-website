import React, { useEffect, useRef, useState } from 'react';
import SingleAlbumPlayer from './SingleAlbumPlayer';

const MusicPlayer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Album: Burn the Throne
  const burnTheThroneTracksData = [
    {
      title: 'The Awakening (Intro)',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/The%20Awakening.mp3',
      duration: 167
    },
    {
      title: 'Burn the Throne',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/burnthethrone.mp3',
      duration: 342
    },
    {
      title: 'Breadline',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/_Breadline_.mp3',
      duration: 264
    },
    {
      title: 'Digital Babylon',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Digital%20Babylon.mp3',
      duration: 296
    },
    {
      title: "Mama's Hands",
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Mama%27s%20Hands.mp3',
      duration: 248
    },
    {
      title: 'Passport to Nowhere',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Passport%20to%20nowhere.mp3',
      duration: 312
    },
    {
      title: 'Concrete Garden',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/_Concrete%20Garden_.mp3',
      duration: 238
    },
    {
      title: 'The Algorithm',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/_The%20Algorithm_.mp3',
      duration: 273
    },
    {
      title: 'Walls up High',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Walls%20up%20High.mp3',
      duration: 304
    },
    {
      title: 'Battlefield',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/_Battlefield_.mp3',
      duration: 287
    },
    {
      title: 'Holy Ground',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/_Holy%20Ground_.mp3',
      duration: 321
    },
    {
      title: "The Children's Eyes",
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Childrens%20Eyes.mp3',
      duration: 284
    },
    {
      title: 'Liberation Day',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/Full/Liberation%20Day.mp3',
      duration: 393
    },
  ];

  // Album: Liberation Frequency
  const liberationFrequencyTracksData = [
    {
      title: 'Ancestors in My Blood',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Ancestors%20in%20My%20Blood_.mp3',
      duration: 240
    },
    {
      title: 'Build It Back',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Build%20It%20Back_.mp3',
      duration: 240
    },
    {
      title: 'Dancing on the Ashes',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Dancing%20on%20the%20Ashes_.mp3',
      duration: 240
    },
    {
      title: 'Digital Soldier',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Digital%20Soldier_.mp3',
      duration: 240
    },
    {
      title: 'Divide and Fall',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Divide%20and%20Fall_.mp3',
      duration: 240
    },
    {
      title: 'Forgive Me, Father',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Forgive%20Me%2C%20Father_.mp3',
      duration: 240
    },
    {
      title: 'Letter to My Son',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Letter%20to%20My%20Son_.mp3',
      duration: 240
    },
    {
      title: 'Love Is the Weapon',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Love%20Is%20the%20Weapon_.mp3',
      duration: 240
    },
    {
      title: 'One Frequency',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_One%20Frequency_.mp3',
      duration: 240
    },
    {
      title: 'Prodigal',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Prodigal_.mp3',
      duration: 240
    },
    {
      title: 'Sunday Morning Kitchen',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Sunday%20Morning%20Kitchen_.mp3',
      duration: 240
    },
    {
      title: 'Tend Your Garden',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_Tend%20Your%20Garden_.mp3',
      duration: 240
    },
    {
      title: 'The Frequency',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_The%20Frequency_.mp3',
      duration: 240
    },
    {
      title: 'The Healers',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_The%20Healers_.mp3',
      duration: 240
    },
    {
      title: 'The Wound That Made Me',
      artist: 'Go Lion',
      url: 'https://pub-24a857576bb74ba1916df6f252095ece.r2.dev/_The%20Wound%20That%20Made%20Me_.mp3',
      duration: 240
    },
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
      id="music-player"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-pan-black via-pan-green/10 to-pan-black"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">
            Listen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pan-red via-pan-gold to-pan-green mx-auto"></div>
        </div>

        {/* Burn the Throne Player */}
        <div className={`max-w-4xl mx-auto mb-16 ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <SingleAlbumPlayer
            albumName="Burn the Throne"
            tracks={burnTheThroneTracksData}
            albumArt="/GO LION/lion-burning-throne.png"
            albumArtAlt="Go Lion - Burn the Throne Album Cover"
          />
        </div>

        {/* Liberation Frequency Player */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <SingleAlbumPlayer
            albumName="Liberation Frequency"
            tracks={liberationFrequencyTracksData}
            albumArt="/GO LION/liberationfrequency.png"
            albumArtAlt="Go Lion - Liberation Frequency Album Cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
