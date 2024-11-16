import React from 'react';
import { Award, BookOpen, Users, Globe, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const About = () => {
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

  const advantages = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "顶尖师资团队",
      description: "汇聚清华、港科大、CMU等顶尖高校博士团队，提供专业学术指导"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      title: "专业研究方向",
      description: "深耕AI领域，包括机器学习、深度学习、计算机视觉等"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "优质校友资源",
      description: "依托清华复旦港大校友网络，助力学术发展与职业规划"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "国际化视野",
      description: "与全球顶尖高校和研究机构保持密切合作"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "专业论文指导",
      description: "从选题到发表全程指导，确保论文质量"
    },
    {
      icon: <Star className="w-6 h-6 text-blue-600" />,
      title: "一对一和小班辅导",
      description: "针对性解答学术难题，深入理解课程内容"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      title: "实习RA内推",
      description: "推荐顶尖科技公司和实验室实习机会"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      title: "留学申请服务",
      description: "提供全面的一条龙留学申请指导和文书包过服务"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
          <h2 className="text-3xl font-bold mb-4">关于我们</h2>
          <p className="text-gray-600">
            拓扑学术是一家专注于AI领域的高端科研教育服务提供商，由清华校友及海外博士团队创立，致力于培养国际一流的AI人才。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {advantages.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-50">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="bg-white rounded-xl p-8 shadow-sm"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">服务特色</h3>
            <p className="text-gray-600">为学生提供全方位的学术支持与发展指导</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;