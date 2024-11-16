import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
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
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">关于我们</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">服务项目</Link></li>
              <li><Link to="/cases" className="hover:text-blue-400 transition-colors">成功案例</Link></li>
              <li><Link to="/team" className="hover:text-blue-400 transition-colors">加入我们</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">服务项目</h4>
            <ul className="space-y-2">
              <li><Link to="/service/paper-writing" className="hover:text-blue-400 transition-colors">科研辅导</Link></li>
              <li><Link to="/service/code-development" className="hover:text-blue-400 transition-colors">论文指导</Link></li>
              <li><Link to="/service/study-abroad" className="hover:text-blue-400 transition-colors">留学咨询</Link></li>
              <li><Link to="/service/graduate-exam" className="hover:text-blue-400 transition-colors">职业规划</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>contact@topology-academic.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>400-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>北京市海淀区</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} 拓扑学术. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;