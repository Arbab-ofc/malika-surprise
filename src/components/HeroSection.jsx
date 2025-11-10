import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Gift, Cake } from 'lucide-react';

const HeroSection = ({ isBirthday }) => {
  const [showAge, setShowAge] = useState(false);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = [
    "Welcome to your special day!",
    "Happy Birthday my love!",
    "Today is all about you!",
    "Celebrating the amazing Malika!"
  ];

  useEffect(() => {
    const greetingTimer = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 4000);

    const ageTimer = setTimeout(() => {
      setShowAge(true);
    }, 2000);

    return () => {
      clearInterval(greetingTimer);
      clearTimeout(ageTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const heartVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: 360,
      transition: {
        duration: 1.5,
        ease: "backOut",
        type: "spring"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-0 md:items-center">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Floating decorative elements */}
        <div className="absolute -top-20 -left-20 floating">
          <Heart className="w-12 h-12 text-romantic-pink animate-heart-beat" fill="currentColor" />
        </div>
        <div className="absolute top-10 -right-20 floating-delayed">
          <Sparkles className="w-10 h-10 text-gold animate-pulse" fill="currentColor" />
        </div>
        <div className="absolute -bottom-10 left-20 floating-delayed-more">
          <Gift className="w-11 h-11 text-purple-gold animate-wiggle" fill="currentColor" />
        </div>

        {/* Dynamic greeting */}
        <motion.div
          key={currentGreeting}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="mb-6"
        >
          <p className="text-xl md:text-2xl text-pink-400 drop-shadow-lg font-romantic">
            {greetings[currentGreeting]}
          </p>
        </motion.div>

        {/* Main birthday message */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 mt-24 md:mt-8 text-pink-500 drop-shadow-2xl leading-tight"
        >
          Happy Birthday
        </motion.h1>

        {/* Malika's name with special animation */}
        <motion.div
          variants={heartVariants}
          className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-great-vibes text-pink-600 drop-shadow-2xl mb-4">
            Malika Nafees
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <Heart className="w-8 h-8 text-romantic-pink animate-heart-beat" fill="currentColor" />
            <Cake className="w-8 h-8 text-gold animate-wiggle" fill="currentColor" />
            <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
          </div>
        </motion.div>

        {/* Age reveal */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          {showAge ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="inline-block"
            >
              <div className="relative">
                <div className="text-4xl md:text-6xl font-bold text-purple-gold mb-4">
                  {isBirthday ? "🎉 Today You Turn 23! 🎂" : "🌟 Turning 23! 🌟"}
                </div>
                {isBirthday && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -inset-4 bg-gradient-to-r from-romantic-pink to-love-red rounded-full blur-xl opacity-30 animate-pulse"
                  />
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl md:text-5xl text-purple-gold"
            >
              A special surprise is coming... ✨
            </motion.div>
          )}
        </motion.div>

        {/* Special message */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-800 drop-shadow-lg mb-12 max-w-3xl mx-auto font-romantic"
        >
          The most beautiful person I've ever known,
          my heart belongs to you today and always. 💖
        </motion.p>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#love-letter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="romantic-button text-lg px-8 py-4"
          >
            💝 Read My Love Letter
          </motion.a>
          <motion.a
            href="#surprises"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-heart"
          >
            🎁 Discover Surprises
          </motion.a>
        </motion.div>

        {/* Birthday specific message */}
        {isBirthday && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12"
          >
            <p className="text-2xl text-love-red font-romantic animate-pulse">
              🎊 Happy Birthday on this special day! 🎊
            </p>
          </motion.div>
        )}
      </motion.div>

  
      </section>
  );
};

export default HeroSection;