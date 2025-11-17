import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export const TypewriterText = () => {
  const message = `My love, today is your day — the day the world was blessed with you.

Every moment with you feels softer than a sunrise and sweeter than a slow song.

You bring light into my darkest times, laughter into my silent days, and peace into my restless nights.

Thank you for loving me, for choosing me, and for being the most beautiful part of my life.

On your birthday, I promise to hold your heart gently, love you endlessly, and stand by you always — today, tomorrow, and every day after.

Happy Birthday, my heart. You deserve happiness that never ends. ❤️`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="text-center max-w-3xl mx-auto px-4"
    >
      <TypeAnimation
        sequence={[message]}
        wrapper="p"
        speed={70}
        className="text-base sm:text-lg leading-relaxed text-foreground whitespace-pre-line"
        cursor={false}
      />
    </motion.div>
  );
};