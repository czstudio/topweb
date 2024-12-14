import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Code, Globe, ChevronRight, GraduationCap, FileText, Users, Rocket, BookOpen, PenTool, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Services = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      id: 'paper-writing',
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: "科研辅导",
      description: "专业导师一对一指导，确保科研质量",
      items: [
        "顶会论文写作指导",
        "AI算法研究与实现",
        "实验设计与数据分析",
        "代码开发与优化"
      ]
    },
    {
      id: 'code-development',
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "论文指导",
      description: "从选题到发表的全程论文指导",
      items: [
        "论文选题与创新点提炼",
        "实验设计与数据分析",
        "论文撰写与修改",
        "投稿与返修支持"
      ]
    },
    {
      id: 'study-abroad',
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "留学咨询",
      description: "海外名校申请全程指导",
      items: [
        "选校定位分析",
        "文书材料撰写",
        "面试准备指导",
        "签证申请辅导"
      ]
    },
    {
      id: 'graduate-exam',
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "职业规划",
      description: "量身定制的职业发展规划",
      items: [
        "职业路径规划",
        "简历优化指导",
        "面试技巧培训",
        "行业资源对接"
      ]
    }
  ];

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

  const handleServiceClick = (serviceId: string) => {
    navigate(`/service/${serviceId}`);
  };

  return (
    <section id="services" className="py-20 bg-white">
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
          <h2 className="text-3xl font-bold mb-4">核心服务</h2>
          <p className="text-gray-600">为AI领域学子提供全方位的学术支持与发展指导</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-blue-50 transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-600">
                    <ChevronRight className="w-5 h-5 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-end">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="text-blue-600 font-medium flex items-center gap-1"
                >
                  了解更多 <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;