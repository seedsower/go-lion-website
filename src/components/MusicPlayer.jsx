import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Audio tracks with Cloudflare R2 Public CDN URLs
  const tracks = [
    {
      title: 'Burn the Throne',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/golion-audio/Full/burnthethrone.mp3',
      duration: 342
    },
    {
      title: 'Walls up High',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/golion-audio/Full/Walls%20up%20High.mp3',
      duration: 304
    },
    {
      title: 'Liberation Day',
      artist: 'Go Lion',
      url: 'https://pub-e9c50e9620ca4743a202b88e622c18e8.r2.dev/golion-audio/Full/Liberation%20Day.mp3',
      duration: 393
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

  // Load and play track when currentTrack changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Playback prevented:', err));
      }
    }
  }, [currentTrack]);

  // Handle play/pause state
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(err => console.log('Playback prevented:', err));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handle volume and mute
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  // Update time from audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      nextTrack();
      setIsPlaying(true);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const previousTrack = () => {
    setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    setIsPlaying(true);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
    setIsPlaying(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.currentTarget;
    const clickX = e.nativeEvent.offsetX;
    const width = progressBar.offsetWidth;
    const newTime = (clickX / width) * (duration || tracks[currentTrack].duration);

    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate waveform bars
  const waveformBars = [...Array(60)].map(() => Math.random());

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

        {/* Music Player */}
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="bg-gradient-to-br from-pan-black via-gray-900 to-pan-black border-2 border-pan-gold/30 rounded-2xl p-8 md:p-12 shadow-2xl noise-overlay">
            {/* Album Art & Track Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Album Art Thumbnail */}
              <div className="w-32 h-32 bg-gradient-to-br from-pan-red via-pan-gold to-pan-green p-1 rounded-lg shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-pan-black rounded-lg flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-pan-gold" fill="currentColor">
                    <path d="M50 20 L35 35 L30 25 L25 35 L20 30 L25 45 L20 50 L30 55 L25 65 L35 60 L40 70 L45 60 L50 65 L55 60 L60 70 L65 60 L70 65 L75 55 L80 50 L75 45 L80 30 L75 35 L70 25 L65 35 L50 20 Z M50 40 C55 40 60 45 60 50 C60 55 55 60 50 60 C45 60 40 55 40 50 C40 45 45 40 50 40 Z" />
                  </svg>
                </div>
              </div>

              {/* Track Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Now Playing
                </p>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {tracks[currentTrack].title}
                </h3>
                <p className="text-xl text-pan-gold">
                  {tracks[currentTrack].artist}
                </p>
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} preload="metadata" />

            {/* Waveform Visualization */}
            <div className="mb-8">
              <div className="flex items-end justify-center gap-1 h-32 bg-pan-black/50 rounded-lg p-4">
                {waveformBars.map((height, i) => {
                  const trackDuration = duration || tracks[currentTrack].duration;
                  const progress = currentTime / trackDuration;
                  const isPast = i / waveformBars.length < progress;
                  return (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPast
                          ? 'bg-gradient-to-t from-pan-gold to-pan-red'
                          : 'bg-gray-700'
                      }`}
                      style={{
                        height: `${height * 100}%`,
                        opacity: isPlaying && isPast ? 1 : 0.5,
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-gray-400 font-lyrics">
                  {formatTime(currentTime)}
                </span>
                <div
                  className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden cursor-pointer hover:h-3 transition-all"
                  onClick={handleProgressClick}
                  role="slider"
                  aria-label="Seek position"
                  aria-valuemin="0"
                  aria-valuemax={duration || tracks[currentTrack].duration}
                  aria-valuenow={currentTime}
                >
                  <div
                    className="h-full bg-gradient-to-r from-pan-red via-pan-gold to-pan-green transition-all duration-100"
                    style={{
                      width: `${(currentTime / (duration || tracks[currentTrack].duration)) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-400 font-lyrics">
                  {formatTime(duration || tracks[currentTrack].duration)}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
              {/* Volume Control */}
              <div className="flex items-center gap-3 w-32">
                <button
                  onClick={toggleMute}
                  className="text-gray-400 hover:text-pan-gold transition-colors"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume * 100}
                  onChange={(e) => setVolume(e.target.value / 100)}
                  className="w-full accent-pan-gold"
                  aria-label="Volume control"
                />
              </div>

              {/* Playback Controls */}
              <div className="flex items-center gap-6">
                <button
                  onClick={previousTrack}
                  className="text-white hover:text-pan-gold transition-colors transform hover:scale-110"
                  aria-label="Previous track"
                >
                  <SkipBack size={32} fill="currentColor" />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-pan-gold to-pan-red flex items-center justify-center text-pan-black hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] transition-all transform hover:scale-110"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <Pause size={32} fill="currentColor" />
                  ) : (
                    <Play size={32} fill="currentColor" className="ml-1" />
                  )}
                </button>
                <button
                  onClick={nextTrack}
                  className="text-white hover:text-pan-gold transition-colors transform hover:scale-110"
                  aria-label="Next track"
                >
                  <SkipForward size={32} fill="currentColor" />
                </button>
              </div>

              {/* Spacer for alignment */}
              <div className="w-32"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
