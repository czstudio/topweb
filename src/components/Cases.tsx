import React from 'react';
import { ArrowUpRight, Clock, Award, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cases } from '../data/cases';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Cases = () => {
  const navigate = useNavigate();
  const casesList = Object.entries(cases);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const viewCaseDetails = (caseId: string) => {
    navigate(`/case/${caseId}`);
    // 添加平滑滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="cases" className="py-20 bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">成功案例</h2>
          <p className="text-gray-600">见证学术成长，分享成功喜悦</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {casesList.map(([id, item]) => (
            <motion.div 
              key={id} 
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              onClick={() => viewCaseDetails(id)}
            >
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20 text-white">
                  <span className="text-sm bg-blue-600 px-3 py-1 rounded-full inline-flex items-center gap-1">
                    {item.category === "科研突破" && <Award className="w-4 h-4" />}
                    {item.category === "留学申请" && <GraduationCap className="w-4 h-4" />}
                    {item.category === "学术成果" && <Clock className="w-4 h-4" />}
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-shadow-sm">{item.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{item.background.content}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(item.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <div className="text-blue-600 font-bold">{value}</div>
                      <div className="text-sm text-gray-500">{key}</div>
                    </div>
                  ))}
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-600 font-medium flex items-center gap-1"
                >
                  查看详情 <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Cases;