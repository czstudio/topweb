import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Cases } from './components/Cases';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TeacherDetail } from './components/TeacherDetail';
import { CaseDetail } from './components/CaseDetail';
import { ServiceDetail } from './components/ServiceDetail';

// Wrapper component that handles scroll behavior and animations
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <Cases />
    <Team />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="/service/:id" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
          <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
          <Route path="/teacher/:id" element={<PageWrapper><TeacherDetail /></PageWrapper>} />
          <Route path="/cases" element={<PageWrapper><Cases /></PageWrapper>} />
          <Route path="/case/:id" element={<PageWrapper><CaseDetail /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

// Wrap the App component with Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;