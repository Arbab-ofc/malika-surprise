import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Star, Calendar, Gift, Sparkles, Camera, Music, MapPin, Sun, Moon } from 'lucide-react';

const MemoryTimeline = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const memories = [
    {
      year: 2018,
      title: "The Beginning",
      date: "November 11, 2018",
      description: "The day our beautiful journey began. A moment that changed my life forever.",
      icon: Heart,
      color: "from-romantic-pink to-love-red",
      memories: [
        "First meeting that felt like destiny",
        "Instant connection between our hearts",
        "The start of something magical"
      ]
    },
    {
      year: 2019,
      title: "Growing Together",
      date: "2019",
      description: "A year of learning, growing, and falling deeper in love every day.",
      icon: Sparkles,
      color: "from-purple-gold to-champagne",
      memories: [
        "Countless conversations that lasted all night",
        "Discovering our shared dreams and goals",
        "Building a foundation of trust and understanding"
      ]
    },
    {
      year: 2020,
      title: "Through Challenges",
      date: "2020",
      description: "Standing strong together through difficult times, our love only grew stronger.",
      icon: Sun,
      color: "from-gold to-rose-gold",
      memories: [
        "Supporting each other through uncertainty",
        "Finding joy in simple moments together",
        "Realizing we're stronger as a team"
      ]
    },
    {
      year: 2021,
      title: "Deeper Love",
      date: "2021",
      description: "Our bond deepened in ways I never imagined possible.",
      icon: Star,
      color: "from-lavender to-purple-gold",
      memories: [
        "Creating countless precious memories",
        "Learning to love each other more deeply",
        "Becoming each other's safe haven"
      ]
    },
    {
      year: 2022,
      title: "Building Dreams",
      date: "2022",
      description: "Planning our future together with hope and excitement.",
      icon: Calendar,
      color: "from-soft-pink to-purple-gold",
      memories: [
        "Discussing our dreams for the future",
        "Making plans and setting goals together",
        "Celebrating every milestone along the way"
      ]
    },
    {
      year: 2023,
      title: "Six Years Strong",
      date: "2023",
      description: "Six incredible years of love, laughter, and endless happiness.",
      icon: Gift,
      color: "from-love-red to-gold",
      memories: [
        "Six years of beautiful memories",
        "Growing more in love each day",
        "Creating our perfect world together"
      ]
    },
    {
      year: 2024,
      title: "Still Growing",
      date: "2024",
      description: "Our love continues to evolve and flourish with each passing day.",
      icon: Music,
      color: "from-romantic-pink to-purple-gold",
      memories: [
        "New adventures and experiences together",
        "Deepening our emotional connection",
        "Creating even more beautiful memories"
      ]
    },
    {
      year: 2025,
      title: "Seven Years of Love",
      date: "November 11, 2025",
      description: "Seven amazing years together and still counting... forever to go!",
      icon: Heart,
      color: "from-love-red to-rose-gold",
      memories: [
        "Seven years of pure happiness",
        "Looking forward to forever together",
        "Still as in love as day one"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-48 h-48 bg-romantic-pink rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-56 h-56 bg-purple-gold rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-love-red rounded-full blur-3xl animate-float-delayed-more"></div>
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
            Our Beautiful Timeline
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Seven years of memories, love, and happiness 💕
          </p>
          <div className="flex justify-center items-center space-x-4">
            <Calendar className="w-8 h-8 text-gold animate-pulse" />
            <span className="text-2xl text-love-red font-bold">2018 - 2025</span>
            <Calendar className="w-8 h-8 text-gold animate-pulse" />
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-romantic-pink via-purple-gold to-love-red md:left-1/2 md:transform md:-translate-x-1/2 left-8 transform-none"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.year}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMemory(memory)}
                  className={`w-full md:w-5/12 glass-morphism p-6 cursor-pointer group ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  {/* Background hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${memory.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>

                  {/* Year badge */}
                  <div className={`inline-block mb-3 px-4 py-2 bg-gradient-to-r ${memory.color} text-white rounded-full font-bold`}>
                    {memory.year}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center mb-3">
                    <memory.icon className={`w-6 h-6 mr-2 text-${memory.color.split('-')[1]}-gold`} fill="currentColor" />
                    <h3 className="text-2xl font-bold text-purple-gold">{memory.title}</h3>
                  </div>

                  {/* Date */}
                  <p className="text-sm text-rose-gold mb-2">{memory.date}</p>

                  {/* Description */}
                  <p className="text-gray-900 group-hover:text-black transition-colors mb-4">
                    {memory.description}
                  </p>

                  {/* Call to action */}
                  <p className="text-sm text-purple-gold font-romantic group-hover:text-love-red transition-colors">
                    Click to explore memories 💝
                  </p>
                </motion.div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-love-red rounded-full z-10 group-hover:scale-125 transition-transform md:left-1/2 md:transform md:-translate-x-1/2 left-4 transform-none">
                  <div className={`absolute inset-1 bg-gradient-to-r ${memory.color} rounded-full`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Selected memory modal */}
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

                {/* Header */}
                <div className={`inline-block mb-4 px-4 py-2 bg-gradient-to-r ${selectedMemory.color} text-white rounded-full font-bold`}>
                  {selectedMemory.year}
                </div>

                <div className="flex items-center mb-4">
                  <selectedMemory.icon className="w-8 h-8 mr-3 text-purple-gold" fill="currentColor" />
                  <h3 className="text-3xl font-bold text-rose-gold">{selectedMemory.title}</h3>
                </div>

                <p className="text-lg text-purple-gold mb-6">{selectedMemory.date}</p>
                <p className="text-gray-900 drop-shadow-lg mb-6">{selectedMemory.description}</p>

                {/* Memory list */}
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-purple-gold mb-3">Special Moments:</h4>
                  {selectedMemory.memories.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-900"
                    >
                      <Heart className="w-4 h-4 mr-2 text-romantic-pink flex-shrink-0" fill="currentColor" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                  <p className="text-lg text-love-red font-romantic">
                    "Every memory with you is a treasure I'll cherish forever 💕"
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Special message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism max-w-4xl mx-auto p-8">
            <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold mb-4">
              Thank You for Seven Amazing Years
            </h3>
            <p className="text-lg text-rose-gold mb-4">
              Every year with you has been better than the last. Here's to many more beautiful years ahead!
            </p>
            <div className="flex justify-center items-center space-x-4 mt-6">
              <Moon className="w-8 h-8 text-purple-gold animate-pulse" fill="currentColor" />
              <span className="text-2xl text-love-red font-bold">Forever Yours</span>
              <Sun className="w-8 h-8 text-gold animate-pulse" fill="currentColor" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MemoryTimeline;