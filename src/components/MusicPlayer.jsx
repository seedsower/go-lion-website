import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, Repeat1, ListMusic } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState('off'); // 'off', 'all', 'one'
  const [currentAlbum, setCurrentAlbum] = useState('burnTheThrone'); // 'burnTheThrone' or 'liberationFrequency'
  const audioRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [playHistory, setPlayHistory] = useState([]);

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

  // Albums configuration
  const albums = {
    burnTheThrone: {
      name: 'Burn the Throne',
      tracks: burnTheThroneTracksData,
      artwork: '/GO LION/lion-burning-throne.png',
      artworkAlt: 'Go Lion - Burn the Throne Album Cover'
    },
    liberationFrequency: {
      name: 'Liberation Frequency',
      tracks: liberationFrequencyTracksData,
      artwork: '/GO LION/liberationfrequency.png',
      artworkAlt: 'Go Lion - Liberation Frequency Album Cover'
    }
  };

  // Get current album data
  const currentAlbumData = albums[currentAlbum];
  const tracks = currentAlbumData.tracks;

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
    if (shuffle && playHistory.length > 0) {
      // Go back in shuffle history
      const newHistory = [...playHistory];
      const previousIndex = newHistory.pop();
      setPlayHistory(newHistory);
      setCurrentTrack(previousIndex);
    } else {
      setCurrentTrack((prev) => (prev > 0 ? prev - 1 : tracks.length - 1));
    }
    setIsPlaying(true);
  };

  const nextTrack = () => {
    if (repeat === 'one') {
      // Repeat current track - restart it
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }

    if (shuffle) {
      // Shuffle mode - pick random track
      setPlayHistory([...playHistory, currentTrack]);
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * tracks.length);
      } while (nextIndex === currentTrack && tracks.length > 1);
      setCurrentTrack(nextIndex);
    } else {
      // Normal or repeat all mode
      const nextIndex = currentTrack + 1;
      if (nextIndex >= tracks.length) {
        if (repeat === 'all') {
          setCurrentTrack(0);
        } else {
          setIsPlaying(false);
          return;
        }
      } else {
        setCurrentTrack(nextIndex);
      }
    }
    setIsPlaying(true);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleShuffle = () => {
    setShuffle(!shuffle);
    setPlayHistory([]);
  };

  const toggleRepeat = () => {
    const modes = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeat);
    const nextIndex = (currentIndex + 1) % modes.length;
    setRepeat(modes[nextIndex]);
  };

  const playAll = () => {
    setCurrentTrack(0);
    setIsPlaying(true);
    setRepeat('all');
    setShuffle(false);
  };

  const switchAlbum = (albumKey) => {
    setCurrentAlbum(albumKey);
    setCurrentTrack(0);
    setIsPlaying(false);
    setCurrentTime(0);
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

            {/* Album Switcher */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => switchAlbum('burnTheThrone')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentAlbum === 'burnTheThrone'
                    ? 'bg-gradient-to-r from-pan-gold to-pan-red text-pan-black shadow-lg'
                    : 'bg-pan-black/50 text-gray-400 border border-pan-gold/30 hover:border-pan-gold hover:text-pan-gold'
                }`}
              >
                Burn the Throne
              </button>
              <button
                onClick={() => switchAlbum('liberationFrequency')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  currentAlbum === 'liberationFrequency'
                    ? 'bg-gradient-to-r from-pan-gold to-pan-red text-pan-black shadow-lg'
                    : 'bg-pan-black/50 text-gray-400 border border-pan-gold/30 hover:border-pan-gold hover:text-pan-gold'
                }`}
              >
                Liberation Frequency
              </button>
            </div>

            {/* Album Art & Track Info */}
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Album Art Thumbnail */}
              <div className="w-32 h-32 bg-gradient-to-br from-pan-red via-pan-gold to-pan-green p-1 rounded-lg shadow-lg flex-shrink-0">
                <div className="w-full h-full bg-pan-black rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={currentAlbumData.artwork}
                    alt={currentAlbumData.artworkAlt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Track Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Now Playing • {currentAlbumData.name}
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

            {/* Additional Controls */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={playAll}
                className="flex items-center gap-2 px-4 py-2 bg-pan-gold/10 hover:bg-pan-gold/20 border border-pan-gold/30 hover:border-pan-gold rounded-lg text-pan-gold transition-all"
                aria-label="Play all tracks"
              >
                <ListMusic size={20} />
                <span className="font-semibold">Play All</span>
              </button>
              <button
                onClick={toggleShuffle}
                className={`p-3 rounded-lg transition-all ${
                  shuffle
                    ? 'bg-pan-gold text-pan-black'
                    : 'bg-pan-black/50 hover:bg-pan-gold/20 text-gray-400 hover:text-pan-gold border border-pan-gold/30'
                }`}
                aria-label={shuffle ? 'Shuffle on' : 'Shuffle off'}
                title={shuffle ? 'Shuffle: On' : 'Shuffle: Off'}
              >
                <Shuffle size={20} />
              </button>
              <button
                onClick={toggleRepeat}
                className={`p-3 rounded-lg transition-all ${
                  repeat !== 'off'
                    ? 'bg-pan-gold text-pan-black'
                    : 'bg-pan-black/50 hover:bg-pan-gold/20 text-gray-400 hover:text-pan-gold border border-pan-gold/30'
                }`}
                aria-label={`Repeat: ${repeat}`}
                title={`Repeat: ${repeat === 'off' ? 'Off' : repeat === 'all' ? 'All' : 'One'}`}
              >
                {repeat === 'one' ? <Repeat1 size={20} /> : <Repeat size={20} />}
              </button>
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
