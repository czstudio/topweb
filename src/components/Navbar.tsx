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
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 1)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Link 
              to="/"
              className="flex items-center gap-2"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img 
                src="/logo.png" 
                alt="拓扑学术" 
                className="h-8 w-auto"
                style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))' }}
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                拓扑学术
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`text-gray-700 hover:text-blue-600 transition-colors ${
                  location.pathname === item.path ? 'text-blue-600 font-medium' : ''
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
            >
              立即咨询
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.path}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(item.path)}
                    className={`flex items-center justify-between p-2 rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('/contact')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
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