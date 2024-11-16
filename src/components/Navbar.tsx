import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "首页", path: "/" },
    { label: "关于我们", path: "/about" },
    { label: "服务项目", path: "/services" },
    { label: "导师团队", path: "/team" },
    { label: "成功案例", path: "/cases" },
    { label: "联系我们", path: "/contact" }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled 
          ? 'rgba(15, 23, 42, 0.85)' 
          : 'rgba(15, 23, 42, 0.75)',
        backdropFilter: scrolled ? 'blur(12px)' : 'blur(8px)',
        boxShadow: scrolled 
          ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
          : 'none',
      }}
      transition={{ duration: 0.4 }}
      className="fixed w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center"
          >
            <Link 
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <motion.img 
                src="/logo.png" 
                alt="拓扑学术" 
                className="h-8 w-auto transform group-hover:rotate-[-5deg]"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
                  transition: 'transform 0.3s ease'
                }}
              />
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  fontFamily: "'Noto Serif SC', serif"
                }}
              >
                拓扑学术
              </motion.span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`relative text-gray-300 hover:text-white transition-colors ${
                  location.pathname === item.path ? 'text-white font-medium' : ''
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400 rounded-full"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/contact')}
              className="relative overflow-hidden group bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10">立即咨询</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/10"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-white/10 text-white'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  onClick={() => handleNavigation('/contact')}
                  className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white p-3 rounded-lg hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all shadow-lg mt-2"
                >
                  立即咨询
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;