import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

export const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Personal photos with captions
  const photos = [
    {
      url: "/images/1.jpg",
      caption: 'En cutieee wifeyy'
    },
    {
      url: "/images/2.jpg",
      caption: 'Should take pics like these more!'
    },
    {
      url: "/images/3.jpg",
      caption: 'Married Couple vibes ( En chellam wifeyyy)'
    },
    {
      url: "/images/4.jpg",
      caption: 'The cheek Kiss '
    }
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="w-full max-w-4xl mx-auto px-4"
    >
      <div className="relative">
        {/* Main Image */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-white text-xl font-serif text-center"
                >
                  {photos[currentIndex].caption}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <Button
          onClick={prev}
          size="icon"
          variant="secondary"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={next}
          size="icon"
          variant="secondary"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Caption below carousel */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-8 text-muted-foreground italic text-lg"
      >
        "Every picture is a memory I never want to forget."
      </motion.p>
    </motion.div>
  );
};