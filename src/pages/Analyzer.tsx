import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, Wallet, PiggyBank, Coins } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function Analyzer() {
  const [formData, setFormData] = useState({
    income: '',
    expenses: '',
    savings: ''
  });
  const [insights, setInsights] = useState([
    {
      title: 'Savings Rate',
      value: '—',
      change: '—',
      isPositive: true,
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      title: 'Expense Ratio',
      value: '—',
      change: '—',
      isPositive: true,
      icon: <Wallet className="h-5 w-5" />
    },
    {
      title: 'Investment Potential',
      value: '—',
      change: '—',
      isPositive: true,
      icon: <Coins className="h-5 w-5" />
    },
  ]);

  const [chartData, setChartData] = useState([
    { name: 'Jan', income: 4000, expenses: 3200 },
    { name: 'Feb', income: 3000, expenses: 2800 },
    { name: 'Mar', income: 5000, expenses: 4200 },
    { name: 'Apr', income: 4500, expenses: 3800 },
    { name: 'May', income: 6000, expenses: 5200 },
    { name: 'Jun', income: 5500, expenses: 4800 },
  ]);

  const pieData = [
    { name: 'Needs', value: 50 },
    { name: 'Wants', value: 30 },
    { name: 'Savings', value: 20 },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAnalyze = () => {
    const { income: incomeStr, expenses: expensesStr, savings: savingsStr } = formData;
    const incomeNum = parseFloat(incomeStr);
    const expensesNum = parseFloat(expensesStr);
    const savingsNum = parseFloat(savingsStr);

    if (isNaN(incomeNum) || isNaN(expensesNum) || isNaN(savingsNum)) return;

    const savingsRate = ((savingsNum / incomeNum) * 100).toFixed(1);
    const expenseRatio = ((expensesNum / incomeNum) * 100).toFixed(1);
    const leftover = incomeNum - expensesNum - savingsNum;

    setInsights([
      {
        title: 'Savings Rate',
        value: `${savingsRate}%`,
        change: savingsRate >= 20 ? '+ Excellent' : '- Needs Work',
        isPositive: savingsRate >= 20,
        icon: <PiggyBank className="h-5 w-5" />
      },
      {
        title: 'Expense Ratio',
        value: `${expenseRatio}%`,
        change: expenseRatio <= 60 ? '- Healthy' : '+ High',
        isPositive: expenseRatio <= 60,
        icon: <Wallet className="h-5 w-5" />
      },
      {
        title: 'Investment Potential',
        value: `₹${leftover.toLocaleString()}`,
        change: leftover >= 0 ? '+ Available' : '- Deficit',
        isPositive: leftover >= 0,
        icon: <Coins className="h-5 w-5" />
      },
    ]);

    // Update chart data with new values
    setChartData(prev => [
      ...prev.slice(0, -1),
      {
        ...prev[prev.length - 1],
        income: incomeNum,
        expenses: expensesNum
      }
    ]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Financial Health Analyzer
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get personalized insights to optimize your spending and savings
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-6 rounded-2xl shadow-lg border-t-4 ${insight.isPositive ? 'border-green-500' : 'border-red-500'}`}
          >
            <div className="flex items-center mb-3">
              <div className={`p-2 rounded-lg mr-3 ${insight.isPositive ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                {insight.icon}
              </div>
              <h3 className="text-gray-500 font-medium">{insight.title}</h3>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold">{insight.value}</span>
              <div className={`flex items-center ${insight.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {insight.isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                <span className="ml-2 text-sm font-medium">{insight.change}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg lg:col-span-2"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Monthly Cash Flow</h2>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">Income</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm">Expenses</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#FF8C00" 
                  strokeWidth={3} 
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-6">Spending Breakdown</h2>
          <div className="h-64 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`, '']}
                  contentStyle={{
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2" 
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></div>
                  <span className="text-sm font-medium">{entry.name}</span>
                </div>
                <span className="text-sm font-semibold">{entry.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Financial Details</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (₹)</label>
            <input
              type="number"
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="e.g. 50000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Expenses (₹)</label>
            <input
              type="number"
              name="expenses"
              value={formData.expenses}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="e.g. 35000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Savings (₹)</label>
            <input
              type="number"
              name="savings"
              value={formData.savings}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              placeholder="e.g. 10000"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAnalyze}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Analyze My Finances
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Analyzer;