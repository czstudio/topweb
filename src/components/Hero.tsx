import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const loadImages = async () => {
      const sources = [
        // 移动端图片
        { src: '/hero-mobile.avif', media: '(max-width: 640px)' },
        { src: '/hero-mobile.webp', media: '(max-width: 640px)' },
        // 平板图片
        { src: '/hero-tablet.avif', media: '(max-width: 1024px)' },
        { src: '/hero-tablet.webp', media: '(max-width: 1024px)' },
        // 桌面图片
        { src: '/hero-desktop.avif', media: '(min-width: 1025px)' },
        { src: '/hero-desktop.webp', media: '(min-width: 1025px)' }
      ];

      await Promise.all(
        sources.map(({ src }) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
          });
        })
      );

      setImageLoaded(true);
    };

    loadImages();
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/85 to-blue-900/90"
        />
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: 1,
            opacity: imageLoaded ? 1 : 0
          }}
          transition={{ 
            duration: 0.5,
            scale: { duration: 20, repeat: Infinity, repeatType: "reverse" }
          }}
          className="w-full h-full"
        >
          {!imageLoaded && (
            <div className="w-full h-full bg-blue-900 animate-pulse" />
          )}
          <picture>
            {/* 移动端 */}
            <source
              media="(max-width: 640px)"
              srcSet="/hero-mobile.webp"
              type="image/avif"
            />
            <source
              media="(max-width: 640px)"
              srcSet="/hero-mobile.webp"
              type="image/webp"
            />
            {/* 平板 */}
            <source
              media="(max-width: 1024px)"
              srcSet="/hero-tablet.webp"
              type="image/avif"
            />
            <source
              media="(max-width: 1024px)"
              srcSet="/hero-tablet.webp"
              type="image/webp"
            />
            {/* 桌面 */}
            <source
              srcSet="/hero-desktop.avif"
              type="image/avif"
            />
            <source
              srcSet="/hero-desktop.webp"
              type="image/webp"
            />
            {/* 后备图片 */}
            <img 
              src="/hero-desktop.avif"
              alt="AI Technology Background"
              className="w-full h-full object-cover"
              style={{ opacity: imageLoaded ? 1 : 0 }}
            />
          </picture>
        </motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 [text-shadow:_0_2px_4px_rgba(0,0,0,0.3)]">
            打造AI领域的学术梦想
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]">
            汇聚全球顶尖导师，助力您的学术成长之路
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/services')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl group"
            >
              <span className="flex items-center justify-center gap-2">
                探索服务
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-medium hover:bg-white/20 transition-all shadow-lg hover:shadow-xl"
            >
              立即咨询
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {[
            { number: "50+", label: "顶尖导师" },
            { number: "200+", label: "成功案例" },
            { number: "100%", label: "学生好评" },
            { number: "30+", label: "合作机构" }
          ].map((stat, index) => (
            <div key={index} className="text-center backdrop-blur-sm bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;