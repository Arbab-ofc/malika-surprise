import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Flower, TreePine, Sparkles, Star, MessageCircle, MapPin, Music, Gift } from 'lucide-react';

const MemoryGarden = () => {
  const [plantedMemories, setPlantedMemories] = useState(new Set());
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [isGrowing, setIsGrowing] = useState(new Set());

  const memories = [
    {
      id: 1,
      title: "The Day We Met",
      date: "November 11, 2018",
      description: "The moment my eyes met yours, I knew my life would never be the same. You walked into my world like a beautiful dream, and I never wanted to wake up.",
      flower: "🌸",
      color: "from-pink-400 to-rose-500",
      category: "first",
      icon: Heart
    },
    {
      id: 2,
      title: "Our First Dance",
      date: "15th May 2025",
      description: "Dancing with you felt like floating on clouds. In your arms, I found my home, my rhythm, my forever song.",
      flower: "🌺",
      color: "from-purple-400 to-pink-500",
      category: "moments",
      icon: Music
    },
    {
      id: 3,
      title: "First 'I Love You'",
      date: "January 2021",
      description: "Those three words changed everything. Saying 'I love you' to you was the easiest and most important thing I've ever done.",
      flower: "🌹",
      color: "from-red-400 to-pink-500",
      category: "milestones",
      icon: Heart
    },
    {
      id: 4,
      title: "Rainy Day Adventures",
      date: "July 22, 2024",
      description: "Getting caught in the rain with you, laughing as we ran for shelter. Even the storm couldn't dampen the brightness you bring to my life.",
      flower: "🌻",
      color: "from-yellow-400 to-orange-400",
      category: "adventures",
      icon: Sparkles
    },
    {
      id: 5,
      title: "Coffee Shop Dreams",
      date: "March 2021",
      description: "Countless hours in our favorite café, planning our future, dreaming our dreams, falling more in love with every sip.",
      flower: "🌷",
      color: "from-purple-400 to-indigo-500",
      category: "everyday",
      icon: MapPin
    },
    {
      id: 6,
      title: "Butterflies in My Heart",
      date: "Always",
      description: "Seven years later, you still give me butterflies. Every time I see you, my heart does a little dance just like the first day.",
      flower: "🦋",
      color: "from-blue-400 to-purple-500",
      category: "feelings",
      icon: Heart
    },
    {
      id: 7,
      title: "Midnight Conversations",
      date: "Always",
      description: "Talking until dawn about everything and nothing. In the quiet of the night, we built our universe of dreams and promises.",
      flower: "🌙",
      color: "from-indigo-400 to-purple-500",
      category: "intimate",
      icon: MessageCircle
    },
    {
      id: 8,
      title: "Promise of Forever",
      date: "November 11, 2025",
      description: "Seven incredible years and still counting. With you, I've found my forever, my always, my everything.",
      flower: "💝",
      color: "from-rose-400 to-pink-500",
      category: "future",
      icon: Star
    },
    {
      id: 9,
      title: "Sweet Kisses",
      date: "Always after 2-3 days",
      description: "Every few days, your sweet kisses remind me how lucky I am. Each one is a promise of love that never fades away.",
      flower: "💏",
      color: "from-pink-400 to-rose-500",
      category: "intimate",
      icon: Heart
    },
    {
      id: 10,
      title: "Welcome Hugs",
      date: "Always after coming from college",
      description: "Your warm hugs after college melt away all the stress of the day. In your arms, I find my peace, my comfort, my home.",
      flower: "🤗",
      color: "from-purple-400 to-pink-500",
      category: "everyday",
      icon: Heart
    },
    {
      id: 11,
      title: "Our Little Fights",
      date: "Always",
      description: "Even our fights are filled with love because they're followed by understanding and forgiveness. We're stronger together, always.",
      flower: "⚡",
      color: "from-orange-400 to-red-400",
      category: "challenges",
      icon: Heart
    },
    {
      id: 12,
      title: "Healthy Arguing",
      date: "Always",
      description: "Our arguments show we care enough to be honest. Every discussion brings us closer and makes our love grow stronger.",
      flower: "💭",
      color: "from-blue-400 to-purple-500",
      category: "growth",
      icon: MessageCircle
    }
  ];

  const gardenSpots = Array.from({ length: 12 }, (_, i) => i + 1);

  const plantMemory = (spotId) => {
    const memory = memories.find(m => !plantedMemories.has(m.id));
    if (memory && !isGrowing.has(spotId)) {
      setIsGrowing(prev => new Set([...prev, spotId]));

      setTimeout(() => {
        setPlantedMemories(prev => new Set([...prev, memory.id]));
        setIsGrowing(prev => {
          const newSet = new Set(prev);
          newSet.delete(spotId);
          return newSet;
        });
      }, 2000);
    }
  };

  const getMemoryForSpot = (spotId) => {
    const plantedArray = Array.from(plantedMemories);
    const index = gardenSpots.indexOf(spotId);
    return plantedArray[index] ? memories.find(m => m.id === plantedArray[index]) : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const flowerVariants = {
    seed: { scale: 0, rotate: 0 },
    growing: {
      scale: [0, 0.5, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    },
    bloom: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="surprises" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full blur-3xl animate-float-delayed-more"></div>
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
            Our Memory Garden
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Plant our memories and watch our love blossom 💕
          </p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Flower className="w-8 h-8 text-pink-500 animate-pulse" />
            <span className="text-2xl text-love-red font-bold">
              {plantedMemories.size}/{memories.length} Memories Planted
            </span>
            <Sparkles className="w-8 h-8 text-gold animate-bounce" />
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-morphism p-6 mb-12 text-center"
        >
          <h3 className="text-xl font-bold text-purple-gold mb-3">How to Plant Memories:</h3>
          <p className="text-rose-gold mb-4">Click on empty garden spots to plant beautiful memories of our journey together</p>
          <div className="flex justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-green-600"></div>
              <span className="text-purple-gold">Empty Spot</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
              <span className="text-purple-gold">Growing</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🌸</span>
              <span className="text-purple-gold">Blooming Memory</span>
            </div>
          </div>
        </motion.div>

        {/* Garden Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-4 gap-8 mb-12"
        >
          {gardenSpots.map((spotId) => {
            const memory = getMemoryForSpot(spotId);
            const growing = isGrowing.has(spotId);

            return (
              <motion.div
                key={spotId}
                variants={containerVariants}
                className="relative"
              >
                <motion.button
                  onClick={() => !memory && plantMemory(spotId)}
                  whileHover={!memory ? { scale: 1.05 } : { scale: 1.1 }}
                  whileTap={!memory ? { scale: 0.95 } : { scale: 1.05 }}
                  disabled={!!memory || growing}
                  className={`relative w-full h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    memory
                      ? 'cursor-pointer'
                      : growing
                      ? 'cursor-wait'
                      : 'cursor-pointer hover:scale-105'
                  }`}
                >
                  {growing ? (
                    <motion.div
                      variants={flowerVariants}
                      animate="growing"
                      className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    />
                  ) : memory ? (
                    <motion.div
                      variants={flowerVariants}
                      initial="bloom"
                      whileHover="hover"
                      onClick={() => setSelectedMemory(memory)}
                      className={`w-20 h-20 bg-gradient-to-r ${memory.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl`}
                    >
                      <span className="text-3xl">{memory.flower}</span>
                    </motion.div>
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-2 border-green-600 hover:border-green-700 transition-colors flex items-center justify-center">
                      <span className="text-white text-2xl">+</span>
                    </div>
                  )}
                </motion.button>

                {/* Memory Label */}
                {memory && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-2"
                  >
                    <p className="text-sm font-bold text-purple-gold">{memory.title}</p>
                    <p className="text-xs text-rose-gold">{memory.date}</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Progress Message */}
        {plantedMemories.size === memories.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mt-12"
          >
            <div className="glass-morphism p-8">
              <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold mb-4">
                🎉 Our Garden is Complete! 🎉
              </h3>
              <p className="text-lg text-rose-gold mb-4">
                Every beautiful memory of our love story has been planted in our garden
              </p>
              <div className="flex justify-center items-center space-x-4">
                <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
                <span className="text-xl text-love-red font-bold">Seven Years of Love in Full Bloom</span>
                <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Memory Detail Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="glass-morphism max-w-2xl w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedMemory(null)}
                className="absolute top-4 right-4 text-love-red hover:text-purple-gold transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Flower */}
              <div className="text-center mb-6">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block"
                >
                  <span className="text-6xl">{selectedMemory.flower}</span>
                </motion.div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-purple-gold mb-2">{selectedMemory.title}</h3>
              <p className="text-sm text-rose-gold mb-4">{selectedMemory.date}</p>
              <p className="text-gray-900 mb-6 leading-relaxed">{selectedMemory.description}</p>

              {/* Footer */}
              <div className="text-center">
                <p className="text-lg text-love-red font-romantic">
                  "This memory will forever bloom in our garden of love 💕"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryGarden;