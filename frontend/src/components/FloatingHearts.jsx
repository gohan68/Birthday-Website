import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const getRandomValue = (min, max) => Math.random() * (max - min) + min;

const HeartItem = ({ delay, duration, left }) => {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${left}%`,
        bottom: '-50px',
      }}
      initial={{ y: 0, opacity: 0.6, rotate: 0 }}
      animate={{
        y: -window.innerHeight - 100,
        opacity: [0.6, 0.8, 0.6, 0],
        rotate: [0, 10, -10, 0],
        x: [0, 30, -30, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <Heart 
        className="fill-primary text-primary" 
        size={getRandomValue(20, 40)}
        style={{ opacity: 0.3 }}
      />
    </motion.div>
  );
};

export const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: getRandomValue(0, 10),
    duration: getRandomValue(15, 25),
    left: getRandomValue(0, 100)
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map(heart => (
        <HeartItem
          key={heart.id}
          delay={heart.delay}
          duration={heart.duration}
          left={heart.left}
        />
      ))}
    </div>
  );
};