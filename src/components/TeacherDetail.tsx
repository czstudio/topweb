import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Award, BookOpen, Star, Users, GraduationCap, 
  FileText, Code, Target, ExternalLink 
} from 'lucide-react';
import { teachers } from '../data/teachers';

export const TeacherDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const teacher = id ? teachers[id] : null;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">教师信息未找到</h1>
            <button 
              onClick={() => navigate('/team')}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              返回导师团队
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 mb-8 hover:gap-3 transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:translate-x-[-4px] transition-transform" />
          <span>返回</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden sticky top-24 animate-fadeIn">
              <div className="relative">
                <img 
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h1 className="text-3xl font-bold mb-2">{teacher.name}</h1>
                  <p className="text-xl opacity-90">{teacher.title}</p>
                  <p className="opacity-75">{teacher.university}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(teacher.stats).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className="text-center p-3 bg-blue-50 rounded-lg transform hover:scale-105 transition-transform"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="text-blue-600 font-bold text-lg">{value}</div>
                      <div className="text-sm text-gray-600">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-600" />
                    研究方向
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {teacher.researchAreas.map((area, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-default"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fadeIn">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                个人简介
              </h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                {teacher.longDescription}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fadeIn animate-delay-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-blue-600" />
                主要成就
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teacher.achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Star className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {teacher.teachingStyle && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fadeIn animate-delay-200">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  教学特色
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {teacher.teachingStyle.map((style, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <GraduationCap className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{style}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {teacher.publications && (
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg animate-fadeIn animate-delay-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  代表性论文发表
                </h2>
                <div className="space-y-4">
                  {teacher.publications.map((pub, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-lg hover:bg-blue-50 transition-colors"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <Code className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span>{pub}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;