import React from 'react';
import { motion } from 'framer-motion';
import { Target, Home, GraduationCap, Plane, ArrowRight } from 'lucide-react';

function Goals() {
  const goals = [
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Retirement Planning',
      description: 'Plan for a comfortable retirement with our AI-driven calculator.',
      progress: 65,
      color: 'bg-purple-500',
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: 'Home Purchase',
      description: 'Calculate your home buying power and create a savings plan.',
      progress: 40,
      color: 'bg-blue-500',
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Education Fund',
      description: "Save for your children's education with structured investments.",
      progress: 80,
      color: 'bg-green-500',
    },
    {
      icon: <Plane className="h-6 w-6" />,
      title: 'Travel Fund',
      description: 'Build your dream vacation fund with smart saving strategies.',
      progress: 25,
      color: 'bg-orange-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"
        >
          Achieve Your Financial Goals
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Track and manage your financial objectives with personalized insights
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goals.map((goal, index) => (
          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start mb-5">
              <div className={`p-3 rounded-xl ${goal.color} text-white mr-4`}>
                {goal.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{goal.title}</h3>
                <p className="text-gray-600 mt-1">{goal.description}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-gray-500">Progress</span>
                <span className="text-sm font-semibold">{goal.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${goal.progress}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-2.5 rounded-full ${goal.color}`}
                />
              </div>
            </div>

            <button className="w-full flex items-center justify-center mt-4 px-4 py-2 text-sm font-medium rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors">
              View details <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-12"
      >
        
      </motion.div>
    </motion.div>
  );
}

export default Goals;