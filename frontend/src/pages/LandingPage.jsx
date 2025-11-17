import { motion } from 'framer-motion';
import { UnlockButton } from '../components/UnlockButton';
import { FloatingHearts } from '../components/FloatingHearts';

export const LandingPage = ({ onUnlock }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-romantic)' }} />
      
      {/* Floating Hearts */}
      <FloatingHearts />

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl sm:text-7xl font-serif font-bold mb-4 gradient-text">
            A Special Surprise
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground">
            For the most wonderful person in my life
          </p>
        </motion.div>

        <UnlockButton onUnlock={onUnlock} />
      </div>
    </div>
  );
};