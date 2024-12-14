import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle, Users, GraduationCap, Target, Award, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const services = {
    'paper-writing': {
      title: '科研辅导',
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      description: '专业导师一对一指导，确保科研质量',
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?auto=format&fit=crop&q=80&w=1200',
      details: [
        '顶会论文写作指导',
        'AI算法研究与实现',
        '实验设计与数据分析',
        '代码开发与优化'
      ],
      features: [
        {
          title: '专业导师指导',
          description: '由清华、北大等顶尖高校博士提供一对一指导'
        },
        {
          title: '系统化培训',
          description: '从基础理论到前沿技术，建立完整知识体系'
        },
        {
          title: '实践项目对接',
          description: '真实项目实践，积累研究经验'
        },
        {
          title: '长期学术规划',
          description: '制定个性化学术发展路径'
        }
      ],
      process: [
        '需求分析与方向确定',
        '理论学习与技能培训',
        '项目实践与论文撰写',
        '成果产出与持续优化'
      ]
    },
    'code-development': {
      title: '论文指导',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      description: '从选题到发表的全程论文指导服务',
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&q=80&w=1200',
      details: [
        'SCI/EI期刊论文指导',
        '会议论文撰写支持',
        '论文选题与创新点提炼',
        '实验设计与数据分析'
      ],
      features: [
        {
          title: '经验丰富',
          description: '导师团队发表数百篇高水平论文'
        },
        {
          title: '全程跟进',
          description: '从选题到发表的完整支持'
        },
        {
          title: '质量保证',
          description: '严格把控论文质量，确保发表'
        },
        {
          title: '快速响应',
          description: '24小时内回复修改建议'
        }
      ],
      process: [
        '论文选题与大纲制定',
        '文献调研与方法设计',
        '实验进行与数据分析',
        '论文撰写与投稿修改'
      ]
    },
    'study-abroad': {
      title: '留学咨询',
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      description: '海外名校申请全程指导服务',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
      details: [
        '名校申请策略规划',
        '文书材料精修指导',
        '面试准备与模拟',
        '奖学金申请支持'
      ],
      features: [
        {
          title: '精准定位',
          description: '基于背景精准匹配最适合的院校'
        },
        {
          title: '专业文书',
          description: '由海外名校毕业生提供文书指导'
        },
        {
          title: '面试辅导',
          description: '模拟面试与技巧指导'
        },
        {
          title: '全程规划',
          description: '从准备到录取的完整规划'
        }
      ],
      process: [
        '背景评估与选校',
        '文书准备与修改',
        '推荐信与材料准备',
        '面试准备与签证指导'
      ]
    },
    'graduate-exam': {
      title: '职业规划',
      icon: <Target className="w-8 h-8 text-blue-600" />,
      description: '量身定制的职业发展规划服务',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
      details: [
        '职业路径规划',
        '简历优化指导',
        '面试技巧培训',
        '行业资源对接'
      ],
      features: [
        {
          title: '个性化规划',
          description: '基于个人特点制定发展方向'
        },
        {
          title: '资源丰富',
          description: '对接顶尖企业内推机会'
        },
        {
          title: '实战经验',
          description: '来自一线的实战经验分享'
        },
        {
          title: '长期指导',
          description: '持续的职业发展建议'
        }
      ],
      process: [
        '职业兴趣评估',
        '能力提升规划',
        '简历面试准备',
        '入职适应指导'
      ]
    }
  };

  const service = id ? services[id as keyof typeof services] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">服务未找到</h1>
            <button 
              onClick={() => navigate('/services')}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              返回服务列表
            </button>
          </div>
        </div>
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="container mx-auto px-4 py-12"
      >
        <motion.button 
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          返回
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <div className="relative h-64 rounded-xl overflow-hidden mb-8">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <h1 className="text-3xl font-bold">{service.title}</h1>
                </div>
                <p className="text-lg opacity-90">{service.description}</p>
              </div>
            </div>

            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm mb-8"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                服务特色
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                服务内容
              </h2>
              <ul className="space-y-4">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                服务流程
              </h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">立即咨询</h2>
              <div className="text-center">
                <img
                  src= "/企业微信.webp" 
                  alt="企业微信咨询二维码"
                  className="w-48 h-48 mx-auto rounded-lg mb-4"
                />
                <p className="text-gray-600">扫描二维码添加顾问微信</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiceDetail;