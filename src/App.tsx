import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="pt-16 min-h-screen bg-gray-50">
    {children}
  </div>
);

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Services />
    <Team />
    <Cases />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
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
      </div>
    </Router>
  );
}

export default App;