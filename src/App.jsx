import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from './components/HeroSection';
import LoveCounter from './components/LoveCounter';
import NicknamesCarousel from './components/NicknamesCarousel';
import MemoryTimeline from './components/MemoryTimeline';
import LoveLetter from './components/LoveLetter';
import BirthdayWishes from './components/BirthdayWishes';
import MemoryGarden from './components/MemoryGarden';
import Countdown from './components/Countdown';
import FloatingHearts from './components/FloatingHearts';
import ConfettiExplosion from './components/ConfettiExplosion';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [isBirthday, setIsBirthday] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const checkBirthday = () => {
      const today = new Date();
      const birthday = new Date(today.getFullYear(), 10, 11); // November 11th (month is 0-indexed)

      if (today.getMonth() === 10 && today.getDate() === 11) {
        setIsBirthday(true);
      }
    };

    checkBirthday();

    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-soft-pink via-lavender to-champagne overflow-x-hidden">
      {/* Floating hearts background effect */}
      <FloatingHearts />

      {/* Confetti explosion on load */}
      <AnimatePresence>
        {showConfetti && <ConfettiExplosion />}
      </AnimatePresence>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <HeroSection isBirthday={isBirthday} />
      </section>

      {/* Countdown or Celebration */}
      <section id="countdown">
        <Countdown isBirthday={isBirthday} />
      </section>

      {/* Love Counter */}
      <section id="love-counter">
        <LoveCounter />
      </section>

      {/* Nicknames Carousel */}
      <section id="nicknames">
        <NicknamesCarousel />
      </section>

      {/* Memory Timeline */}
      <section id="timeline">
        <MemoryTimeline />
      </section>

      {/* Love Letter Section */}
      <section id="love-letter">
        <LoveLetter />
      </section>

      {/* Birthday Wishes */}
      <section id="wishes">
        <BirthdayWishes />
      </section>

      {/* Memory Garden */}
      <section id="surprises">
        <MemoryGarden />
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 text-center bg-gradient-to-r from-purple-gold/20 to-love-red/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-morphism mx-auto max-w-6xl p-6 md:p-8"
        >
          <div className="space-y-3 md:space-y-4">
            <p className="text-xl md:text-2xl font-romantic text-rose-gold">
              Made with endless love for my beautiful Malika 💕
            </p>
            <p className="text-lg md:text-xl text-purple-gold">
              Forever yours, always and forever 💖
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-base md:text-lg text-purple-gold font-romantic">
              <span>Arbab Malika Forever In Sha Allah 🤲</span>
              <span className="hidden sm:inline">|</span>
              <span>Arina In Sha Allah Forever 👶</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-base md:text-lg text-rose-gold font-romantic">
              <span>Mlw In Sha Allah Forever 💍</span>
              <span className="hidden sm:inline">|</span>
              <span>Created & Designed by your Man - Arbab 💻❤️</span>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
