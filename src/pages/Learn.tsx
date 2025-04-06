import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, PieChart, TrendingUp, DollarSign, ChevronDown, ChevronUp, 
  Clock, Users, Shield, BarChart2, Calendar, Award, Globe, CreditCard 
} from 'lucide-react';

function Learn() {
  const categories = [
    {
      name: 'Getting Started',
      description: 'Begin your investment journey with these fundamental concepts'
    },
    {
      name: 'Advanced Strategies',
      description: 'Take your investing to the next level with these techniques'
    },
    {
      name: 'Market Insights',
      description: 'Understand market trends and economic factors'
    }
  ];

  const topics = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Mutual Funds Basics',
      description: "Learn how mutual funds work and why they're great for beginners. Understand NAV, expense ratios, and different fund categories.",
      duration: '10 mins',
      color: 'bg-blue-100 text-blue-600',
      category: 'Getting Started',
      level: 'Beginner'
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: 'Understanding SIPs',
      description: 'Systematic Investment Plans explained with practical examples. Learn about rupee cost averaging and power of compounding.',
      duration: '8 mins',
      color: 'bg-purple-100 text-purple-600',
      category: 'Getting Started',
      level: 'Beginner'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Risk vs Returns',
      description: 'How to balance risk and returns in your investment portfolio. Understand different risk profiles and asset allocation strategies.',
      duration: '12 mins',
      color: 'bg-green-100 text-green-600',
      category: 'Advanced Strategies',
      level: 'Intermediate'
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: 'Tax-Saving Investments',
      description: 'Guide to tax-efficient investment options in India. Learn about ELSS, 80C deductions, and long-term tax planning.',
      duration: '15 mins',
      color: 'bg-amber-100 text-amber-600',
      category: 'Advanced Strategies',
      level: 'Intermediate'
    },
    {
      icon: <BarChart2 className="h-6 w-6" />,
      title: 'Technical Analysis',
      description: 'Introduction to reading charts, identifying trends, and using technical indicators for better investment decisions.',
      duration: '18 mins',
      color: 'bg-red-100 text-red-600',
      category: 'Advanced Strategies',
      level: 'Advanced'
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: 'Global Investing',
      description: 'How to diversify your portfolio internationally. Understand currency risks and global market correlations.',
      duration: '14 mins',
      color: 'bg-indigo-100 text-indigo-600',
      category: 'Market Insights',
      level: 'Intermediate'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Portfolio Protection',
      description: 'Strategies to hedge your investments and protect against market downturns. Learn about stop losses and defensive assets.',
      duration: '16 mins',
      color: 'bg-emerald-100 text-emerald-600',
      category: 'Advanced Strategies',
      level: 'Advanced'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Behavioral Finance',
      description: 'How psychology affects investment decisions. Recognize common biases and emotional traps in investing.',
      duration: '12 mins',
      color: 'bg-rose-100 text-rose-600',
      category: 'Market Insights',
      level: 'Intermediate'
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum amount to start investing?',
      answer: 'You can start investing with as little as ₹500 through SIPs in mutual funds. Many platforms now allow fractional investing in stocks as well.',
    },
    {
      question: 'How do I choose between stocks and mutual funds?',
      answer: 'It depends on your investment knowledge, time commitment, and risk tolerance. Mutual funds are generally better for beginners as they provide instant diversification and professional management. Direct stocks require more research and time commitment.',
    },
    {
      question: 'What are the tax implications of investing?',
      answer: 'Different investments have different tax treatments. ELSS funds offer tax deductions under 80C. Equity investments held for less than 1 year are subject to 15% STCG tax, while those held longer have 10% LTCG tax (above ₹1 lakh). Debt funds have different tax treatment based on holding period.',
    },
    {
      question: 'How often should I review my portfolio?',
      answer: 'For long-term investors, quarterly reviews are generally sufficient unless there are major life changes or market events. Avoid checking too frequently as it may lead to emotional decisions.',
    },
    {
      question: 'What percentage of my income should I invest?',
      answer: 'A good rule of thumb is the 50-30-20 rule: 50% for needs, 30% for wants, and 20% for savings/investments. However, this can vary based on your financial goals and obligations.',
    }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      quote: 'The explanations are crystal clear. I went from zero knowledge to confidently managing my portfolio in just 3 months!',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Priya Patel',
      role: 'Marketing Manager',
      quote: 'Finally found a resource that explains complex concepts simply. The SIP tutorial helped me start my first investment.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Amit Kumar',
      role: 'Small Business Owner',
      quote: 'The tax-saving section saved me ₹28,000 last year. Worth every minute spent learning here!',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('topics');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredTopics = activeCategory === 'All' 
    ? topics 
    : topics.filter(topic => topic.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 max-w-7xl mx-auto"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Learn Investing
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Master financial concepts with our interactive learning resources designed for all experience levels
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-xl bg-gray-100 p-1">
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'topics' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            Learning Topics
          </button>
          <button
            onClick={() => setActiveTab('faqs')}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'faqs' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'testimonials' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-600'}`}
          >
            Success Stories
          </button>
        </div>
      </div>

      {activeTab === 'topics' && (
        <>
          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              All Topics
            </button>
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.name ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Topics Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {filteredTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden relative group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                <div className="flex items-start mb-4">
                  <div className={`p-3 rounded-xl ${topic.color} mr-4`}>
                    {topic.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{topic.title}</h3>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                        <Clock className="inline mr-1 h-3 w-3" /> {topic.duration}
                      </span>
                      <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                        {topic.level}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">{topic.category}</span>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium group-hover:from-blue-600 group-hover:to-purple-600 transition-all"
                  >
                    Start Learning
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {activeTab === 'faqs' && (
        <motion.div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600">
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-blue-100 mt-2">Find answers to common investment questions</p>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                  {openFAQ === index ? (
                    <motion.div
                      animate={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronUp className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  )}
                </div>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === 'testimonials' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">What Our Learners Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of investors who've transformed their financial knowledge</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} filled={i < 4} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Ready to take control of your financial future?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join our community of smart investors and get access to exclusive resources, webinars, and personalized guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold shadow-lg"
            >
              Start Learning Today
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-xl text-lg font-semibold shadow-sm"
            >
              Explore Free Resources
            </motion.button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div className="flex items-center">
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-700">10,000+ Active Learners</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-700">Certified Financial Education</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-gray-700">Self-Paced Learning</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Star rating component
function Star({ filled }) {
  return (
    <svg
      className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default Learn;
