import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Sparkles, HeartHandshake } from 'lucide-react';

const NicknamesCarousel = () => {
  const nicknames = [
    { name: 'Gullaa', emoji: '🌸', description: 'My beautiful flower' },
    { name: 'Pappaaa', emoji: '💕', description: 'Sweet as sugar' },
    { name: 'Mallu', emoji: '🌟', description: 'My shining star' },
    { name: 'Aleenu', emoji: '🦋', description: 'Elegant and graceful' },
    { name: 'Baby', emoji: '👶', description: 'My precious one' },
    { name: 'Bebo', emoji: '😊', description: 'Always smiling' },
    { name: 'Motu', emoji: '🍯', description: 'Sweet and lovely' },
    { name: 'Cutieee', emoji: '✨', description: 'Simply adorable' },
    { name: 'Natkuuu', emoji: '🎭', description: 'Playful and fun' },
    { name: 'Kalluu', emoji: '🌙', description: 'My moonlight' },
    { name: 'Gandii', emoji: '💎', description: 'Pure hearted' },
    { name: 'Naatu Pilla', emoji: '🌺', description: 'My village beauty' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % nicknames.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, nicknames.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + nicknames.length) % nicknames.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % nicknames.length);
  };

  const currentNickname = nicknames[currentIndex];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: 90 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      rotateY: -90,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-romantic-pink rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-gold rounded-full blur-3xl animate-float-delayed"></div>
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
            All My Names For You
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Every name represents a different aspect of your beautiful soul 💕
          </p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Sparkles className="w-8 h-8 text-gold animate-pulse" fill="currentColor" />
            <span className="text-2xl text-love-red font-bold">{nicknames.length} Special Names</span>
            <Sparkles className="w-8 h-8 text-gold animate-pulse" fill="currentColor" />
          </div>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full max-w-2xl mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="glass-morphism p-12 text-center group"
              >
                {/* Background glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-romantic-pink/30 to-purple-gold/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Heart decorations */}
                <div className="absolute top-4 left-4 floating">
                  <Heart className="w-6 h-6 text-romantic-pink animate-heart-beat" fill="currentColor" />
                </div>
                <div className="absolute top-4 right-4 floating-delayed">
                  <Star className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
                </div>
                <div className="absolute bottom-4 left-4 floating-delayed-more">
                  <HeartHandshake className="w-6 h-6 text-purple-gold animate-wiggle" fill="currentColor" />
                </div>

                {/* Main content */}
                <div className="relative z-10">
                  {/* Emoji display */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-8xl mb-6"
                  >
                    {currentNickname.emoji}
                  </motion.div>

                  {/* Nickname */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-love-red to-purple-gold bg-clip-text text-transparent mb-4 py-4 leading-relaxed"
                  >
                    {currentNickname.name}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-rose-gold font-romantic mb-6"
                  >
                    {currentNickname.description}
                  </motion.p>

                  {/* Special message */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center items-center space-x-2"
                  >
                    <Heart className="w-5 h-5 text-love-red animate-pulse" fill="currentColor" />
                    <span className="text-lg text-purple-gold">
                      Each name holds a special place in my heart
                    </span>
                    <Heart className="w-5 h-5 text-love-red animate-pulse" fill="currentColor" />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center space-x-6 mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToPrevious}
              className="bg-gradient-to-r from-romantic-pink to-love-red text-white p-3 rounded-full shadow-lg hover:shadow-heart transition-shadow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="romantic-button text-lg px-6 py-3"
            >
              {isPlaying ? '⏸️ Pause' : '▶️ Play'}
            </button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={goToNext}
              className="bg-gradient-to-r from-romantic-pink to-love-red text-white p-3 rounded-full shadow-lg hover:shadow-heart transition-shadow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Progress dots */}
          <div className="flex space-x-2 mb-8">
            {nicknames.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-romantic-pink to-love-red'
                    : 'w-2 bg-romantic-pink/50 hover:bg-romantic-pink/75'
                }`}
              />
            ))}
          </div>

          {/* Nicknames grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto"
          >
            {nicknames.map((nickname, index) => (
              <motion.button
                key={nickname.name}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentIndex(index)}
                className={`glass-morphism p-4 text-center group transition-all duration-300 ${
                  index === currentIndex
                    ? 'ring-2 ring-love-red shadow-heart'
                    : 'hover:ring-2 hover:ring-purple-gold'
                }`}
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform">
                  {nickname.emoji}
                </div>
                <div className="text-sm font-bold text-purple-gold group-hover:text-love-red transition-colors">
                  {nickname.name}
                </div>
                <div className="text-xs text-rose-gold opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                  {nickname.description}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Special message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-purple-gold font-romantic italic">
              "No matter what I call you, you'll always be the one who stole my heart and made my life complete."
            </p>
            <div className="flex justify-center items-center space-x-2 mt-4">
              <Heart className="w-6 h-6 text-love-red animate-heart-beat" fill="currentColor" />
              <span className="text-xl text-love-red font-bold">Forever My Love</span>
              <Heart className="w-6 h-6 text-love-red animate-heart-beat" fill="currentColor" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NicknamesCarousel;