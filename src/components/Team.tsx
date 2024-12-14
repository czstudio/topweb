import React, { useState } from 'react';
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
  };

  return (
    <section id="team" className="py-20 bg-white">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">顶尖导师团队</h2>
          <p className="text-gray-600">汇聚全球顶尖高校的AI领域专家，为您提供最专业的指导</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img 
                  src={teachersList[currentIndex][1].image}
                  alt={teachersList[currentIndex][1].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                      {teachersList[currentIndex][1].field}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{teachersList[currentIndex][1].name}</h3>
                  <p className="text-lg opacity-90">{teachersList[currentIndex][1].title}</p>
                  <p className="text-sm opacity-75">{teachersList[currentIndex][1].university}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="h-full flex flex-col">
                  <p className="text-gray-600 mb-6 flex-grow">
                    {teachersList[currentIndex][1].description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">主要成就</h4>
                    <ul className="space-y-2">
                      {teachersList[currentIndex][1].achievements.map((achievement, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    
                    <motion.button 
                      whileHover={{ x: 5 }}
                      onClick={() => viewTeacherDetails(teachersList[currentIndex][0])}
                      className="mt-6 text-blue-600 font-medium flex items-center gap-1"
                    >
                      查看详细资料 <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.button 
            variants={itemVariants}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button 
            variants={itemVariants}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;