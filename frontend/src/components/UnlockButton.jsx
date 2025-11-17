import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import confetti from "canvas-confetti";

export const UnlockButton = ({ onUnlock }) => {
  const [isPressed, setIsPressed] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleMouseDown = () => {
    if (unlocked) return;
    setIsPressed(true);
    progressInterval.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          handleUnlock();
          return 100;
        }
        return prev + (100 / 30); // 3 seconds = 30 frames at ~100ms intervals
      });
    }, 100);
  };

  const handleMouseUp = () => {
    if (unlocked) return;
    setIsPressed(false);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    setProgress(0);
  };

  const handleUnlock = () => {
    setUnlocked(true);
    
    // Trigger confetti
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        setTimeout(() => {
          onUnlock();
        }, 500);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FFB7C5', '#FFA9CB', '#FF90B3', '#F885A4']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FFB7C5', '#FFA9CB', '#FF90B3', '#F885A4']
      });
    }, 250);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Progress Circle */}
        <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="hsl(340 30% 90%)"
            strokeWidth="4"
            fill="none"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="48%"
            stroke="hsl(340 82% 75%)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.1 }}
            style={{
              strokeDasharray: '1 1',
              filter: 'drop-shadow(0 0 8px hsl(340 82% 75% / 0.5))'
            }}
          />
        </svg>

        {/* Button */}
        <motion.button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          className="relative bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 rounded-full text-xl sm:text-2xl font-bold shadow-2xl transition-all duration-300"
          whileHover={{ scale: unlocked ? 1 : 1.05 }}
          whileTap={{ scale: unlocked ? 1 : 0.95 }}
          animate={{
            boxShadow: isPressed 
              ? '0 0 40px hsl(340 82% 75% / 0.6)'
              : '0 20px 50px hsl(340 82% 75% / 0.3)'
          }}
        >
          <span className="flex items-center gap-3 whitespace-nowrap">
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
            <span className="hidden sm:inline">
              {unlocked ? 'Unlocking...' : 'Press & Hold to Unlock My Heart'}
            </span>
            <span className="sm:hidden">
              {unlocked ? 'Unlocking...' : 'Hold to Unlock ❤️'}
            </span>
          </span>
        </motion.button>
      </motion.div>

      <motion.p
        className="text-muted-foreground text-center max-w-md px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Hold for 3 seconds to reveal your birthday surprise
      </motion.p>
    </div>
  );
};