import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export const BackgroundMusic = ({ autoPlay = false }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoPlay && audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(err => console.log("Audio autoplay prevented:", err));
      setPlaying(true);
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.volume = 0.6;
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} src="/music/Blue-Yung-Kai.mp3" loop />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-medium"
        onClick={toggleMusic}
      >
        {playing ? (
          <>
            <Volume2 className="w-5 h-5" />
            <span className="hidden sm:inline">Pause Music</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5" />
            <span className="hidden sm:inline">Play Music</span>
          </>
        )}
      </motion.button>
    </div>
  );
};