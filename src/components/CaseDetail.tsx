import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle, Clock, Trophy, Users } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { cases } from '../data/cases';
import { motion } from 'framer-motion';

export const CaseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = id ? cases[id] : null;

  // 添加 useEffect 来控制页面加载时的滚动行为
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]); // 当 id 改变时触发滚动

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">案例未找到</h1>
            <button 
              onClick={() => navigate('/cases')}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              返回案例列表
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 pt-20"
    >
      <div className="container mx-auto px-4 py-12">
        <button 
          onClick={() => {
            navigate(-1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 text-blue-600 mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          返回
        </button>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
                {caseStudy.category}
              </span>
              <h1 className="text-3xl font-bold mt-2 text-shadow">{caseStudy.title}</h1>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(caseStudy.stats).map(([key, value]) => (
                <div key={key} className="text-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="text-blue-600 font-bold text-xl">{value}</div>
                  <div className="text-sm text-gray-600">{key}</div>
                </div>
              ))}
            </div>

            <div className="prose max-w-none">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  {caseStudy.background.title}
                </h2>
                <p className="text-gray-600">{caseStudy.background.content}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-blue-600" />
                  {caseStudy.challenge.title}
                </h2>
                <p className="text-gray-600">{caseStudy.challenge.content}</p>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  辅导过程
                </h2>
                <div className="space-y-6">
                  {caseStudy.process.map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-bold mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  {caseStudy.result.title}
                </h2>
                <p className="text-gray-600">{caseStudy.result.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseDetail;