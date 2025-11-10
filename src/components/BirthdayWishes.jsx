import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cake, Gift, Sparkles, Heart, Star, Music, PartyPopper } from 'lucide-react';

const BirthdayWishes = () => {
  const [candlesLit, setCandlesLit] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  const wishes = [
    "May all your dreams come true on this special day! 🌟",
    "You deserve all the happiness in the world! 💕",
    "Here's to another year of amazing adventures together! 🎊",
    "May your birthday be as sweet as you are! 🍯",
    "Wishing you endless joy and laughter! 😊",
    "You make every day feel like a celebration! 🎉",
    "Thank you for being the best part of my life! 💖",
    "May all your birthday wishes come true! ⭐",
    "You're getting more beautiful with each passing year! 🌸",
    "Cheers to you and the amazing person you are! 🥂"
  ];

  const age = 23; // Malika is turning 23

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
      lightCandles();
    }, 1000);

    const wishTimer = setInterval(() => {
      setCurrentWish((prev) => (prev + 1) % wishes.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(wishTimer);
    };
  }, []);

  const lightCandles = () => {
    const interval = setInterval(() => {
      setCandlesLit((prev) => {
        if (prev >= age) {
          clearInterval(interval);
          setTimeout(() => setShowMessage(true), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
  };

  const blowCandles = () => {
    setCandlesLit(0);
    setShowMessage(false);
    setTimeout(() => {
      lightCandles();
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  };

  const candleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const flameVariants = {
    lit: {
      scale: [1, 1.2, 1],
      opacity: 1,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    unlit: { scale: 0, opacity: 0 }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-48 h-48 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-romantic-pink rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-purple-gold rounded-full blur-3xl animate-float-delayed-more"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-great-vibes text-purple-gold mb-6">
            Birthday Wishes
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Making your special day magical ✨
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Cake className="w-8 h-8 text-gold animate-pulse" />
            <span className="text-2xl text-love-red font-bold">Happy 23rd Birthday!</span>
            <PartyPopper className="w-8 h-8 text-gold animate-bounce" />
          </div>
        </motion.div>

        {/* Birthday cake */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          {/* Cake base */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Cake layers */}
            <div className="relative">
              {/* Bottom layer */}
              <div className="w-64 h-20 bg-gradient-to-r from-romantic-pink to-blush rounded-lg shadow-xl">
                <div className="absolute inset-2 bg-white/20 rounded-md"></div>
              </div>

              {/* Middle layer */}
              <div className="w-48 h-16 bg-gradient-to-r from-purple-gold to-lavender rounded-lg shadow-xl -mt-8 mx-auto">
                <div className="absolute inset-2 bg-white/20 rounded-md"></div>
              </div>

              {/* Top layer */}
              <div className="w-32 h-12 bg-gradient-to-r from-gold to-champagne rounded-lg shadow-xl -mt-6 mx-auto">
                <div className="absolute inset-1 bg-white/20 rounded-md"></div>
              </div>

              {/* Candles */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {Array.from({ length: age }).map((_, index) => (
                  <motion.div
                    key={index}
                    variants={candleVariants}
                    custom={index}
                    className="relative"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {/* Candle body */}
                    <div className="w-2 h-8 bg-gradient-to-t from-pink-200 to-white rounded-full shadow-md"></div>

                    {/* Flame */}
                    <motion.div
                      variants={flameVariants}
                      animate={index < candlesLit ? "lit" : "unlit"}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    >
                      <div className="relative">
                        <div className="w-3 h-4 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full blur-sm"></div>
                        <div className="absolute inset-0 w-3 h-4 bg-gradient-to-t from-red-400 to-orange-300 rounded-full"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Decorations */}
              <div className="absolute -inset-4 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Sparkles className="w-6 h-6 text-gold opacity-60" fill="currentColor" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Heart className="w-6 h-6 text-love-red opacity-60 animate-pulse" fill="currentColor" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Cake base plate */}
          <div className="w-80 h-4 bg-gradient-to-r from-purple-gold/40 to-love-red/40 rounded-full mt-4"></div>

          {/* Blow candles button */}
          {candlesLit === age && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={blowCandles}
              className="romantic-button mt-8 text-lg px-6 py-3"
            >
              🎂 Make a Wish & Blow Candles!
            </motion.button>
          )}

          {/* Special message */}
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="mt-8 glass-morphism p-6 max-w-md text-center"
            >
              <Star className="w-12 h-12 text-gold mx-auto mb-4 animate-pulse" fill="currentColor" />
              <h3 className="text-2xl font-bold text-purple-gold mb-3">
                Make a Wish!
              </h3>
              <p className="text-lg text-rose-gold mb-4">
                Close your eyes, make your special wish, and blow out the candles!
              </p>
              <div className="flex justify-center space-x-2">
                <Heart className="w-6 h-6 text-love-red animate-heart-beat" fill="currentColor" />
                <span className="text-lg text-love-red font-bold">Your wish will come true!</span>
                <Heart className="w-6 h-6 text-love-red animate-heart-beat" fill="currentColor" />
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Birthday wishes carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="glass-morphism p-8 mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold text-center mb-8">
            Special Birthday Wishes Just For You 💝
          </h3>

          <div className="text-center mb-8">
            <motion.div
              key={currentWish}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-rose-gold font-romantic min-h-[60px] flex items-center justify-center"
            >
              {wishes[currentWish]}
            </motion.div>
          </div>

          {/* Wish dots */}
          <div className="flex justify-center space-x-2">
            {wishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentWish(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentWish
                    ? 'w-8 bg-gradient-to-r from-romantic-pink to-love-red'
                    : 'w-2 bg-romantic-pink/50 hover:bg-romantic-pink/75'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Gift boxes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Gift, title: "Love", description: "The greatest gift I can give you", color: "from-romantic-pink to-love-red" },
            { icon: Heart, title: "Happiness", description: "May your life be filled with joy", color: "from-purple-gold to-lavender" },
            { icon: Star, title: "Dreams", description: "May all your dreams come true", color: "from-gold to-champagne" }
          ].map((gift, index) => (
            <motion.div
              key={gift.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.6
                  }
                }
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-morphism p-8 text-center group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${gift.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
              <gift.icon className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${gift.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} />
              <h3 className="text-2xl font-bold text-purple-gold mb-2">{gift.title}</h3>
              <p className="text-rose-gold group-hover:text-purple-gold transition-colors">
                {gift.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Final birthday message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-morphism max-w-3xl mx-auto p-8">
            <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold mb-4">
              Happy Birthday to the Love of My Life!
            </h3>
            <p className="text-lg text-rose-gold mb-6">
              Today we celebrate not just your birthday, but the incredible person you are
              and the beautiful life we're building together. May this year bring you
              endless joy, success, and all the love you deserve.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <Music className="w-8 h-8 text-gold animate-pulse" />
              <span className="text-2xl text-love-red font-bold">🎂 Happy Birthday Malika! 🎊</span>
              <PartyPopper className="w-8 h-8 text-gold animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BirthdayWishes;