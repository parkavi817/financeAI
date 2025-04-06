import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Wallet, Clock, Shield, ChevronRight } from 'lucide-react';

function Products() {
  const [selectedRisk, setSelectedRisk] = useState('all');

  const products = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Mutual Funds',
      description: 'Professionally managed investment funds that pool money from multiple investors.',
      risk: 'moderate',
      returns: '12-15% p.a.',
      minInvestment: '₹500',
      color: 'bg-purple-500',
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: 'Stocks',
      description: 'Direct equity investments in publicly listed companies.',
      risk: 'high',
      returns: '15-20% p.a.',
      minInvestment: '₹100',
      color: 'bg-blue-500',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Fixed Deposits',
      description: 'Secure investments with guaranteed returns over a fixed period.',
      risk: 'low',
      returns: '5-7% p.a.',
      minInvestment: '₹1,000',
      color: 'bg-green-500',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Government Bonds',
      description: 'Safe investment options backed by the government.',
      risk: 'low',
      returns: '7-8% p.a.',
      minInvestment: '₹1,000',
      color: 'bg-orange-500',
    },
  ];

  const filteredProducts = selectedRisk === 'all' 
    ? products 
    : products.filter(product => product.risk === selectedRisk);

  const riskColors = {
    low: 'bg-green-100 text-green-800',
    moderate: 'bg-purple-100 text-purple-800',
    high: 'bg-red-100 text-red-800'
  };

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
          Investment Products
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Discover investment options tailored to your risk appetite
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 flex flex-wrap justify-center gap-3"
      >
        {['all', 'low', 'moderate', 'high'].map((risk) => (
          <button
            key={risk}
            onClick={() => setSelectedRisk(risk)}
            className={`px-5 py-2.5 rounded-full capitalize font-medium transition-all ${
              selectedRisk === risk
                ? risk === 'all' 
                  ? 'bg-blue-600 text-white shadow-md'
                  : `${riskColors[risk]} shadow-md`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {risk === 'all' ? 'All Products' : `${risk} Risk`}
          </button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="flex items-start mb-5">
              <div className={`p-3 rounded-xl ${product.color} text-white mr-4`}>
                {product.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${riskColors[product.risk]} font-medium`}>
                  {product.risk} risk
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-500">Expected Returns</span>
                <span className="font-semibold">{product.returns}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Min Investment</span>
                <span className="font-semibold">{product.minInvestment}</span>
              </div>
            </div>

            <button className="w-full flex items-center justify-between mt-4 px-4 py-3 text-sm font-medium rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors group">
              Learn more
              <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No products match your selected risk level.</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Products;