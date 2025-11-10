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
      <footer className="relative py-8 text-center bg-gradient-to-r from-purple-gold/20 to-love-red/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-morphism mx-auto max-w-4xl p-6"
        >
          <p className="text-2xl font-romantic text-rose-gold">
            Made with endless love for my beautiful Malika 💕
          </p>
          <p className="text-lg text-purple-gold mt-2">
            Forever yours, always and forever 💖
          </p>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
