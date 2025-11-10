import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, PenTool, Mail, Star, Sparkles, Gift, Music } from 'lucide-react';

const LoveLetter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  const letterContent = [
    "My dearest Malika, seven years ago on November 11, 2018, my life changed forever the moment I first saw you. I can still recall it as if it were yesterday – you walked into my world like a beautiful dream I never wanted to wake up from, with eyes that sparkled like stars in the midnight sky and a smile that could melt the coldest heart. In that instant, I knew something extraordinary was happening, that my life had found its missing piece, that my heart had finally found its home. From those first moments when I was completely captivated by your presence, through every conversation that lasted until dawn, through every shared laugh that echoed in my soul, I fell deeper and more completely in love with you. You weren't just becoming someone important in my life – you were becoming my life itself, the very air I breathe, the reason my heart beats, the center of my universe.",

    "These seven years with you have been the most beautiful journey anyone could ever ask for, a love story written not in ink but in the language of our hearts. We've built our world together from the ground up – filled with countless adventures that make my heart race when I remember them, quiet moments that feel more like home than any place ever could, challenges that only forged our bond stronger in the fires of adversity, and victories that we celebrated together as if they were the greatest achievements in human history. I've watched you grow from the beautiful girl who first captured my heart into the incredible woman who still takes my breath away every single day. Through every season of our lives, through every storm and every sunrise, you've been my constant, my anchor, my safe harbor, my everything. We've created a love that's not just passionate and romantic, but deep and true – the kind that grows stronger with each passing day, the kind that transcends time and distance, the kind that stories are written about."

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('love-letter');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const paragraphTimer = setInterval(() => {
      setCurrentParagraph((prev) => {
        if (prev < letterContent.length - 1) {
          return prev + 1;
        }
        clearInterval(paragraphTimer);
        setShowHeart(true);
        return prev;
      });
    }, 3000);

    return () => clearInterval(paragraphTimer);
  }, [isVisible, letterContent.length]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1
      }
    }
  };

  return (
    <section id="love-letter" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-40 h-40 bg-romantic-pink rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-purple-gold rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-love-red rounded-full blur-3xl animate-float-delayed-more"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-great-vibes text-purple-gold mb-6">
            A Letter to My Love
          </h2>
          <p className="text-xl md:text-2xl text-rose-gold font-romantic mb-4">
            Words from my heart to yours 💕
          </p>
          <div className="flex justify-center items-center space-x-4">
            <PenTool className="w-8 h-8 text-gold animate-pulse" />
            <span className="text-2xl text-love-red font-bold">Handwritten with Love</span>
            <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
          </div>
        </motion.div>

        {/* Letter envelope animation */}
        {!isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="glass-morphism p-8 text-center group cursor-pointer hover:scale-105 transition-transform">
              <Mail className="w-16 h-16 text-purple-gold mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-2xl font-romantic text-rose-gold mb-2">
                Scroll to open your love letter
              </h3>
              <p className="text-lg text-purple-gold">
                A special message awaits you 💝
              </p>
            </div>
          </motion.div>
        )}

        {/* Letter content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="glass-morphism p-6 md:p-8 relative"
        >
          {/* Letter header */}
          <div className="text-center mb-6">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-great-vibes text-purple-gold mb-4">
                My Dearest Malika
              </h3>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <Star className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
                <span className="text-lg text-love-red">November 10, 2025</span>
                <Star className="w-6 h-6 text-gold animate-pulse" fill="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Letter paragraphs */}
          <div className="space-y-4 mb-6">
            {letterContent.slice(0, currentParagraph + 1).map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                className="text-lg md:text-xl text-gray-900 leading-relaxed font-handwritten text-italic drop-shadow-sm"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Signature section */}
          {currentParagraph >= letterContent.length - 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12 space-y-4"
            >
              {/* Hearts decoration */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
                <Sparkles className="w-8 h-8 text-gold animate-pulse" fill="currentColor" />
                <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
              </div>

              {/* Signature */}
              <div className="text-2xl md:text-3xl font-handwritten text-purple-gold mb-2">
                Forever yours,
              </div>
              <div className="text-3xl md:text-4xl font-great-vibes text-rose-gold">
                Your loving husband
              </div>
              <div className="text-lg text-purple-gold italic">
                Who loves you more each day 💕
              </div>

              {/* Final message */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="mt-8 p-6 bg-gradient-to-r from-romantic-pink/20 to-purple-gold/20 rounded-2xl"
              >
                <Gift className="w-12 h-12 text-love-red mx-auto mb-4 animate-bounce" />
                <p className="text-xl text-rose-gold font-bold mb-2">
                  Happy 23rd Birthday, My Love!
                </p>
                <p className="text-lg text-purple-gold">
                  Thank you for being the light of my life 🎂💖
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>

        {/* Special message below letter */}
        {currentParagraph >= letterContent.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-center"
          >
            <div className="flex justify-center items-center space-x-4 mb-6">
              <Music className="w-8 h-8 text-gold animate-pulse" />
              <span className="text-2xl text-love-red font-bold">Our Love Story Continues</span>
              <Music className="w-8 h-8 text-gold animate-pulse" />
            </div>
            <p className="text-xl text-purple-gold font-romantic max-w-3xl mx-auto">
              "In a world full of temporary people, you are my forever. In a world full of temporary love, ours is eternal."
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LoveLetter;