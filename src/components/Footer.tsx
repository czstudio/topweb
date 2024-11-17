import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "关于我们", path: "/about" },
    { label: "服务项目", path: "/services" },
    { label: "成功案例", path: "/cases" },
    { label: "导师团队", path: "/team" }
  ];

  const serviceLinks = [
    { label: "科研辅导", path: "/service/paper-writing" },
    { label: "论文指导", path: "/service/code-development" },
    { label: "留学咨询", path: "/service/study-abroad" },
    { label: "职业规划", path: "/service/graduate-exam" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">拓扑学术</h3>
            <p className="text-sm">
              专注于人工智能领域的高端科研教育服务，致力于培养国际一流的AI人才。
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">服务项目</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系我们</h4>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/二维码.jpg"
                  alt="联系我们二维码"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-center text-sm mt-3">
                扫码添加顾问微信
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} 拓扑学术. All rights reserved.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handleNavigation('/privacy')}
                className="text-sm hover:text-blue-400 transition-colors"
              >
                隐私政策
              </button>
              <button
                onClick={() => handleNavigation('/terms')}
                className="text-sm hover:text-blue-400 transition-colors"
              >
                服务条款
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;