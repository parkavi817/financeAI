import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Award } from 'lucide-react';

function About() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Your financial data is protected with enterprise-grade security.',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Support',
      description: 'Get guidance from our team of financial experts.',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Goal-Oriented',
      description: 'Personalized strategies to achieve your financial goals.',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Award-Winning',
      description: 'Recognized for innovation in financial technology.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden min-h-screen"
    >
      {/* Main background image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      ></div>
      
      {/* Dark overlay for better text contrast */}
      <div className="fixed inset-0 z-0 bg-black/30"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Transforming Financial Futures with AI
          </h1>
          <p className="text-xl text-white/90">
            We're revolutionizing financial planning with AI-powered insights, making expert-level financial guidance accessible to everyone.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                {React.cloneElement(feature.icon, { className: "h-10 w-10" })}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative rounded-2xl p-8 md:p-12 mb-16 overflow-hidden"
        >
          {/* Mission section background */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://cdn.pixabay.com/photo/2021/08/06/00/38/stock-trading-6525083_1280.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
          <div className="absolute inset-0 z-0 bg-blue-800/80"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
              Our Mission
            </h2>
            <div className="text-white/90 text-lg leading-relaxed space-y-4">
              <p>
                At FinanceAI, we believe everyone deserves access to high-quality financial guidance. Our mission is to democratize financial planning through innovative AI technology.
              </p>
              <p>
                We're committed to helping millions of investors make better financial decisions, bridging the gap in financial literacy through personalized, AI-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 text-center"
        >
          {[
            { value: "10M+", label: "Users" },
            { value: "$50B+", label: "Assets Managed" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "24/7", label: "AI Support" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Global styles for animated blobs */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.div>
  );
}

export default About;