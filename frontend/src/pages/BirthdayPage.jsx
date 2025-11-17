import { motion } from 'framer-motion';
import { FloatingHearts } from '../components/FloatingHearts';
import { TypewriterText } from '../components/TypewriterText';
import { PhotoCarousel } from '../components/PhotoCarousel';
import { Heart } from 'lucide-react';

export const BirthdayPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-dreamy)' }} />
      
      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 py-12 sm:py-20">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 sm:w-20 sm:h-20 fill-primary text-primary mx-auto" />
          </motion.div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold gradient-text mb-4">
            Happy Birthday, My Love ❤️
          </h1>
        </motion.div>

        {/* Typewriter Message */}
        <div className="mb-16 sm:mb-24">
          <TypewriterText />
        </div>

        {/* Photo Carousel */}
        <div className="mb-16 sm:mb-24">
          <PhotoCarousel />
        </div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center px-4 mb-16"
        >
          <div className="max-w-2xl mx-auto glass-card rounded-3xl p-8 sm:p-12 shadow-2xl">
            <p className="text-xl sm:text-2xl font-serif text-foreground leading-relaxed">
              Every moment with you feels like magic.
              <br />
              I love you endlessly. ❤️
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center pb-8 px-4"
        >
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by <span className="font-semibold">Sharukesh</span>
          </p>
        </motion.footer>
      </div>
    </div>
  );
};