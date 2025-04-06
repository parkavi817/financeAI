import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Banknote, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-blue-500 text-white' : 'text-gray-600 hover:bg-blue-100';
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/goals', label: 'Goals' },
    { path: '/products', label: 'Products' },
    { path: '/learn', label: 'Learn' },
    { path: '/analyzer', label: 'Analyzer' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/feedback', label: 'Feedback' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded-lg shadow-lg md:hidden"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        <motion.nav
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transition-transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
          }`}
        >
          <div className="p-6">
            {/* Close Button - visible only on mobile */}
            <div className="md:hidden flex justify-end mb-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-blue-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <Link to="/" className="flex items-center space-x-3 mb-8">
              <Banknote className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">FinanceAI</span>
            </Link>

            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${isActive(
                    item.path
                  )} px-4 py-2 rounded-lg transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>

      {/* Main Content Wrapper */}
      <div className="md:pl-64">
        {/* Overlay for mobile */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </>
  );
}

export default Navbar;
