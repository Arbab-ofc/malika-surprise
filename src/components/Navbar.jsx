import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X, Home, Clock, Calendar, Camera, Gift, Mail, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'love-counter', label: 'Our Journey', icon: Clock },
    { id: 'nicknames', label: 'Nicknames', icon: Heart },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'love-letter', label: 'Love Letter', icon: Mail },
    { id: 'wishes', label: 'Wishes', icon: Gift },
    { id: 'surprises', label: 'Memory Garden', icon: Sparkles },
    ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 mb-8 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-lg shadow-glow'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <Heart className="w-8 h-8 text-love-red animate-heart-beat flex-shrink-0" fill="currentColor" />
              <span className={`text-xl md:text-2xl font-great-vibes bg-gradient-to-r from-romantic-pink to-love-red bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                Malika 💕
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-all duration-300 group ${
                    isScrolled
                      ? 'text-purple-gold hover:bg-love-red/10'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <item.icon className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="ml-2 font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMobileMenu}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-purple-gold hover:bg-love-red/10'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Gradient bottom border */}
        {isScrolled && (
          <div className="h-1 bg-gradient-to-r from-romantic-pink via-love-red to-purple-gold"></div>
        )}
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed inset-y-0 right-0 w-80 max-w-[85vw] bg-white/95 backdrop-blur-md z-50 shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-love-red/20">
                <div className="flex items-center space-x-3">
                  <Heart className="w-8 h-8 text-love-red animate-heart-beat" fill="currentColor" />
                  <span className="text-xl font-great-vibes bg-gradient-to-r from-romantic-pink to-love-red bg-clip-text text-transparent">
                    Menu
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-lg text-purple-gold hover:bg-love-red/10 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 overflow-y-auto py-6 px-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-4 w-full p-4 mb-3 rounded-xl hover:bg-love-red/10 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0">
                      <item.icon className="w-6 h-6 text-purple-gold group-hover:animate-pulse transition-colors" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-lg font-medium text-purple-gold group-hover:text-love-red transition-colors">
                        {item.label}
                      </div>
                      <div className="text-sm text-rose-gold opacity-70">
                        Scroll to section
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-love-red/20">
                <div className="text-center">
                  <div className="flex justify-center items-center space-x-2 mb-3">
                    <Heart className="w-5 h-5 text-love-red animate-heart-beat" fill="currentColor" />
                    <span className="text-sm font-romantic text-purple-gold">
                      Made with love for Malika
                    </span>
                    <Heart className="w-5 h-5 text-love-red animate-heart-beat" fill="currentColor" />
                  </div>
                  <p className="text-xs text-rose-gold opacity-70">
                    Happy 23rd Birthday! 🎂
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-romantic-pink via-love-red to-purple-gold z-50 origin-left transform scale-x-0"
        style={{
          transform: 'scaleX(var(--scroll-progress))',
          transformOrigin: 'left'
        }}
      />
    </>
  );
};

export default Navbar;