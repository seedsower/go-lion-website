import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Shuffle, Repeat, Repeat1, ListMusic } from 'lucide-react';

const SingleAlbumPlayer = ({ albumName, tracks, albumArt, albumArtAlt }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState('off'); // 'off', 'all', 'one'
  const audioRef = useRef(null);
  const [playHistory, setPlayHistory] = useState([]);

  // Load and play track when currentTrack changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = tracks[currentTrack].url;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log('Playback prevented:', err));
      }
    }
  }, [currentTrack, tracks, isPlaying]);

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
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      return;
    }

    if (shuffle) {
      setPlayHistory([...playHistory, currentTrack]);
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * tracks.length);
      } while (nextIndex === currentTrack && tracks.length > 1);
      setCurrentTrack(nextIndex);
    } else {
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

  const waveformBars = [...Array(60)].map(() => Math.random());

  return (
    <div className="bg-gradient-to-br from-pan-black via-gray-900 to-pan-black border-2 border-pan-gold/30 rounded-2xl p-8 md:p-12 shadow-2xl noise-overlay">
      {/* Album Title */}
      <div className="text-center mb-6">
        <h3 className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
          {albumName}
        </h3>
      </div>

      {/* Album Art & Track Info */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        {/* Album Art Thumbnail */}
        <div className="w-32 h-32 bg-gradient-to-br from-pan-red via-pan-gold to-pan-green p-1 rounded-lg shadow-lg flex-shrink-0">
          <div className="w-full h-full bg-pan-black rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={albumArt}
              alt={albumArtAlt}
              className="w-full h-full object-cover rounded-lg"
            />
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
  );
};

export default SingleAlbumPlayer;
