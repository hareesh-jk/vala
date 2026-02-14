import { useState, useRef, useEffect } from "react";

const MusicToggle = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/music/background.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 glass-strong glow-button w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🎵" : "🔇"}
    </button>
  );
};

export default MusicToggle;
