import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Target, TrendingUp, BookOpen, PieChart, Wallet } from 'lucide-react';

const backgroundImages = [
  'https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg',
  'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg',
  'https://img.freepik.com/free-vector/digital-money-transfer-technology-background_1017-17454.jpg',
  'https://img.freepik.com/premium-photo/pen-calculator-business-graphs-charts_488220-5608.jpg',
  'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg',
  'https://images.pexels.com/photos/128867/coins-currency-investment-insurance-128867.jpeg'
];

const financialStats = [
  { value: "78%", label: "of investors see better returns with guidance" },
  { value: "1.5M+", label: "users growing their wealth with us" },
  { value: "24/7", label: "AI-powered financial insights" },
  { value: "95%", label: "customer satisfaction rate" }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Expanded Hero Section with Background Image */}
      <div 
        className="relative h-screen-3/4 min-h-[600px] flex items-center justify-center bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImages[currentImageIndex]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Financial Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
            AI-driven wealth management that adapts to your goals and grows with your ambitions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {financialStats.map((stat, index) => (
              <div key={index} className="bg-white bg-opacity-15 backdrop-blur-md p-6 rounded-xl border border-white border-opacity-20">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Content Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Intelligent Investing for Modern Times
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform combines artificial intelligence with financial expertise to create personalized investment strategies that evolve with market conditions and your changing needs.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Market Intelligence</h3>
                    <p className="text-gray-600">Real-time analysis of thousands of data points to identify opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <PieChart className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Portfolio Optimization</h3>
                    <p className="text-gray-600">Continuous rebalancing to maintain your desired risk profile</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                    <Wallet className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">Wealth Protection</h3>
                    <p className="text-gray-600">Advanced algorithms to safeguard your assets during market volatility</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-6 text-center">Today's Market Overview</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg text-gray-700">S&P 500 Index</span>
                    <span className="text-lg font-medium text-green-600">+1.42%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg text-gray-700">NASDAQ Composite</span>
                    <span className="text-lg font-medium text-green-600">+0.92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg text-gray-700">Gold (per oz)</span>
                    <span className="text-lg font-medium text-red-600">-0.35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg text-gray-700">10-Year Treasury</span>
                    <span className="text-lg font-medium text-green-600">+0.18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-6 text-center">*Market data updates every 15 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Cards Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Begin Your Journey to Financial Freedom
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our tools and services designed to help you build and protect your wealth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/goals" className="group border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Financial Goals</h3>
              <p className="text-gray-600">Define and track your financial objectives with our goal-setting tools</p>
            </Link>

            <Link to="/products" className="group border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Investment Products</h3>
              <p className="text-gray-600">Explore a curated selection of investment options matching your profile</p>
            </Link>

            <Link to="/learn" className="group border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Financial Education</h3>
              <p className="text-gray-600">Master investing concepts with our interactive learning resources</p>
            </Link>

            <Link to="/analyzer" className="group border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <PieChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Wealth Analysis</h3>
              <p className="text-gray-600">Get personalized insights into your financial health and opportunities</p>
            </Link>

            <Link to="/portfolio" className="group border-2 border-gray-100 p-8 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <Wallet className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Portfolio Tracker</h3>
              <p className="text-gray-600">Monitor all your investments in one place with real-time updates</p>
            </Link>

            <div className="border-2 border-blue-100 bg-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Wallet className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Ready to Begin?</h3>
              <p className="text-gray-600 mb-6">Take the first step towards financial freedom today</p>
              <Link
                to="/goals"
                className="inline-block w-full text-center bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;