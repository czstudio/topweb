import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-8 [text-shadow:_0_1px_2px_rgb(0_0_0_/_20%)]">
                免费预约大牛导师一对一Meeting
              </h1>
              <div className="space-y-6 text-lg">
                <p className="opacity-90 [text-shadow:_0_1px_1px_rgb(0_0_0_/_10%)]">
                  我们的专业导师团队随时准备为您提��一对一的咨询服务，解答您的所有疑问。
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
                >
                  立即咨询
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-16 space-y-6"
            >
              {/* 
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">地址</h3>
                  <p className="opacity-90">xxxxxxxxx</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">电话</h3>
                  <p className="opacity-90">xxxxxxxxxx</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">商务合作</h3>
                  <p className="opacity-90">xxxxxxx</p>
                </div>
              </div>
              */}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="flex flex-wrap gap-8 w-full max-w-2xl justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 min-w-[240px]">
                <h2 className="text-xl font-bold text-white mb-6">
                  官方公众号
                </h2>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img
                    src="/微信公众号.webp"
                    alt="官方公众号二维码"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-white mt-4 opacity-90 text-sm">
                  扫码体验小程序
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl flex-1 min-w-[240px]">
                <h2 className="text-xl font-bold text-white mb-6">
                  微信咨询
                </h2>
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img
                    src="/个人微信.webp"
                    alt="导师咨询二维码"
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-center text-white mt-4 opacity-90 text-sm">
                  扫码添加顾问
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;