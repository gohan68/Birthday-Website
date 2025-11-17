import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "@/App.css";
import { LandingPage } from "./pages/LandingPage";
import { BirthdayPage } from "./pages/BirthdayPage";
import { BackgroundMusic } from "./components/BackgroundMusic";

function App() {
  const [unlocked, setUnlocked] = useState(false);
  const [showBirthday, setShowBirthday] = useState(false);

  const handleUnlock = () => {
    // Start music
    const audio = document.querySelector("audio");
    if (audio) {
      audio.volume = 0.6;
      audio.play().catch(err => console.log("Audio play prevented:", err));
    }

    // Transition to birthday page
    setTimeout(() => {
      setUnlocked(true);
      setShowBirthday(true);
    }, 500);
  };

  return (
    <div className="App relative">
      <AnimatePresence mode="wait">
        {!showBirthday ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
          >
            <LandingPage onUnlock={handleUnlock} />
          </motion.div>
        ) : (
          <motion.div
            key="birthday"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <BirthdayPage />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Music Control */}
      <BackgroundMusic autoPlay={unlocked} />
    </div>
  );
}

export default App;