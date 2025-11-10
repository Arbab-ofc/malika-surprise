import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, Clock, Users } from 'lucide-react';

const LoveCounter = () => {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  });

  useEffect(() => {
    // Start date: November 11, 2018 (approximately when their 7-year journey began)
    const startDate = new Date('2018-11-11');

    const updateTimeTogether = () => {
      const now = new Date();
      const diff = now - startDate;

      // Calculate total days
      const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

      // Calculate individual time units
      const years = Math.floor(totalDays / 365);
      const months = Math.floor((totalDays % 365) / 30);
      const days = Math.floor(totalDays % 30);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
        totalDays
      });
    };

    updateTimeTogether();
    const interval = setInterval(updateTimeTogether, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const timeUnits = [
    { label: 'Years', value: timeTogether.years, icon: Calendar, color: 'from-purple-gold to-love-red' },
    { label: 'Months', value: timeTogether.months, icon: Calendar, color: 'from-romantic-pink to-blush' },
    { label: 'Days', value: timeTogether.days, icon: Heart, color: 'from-love-red to-carnation' },
    { label: 'Hours', value: timeTogether.hours, icon: Clock, color: 'from-gold to-champagne' },
    { label: 'Minutes', value: timeTogether.minutes, icon: Clock, color: 'from-purple-gold to-purple-500' },
    { label: 'Seconds', value: timeTogether.seconds, icon: Heart, color: 'from-rose-gold to-romantic-pink' }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-heart-gold rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-love-red rounded-full blur-2xl"></div>
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
          <h2 className="text-4xl md:text-6xl font-great-vibes text-purple-gold mb-4">
            Our Beautiful Journey
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Every moment with you is precious 💕
          </p>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
            <span className="text-2xl text-purple-gold font-bold">7 Years Together</span>
            <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
          </div>
        </motion.div>

        {/* Total days counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-morphism max-w-2xl mx-auto p-8 mb-16 text-center"
        >
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Users className="w-12 h-12 text-purple-gold" />
            <h3 className="text-3xl md:text-4xl font-bold text-rose-gold">
              Total Days Together
            </h3>
          </div>
          <div className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-love-red to-purple-gold bg-clip-text text-transparent">
            {timeTogether.totalDays.toLocaleString()}
          </div>
          <p className="text-xl text-purple-gold mt-2">
            Days of pure love and happiness 💖
          </p>
        </motion.div>

        {/* Time units grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-morphism p-6 text-center group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${unit.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
              <unit.icon className={`w-8 h-8 mx-auto mb-3 text-purple-gold group-hover:animate-heart-beat`} fill="currentColor" />
              <div className="text-3xl md:text-4xl font-bold text-rose-gold mb-1 group-hover:scale-110 transition-transform">
                {unit.value}
              </div>
              <div className="text-sm md:text-base text-purple-gold">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Anniversary message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-morphism max-w-4xl mx-auto p-8">
            <h3 className="text-2xl md:text-3xl font-romantic text-purple-gold mb-4">
              Started on November 11th, 2018
            </h3>
            <p className="text-lg text-rose-gold mb-4">
              From that day to now, every second has been a blessing with you.
            </p>
            <div className="flex justify-center items-center space-x-2">
              <Heart className="w-6 h-6 text-love-red animate-pulse" fill="currentColor" />
              <span className="text-xl text-love-red font-bold">Forever & Always</span>
              <Heart className="w-6 h-6 text-love-red animate-pulse" fill="currentColor" />
            </div>
          </div>
        </motion.div>

        {/* Special quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-purple-gold italic font-romantic max-w-3xl mx-auto">
            "In your smile I find my happiness, in your eyes I find my dreams, and in your heart I find my home."
          </blockquote>
          <cite className="block text-lg text-rose-gold mt-4 not-italic">
            - Forever yours 💕
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveCounter;