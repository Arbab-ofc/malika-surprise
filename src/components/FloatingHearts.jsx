import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    // Create floating hearts
    const createHeart = () => {
      const newHeart = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: Math.random() * 20 + 15,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5
      };
      setHearts(prev => [...prev, newHeart]);

      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    };

    // Create sparkles
    const createSparkle = () => {
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        size: Math.random() * 15 + 10,
        duration: Math.random() * 8 + 12
      };
      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, newSparkle.duration * 1000);
    };

    // Create initial hearts and sparkles
    const initialHearts = Array.from({ length: 6 }, (_, i) => ({
      id: `initial-heart-${i}`,
      x: Math.random() * 100,
      size: Math.random() * 20 + 15,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5
    }));

    const initialSparkles = Array.from({ length: 4 }, (_, i) => ({
      id: `initial-sparkle-${i}`,
      x: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 8 + 12
    }));

    setHearts(initialHearts);
    setSparkles(initialSparkles);

    // Continuously create new hearts and sparkles
    const heartInterval = setInterval(createHeart, 3000);
    const sparkleInterval = setInterval(createSparkle, 4000);

    return () => {
      clearInterval(heartInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  const heartColors = [
    'text-romantic-pink',
    'text-love-red',
    'text-rose-gold',
    'text-purple-gold',
    'text-gold',
    'text-blush'
  ];

  const sparkleColors = [
    'text-gold',
    'text-purple-gold',
    'text-champagne',
    'text-soft-pink'
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Floating hearts */}
      {hearts.map((heart) => {
        const Icon = Math.random() > 0.3 ? Heart : Star;
        const colorClass = heartColors[Math.floor(Math.random() * heartColors.length)];

        return (
          <motion.div
            key={heart.id}
            initial={{
              x: `${heart.x}vw`,
              y: '100vh',
              rotate: 0,
              opacity: 0
            }}
            animate={{
              x: `${heart.x}vw`,
              y: '-20vh',
              rotate: [0, 360],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: 'linear',
              repeat: Infinity
            }}
            className="absolute"
          >
            <Icon
              className={`${colorClass} drop-shadow-lg`}
              style={{
                width: `${heart.size}px`,
                height: `${heart.size}px`
              }}
              fill={Math.random() > 0.5 ? 'currentColor' : 'none'}
              strokeWidth={Math.random() > 0.5 ? 2 : 0}
            />
          </motion.div>
        );
      })}

      {/* Floating sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{
            x: `${sparkle.x}vw`,
            y: '100vh',
            scale: 0,
            opacity: 0
          }}
          animate={{
            x: `${sparkle.x}vw`,
            y: '-20vh',
            scale: [0, 1, 1.5, 0],
            opacity: [0, 1, 1, 0],
            rotate: [0, 180]
          }}
          transition={{
            duration: sparkle.duration,
            ease: 'easeInOut',
            repeat: Infinity
          }}
          className="absolute"
        >
          <Sparkles
            className={`${sparkleColors[Math.floor(Math.random() * sparkleColors.length)]} drop-shadow-md`}
            style={{
              width: `${sparkle.size}px`,
              height: `${sparkle.size}px`
            }}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Static background decorations */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute top-20 right-20 opacity-30"
      >
        <Heart className="w-8 h-8 text-romantic-pink" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute bottom-40 left-20 opacity-30"
      >
        <Star className="w-10 h-10 text-gold" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/3 right-1/3 opacity-30"
      >
        <Sparkles className="w-12 h-12 text-purple-gold" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-2/3 left-1/4 opacity-30"
      >
        <Heart className="w-6 h-6 text-love-red" fill="currentColor" />
      </motion.div>

      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-1/4 right-1/4 opacity-30"
      >
        <Star className="w-8 h-8 text-rose-gold" fill="currentColor" />
      </motion.div>
    </div>
  );
};

export default FloatingHearts;