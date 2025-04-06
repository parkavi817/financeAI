import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight, ChevronRight, Wallet, PieChart as PieChartIcon, Activity } from 'lucide-react';

function Portfolio() {
  const portfolioData = [
    { name: 'Stocks', value: 45 },
    { name: 'Mutual Funds', value: 30 },
    { name: 'Fixed Deposits', value: 15 },
    { name: 'Gold', value: 10 },
  ];

  const performanceData = [
    { month: 'Jan', value: 100 },
    { month: 'Feb', value: 110 },
    { month: 'Mar', value: 105 },
    { month: 'Apr', value: 120 },
    { month: 'May', value: 125 },
    { month: 'Jun', value: 135 },
  ];

  const COLORS = ['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B'];

  const holdings = [
    {
      name: 'HDFC Bank',
      type: 'Stock',
      value: '₹25,000',
      change: '+5.2%',
      isPositive: true,
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
    },
    {
      name: 'SBI Blue Chip Fund',
      type: 'Mutual Fund',
      value: '₹18,000',
      change: '-1.8%',
      isPositive: false,
      icon: <PieChartIcon className="h-5 w-5 text-purple-500" />,
    },
    {
      name: 'Fixed Deposit',
      type: 'FD',
      value: '₹50,000',
      change: '+6.5%',
      isPositive: true,
      icon: <Wallet className="h-5 w-5 text-green-500" />,
    },
    {
      name: 'Sovereign Gold Bonds',
      type: 'Gold',
      value: '₹32,000',
      change: '+2.1%',
      isPositive: true,
      icon: <Activity className="h-5 w-5 text-yellow-500" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Portfolio Overview</h1>
          <p className="text-gray-600">Track your investments and performance</p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mt-4 md:mt-0"
        >
          <p className="text-gray-500 text-sm">Total Portfolio Value</p>
          <div className="flex items-end">
            <p className="text-2xl font-bold mr-2">₹1,25,000</p>
            <p className="text-green-500 flex items-center text-sm">
              <ArrowUpRight className="h-4 w-4" />
              <span>+12.5% (30d)</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Asset Allocation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
              <PieChartIcon className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Asset Allocation</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Allocation']}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
                <Legend 
                  layout="vertical" 
                  verticalAlign="middle" 
                  align="right"
                  wrapperStyle={{ paddingLeft: '20px' }}
                  formatter={(value) => <span className="text-gray-600 text-sm">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Performance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100"
        >
          <div className="flex items-center mb-6">
            <div className="p-2 bg-green-100 rounded-lg text-green-600 mr-3">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Performance</h2>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#6B7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis 
                  tick={{ fill: '#6B7280' }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '8px', 
                    border: 'none', 
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    backgroundColor: '#FFFFFF'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#3B82F6' }}
                  activeDot={{ r: 6, stroke: '#FFFFFF', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Holdings Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600 mr-3">
              <Wallet className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold">Your Holdings</h2>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          {holdings.map((holding, index) => (
            <motion.div
              key={holding.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex items-center">
                <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
                  {holding.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{holding.name}</h3>
                  <p className="text-sm text-gray-500">{holding.type}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{holding.value}</p>
                <p className={`text-sm flex items-center justify-end ${holding.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                  {holding.isPositive ? (
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                  )}
                  <span>{holding.change}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;