import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Heart, Star, Gift, Sparkles, Cake } from 'lucide-react';

const Countdown = ({ isBirthday }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (isBirthday) {
      // Show celebration message immediately if it's the birthday
      setTimeout(() => setShowCelebration(true), 1000);
      return;
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const currentYear = now.getFullYear();

      // Set target to November 11th of current year or next year
      let targetDate = new Date(currentYear, 10, 11); // November 11th (month is 0-indexed)

      // If today's date is past November 11th, set target to next year
      if (now > targetDate) {
        targetDate = new Date(currentYear + 1, 10, 11);
      }

      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [isBirthday]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, icon: Calendar },
    { label: 'Hours', value: timeLeft.hours, icon: Clock },
    { label: 'Minutes', value: timeLeft.minutes, icon: Clock },
    { label: 'Seconds', value: timeLeft.seconds, icon: Heart }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const celebrationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-romantic-pink rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Countdown section */}
        {!isBirthday && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-5xl font-great-vibes text-purple-gold mb-4">
                Countdown to Your Special Day
              </h2>
              <p className="text-xl text-rose-gold font-romantic mb-6">
                The wait is almost over! 💝
              </p>
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Calendar className="w-8 h-8 text-gold animate-pulse" />
                <span className="text-2xl text-love-red font-bold">November 11th</span>
                <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
              </div>
            </motion.div>

            {/* Time display */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
              {timeUnits.map((unit, index) => (
                <motion.div
                  key={unit.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism p-4 md:p-6 text-center group"
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-romantic-pink/20 to-purple-gold/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <unit.icon className="w-8 h-8 mx-auto mb-3 text-purple-gold group-hover:animate-pulse" />

                  {/* Time value */}
                  <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-2 group-hover:scale-110 transition-transform">
                    {String(unit.value).padStart(2, '0')}
                  </div>

                  {/* Label */}
                  <div className="text-sm md:text-base text-purple-gold">
                    {unit.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Excitement message */}
            <motion.div
              variants={itemVariants}
              className="glass-morphism p-6 max-w-2xl mx-auto"
            >
              <Sparkles className="w-10 h-10 text-gold mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold mb-4">
                Getting Closer to Celebrating You! 🎉
              </h3>
              <p className="text-lg text-rose-gold mb-4">
                Every second that passes brings us closer to celebrating the most wonderful person I know.
                I can't wait to make your birthday absolutely magical!
              </p>
              <div className="flex justify-center items-center space-x-3">
                <Heart className="w-6 h-6 text-love-red animate-pulse" fill="currentColor" />
                <span className="text-xl text-love-red font-bold">The countdown is on!</span>
                <Heart className="w-6 h-6 text-love-red animate-pulse" fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Celebration section (for birthday day) */}
        {isBirthday && showCelebration && (
          <motion.div
            variants={celebrationVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            {/* Animated background */}
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 md:w-80 md:h-80 border-4 border-gold/30 rounded-full"
                ></motion.div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 md:w-64 md:h-64 border-4 border-romantic-pink/30 rounded-full"
                ></motion.div>
              </div>
              <div className="relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl md:text-8xl"
                >
                  🎂
                </motion.div>
              </div>
            </div>

            {/* Main celebration message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-morphism p-8 max-w-3xl mx-auto mb-8"
            >
              <Cake className="w-16 h-16 text-gold mx-auto mb-6 animate-bounce" />
              <h2 className="text-4xl md:text-6xl font-great-vibes text-purple-gold mb-4">
                🎉 Happy Birthday! 🎉
              </h2>
              <h3 className="text-2xl md:text-4xl font-bold text-love-red mb-6">
                The Day We've Been Waiting For!
              </h3>
              <p className="text-xl md:text-2xl text-rose-gold mb-6 leading-relaxed">
                Today is all about you! Your special day has finally arrived,
                and I couldn't be more excited to celebrate the most amazing person in my life.
              </p>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <Gift className="w-10 h-10 text-gold animate-pulse" />
                <span className="text-2xl text-love-red font-bold">Time to Celebrate!</span>
                <Star className="w-10 h-10 text-gold animate-bounce" fill="currentColor" />
              </div>
              <p className="text-lg text-purple-gold italic">
                "Every moment with you is a celebration, but today is extra special because it's your birthday!"
              </p>
            </motion.div>

            {/* Special birthday wishes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Heart,
                  title: "Love",
                  message: "Sending you all my love and more on this special day!"
                },
                {
                  icon: Gift,
                  title: "Joy",
                  message: "May your birthday be filled with endless joy and happiness!"
                },
                {
                  icon: Star,
                  title: "Dreams",
                  message: "Wishing that all your beautiful dreams come true today!"
                }
              ].map((wish, index) => (
                <motion.div
                  key={wish.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-morphism p-6 text-center group"
                >
                  <wish.icon className="w-12 h-12 mx-auto mb-4 text-purple-gold group-hover:animate-pulse" />
                  <h4 className="text-xl font-bold text-rose-gold mb-2">{wish.title}</h4>
                  <p className="text-purple-gold group-hover:text-love-red transition-colors">
                    {wish.message}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Countdown;