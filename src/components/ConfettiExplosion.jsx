import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const ConfettiExplosion = ({ trigger = true }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (!trigger || !isVisible) return;

    // Create multiple confetti bursts
    const createConfetti = async () => {
      // Main explosion
      await confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6, x: 0.5 },
        colors: [
          '#FFB6C1', // romantic-pink
          '#FF69B4', // love-red
          '#8B7AB8', // purple-gold
          '#FFD700', // gold
          '#F4C2C2', // baby-pink
          '#E6E6FA', // lavender
          '#F7E7CE', // champagne
        ],
        gravity: 0.8,
        drift: 0.2,
        ticks: 200,
        shapes: ['circle', 'square', 'star'],
      });

      // Secondary burst from left
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5, x: 0.2 },
          colors: ['#FFB6C1', '#FF69B4', '#8B7AB8'],
          angle: 45,
          startVelocity: 30,
        });
      }, 200);

      // Secondary burst from right
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5, x: 0.8 },
          colors: ['#FFD700', '#F4C2C2', '#E6E6FA'],
          angle: 135,
          startVelocity: 30,
        });
      }, 400);

      // Top burst
      setTimeout(() => {
        confetti({
          particleCount: 75,
          spread: 90,
          origin: { y: 0.3, x: 0.5 },
          colors: ['#FFD700', '#FFB6C1', '#F7E7CE'],
          gravity: 0.5,
        });
      }, 600);

      // Bottom burst
      setTimeout(() => {
        confetti({
          particleCount: 60,
          spread: 100,
          origin: { y: 0.9, x: 0.5 },
          colors: ['#8B7AB8', '#FF69B4', '#E6E6FA'],
          angle: 270,
          startVelocity: 40,
          gravity: 0.6,
        });
      }, 800);
    };

    createConfetti();

    // Hide the component after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [trigger, isVisible]);

  // Create floating particles for additional effect
  useEffect(() => {
    if (!trigger || !isVisible) return;

    const colors = [
      'bg-romantic-pink',
      'bg-love-red',
      'bg-purple-gold',
      'bg-gold',
      'bg-baby-pink',
      'bg-lavender'
    ];

    const shapes = ['rounded-full', 'rounded-sm', 'rounded-lg'];

    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2
    }));

    setParticles(newParticles);

    // Clear particles after animation
    const cleanupTimer = setTimeout(() => {
      setParticles([]);
    }, 5000);

    return () => clearTimeout(cleanupTimer);
  }, [trigger, isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 pointer-events-none z-50"
        >
          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: [`${particle.x}%`, `${particle.x + (Math.random() - 0.5) * 20}%`],
                y: [`${particle.y}%`, `${particle.y - 30}%`],
                scale: [0, 1, 0.5],
                opacity: [0, 0.8, 0],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                ease: 'easeOut'
              }}
              className={`absolute ${particle.color} ${particle.shape}`}
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`
              }}
            />
          ))}

          {/* Central glow effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 2, 3], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-romantic-pink/30 to-love-red/30 rounded-full blur-3xl"
          />

          {/* Animated hearts */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="text-8xl"
            >
              💕
            </motion.div>
          </motion.div>

          {/* Side sparkles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 0.8],
                opacity: [0, 1, 0],
                rotate: [0, Math.random() * 360]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                ease: 'easeOut'
              }}
              className="absolute text-4xl"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + Math.random() * 80}%`
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Ring effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0.6 }}
            animate={{ scale: [0, 4], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-love-red rounded-full"
          />

          {/* Multiple rings */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`ring-${i}`}
              initial={{ scale: 0, opacity: 0.4 }}
              animate={{ scale: [0, 6 + i * 2], opacity: [0.4, 0] }}
              transition={{
                duration: 2 + i * 0.5,
                delay: i * 0.3,
                ease: 'easeOut'
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-purple-gold rounded-full"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`
              }}
            />
          ))}

          {/* Floating stars */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              initial={{
                x: '50%',
                y: '50%',
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: `${20 + Math.random() * 60}%`,
                y: `${10 + Math.random() * 80}%`,
                scale: [0, 1, 0.5],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                delay: Math.random() * 2,
                ease: 'easeOut'
              }}
              className="absolute text-3xl"
            >
              ⭐
            </motion.div>
          ))}

          {/* Welcome message */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, type: 'spring', stiffness: 100 }}
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-romantic-pink via-love-red to-purple-gold bg-clip-text text-transparent">
              Welcome Malika!
            </h1>
            <p className="text-xl md:text-2xl text-rose-gold mt-2">
              Your special day begins now 🎉
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConfettiExplosion;