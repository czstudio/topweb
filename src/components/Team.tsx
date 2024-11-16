import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { teachers } from '../data/teachers';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const teachersList = Object.entries(teachers);

  // 添加滚动控制
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teachersList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teachersList.length - 1 : prevIndex - 1
    );
  };

  const viewTeacherDetails = (teacherId: string) => {
    navigate(`/teacher/${teacherId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="team" className="py-20 bg-white">
      {/* Rest of the component remains the same */}
    </section>
  );
};