import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Banknote } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import Products from './pages/Products';
import Learn from './pages/Learn';
import Analyzer from './pages/Analyzer';
import Portfolio from './pages/Portfolio';
import Feedback from './pages/Feedback';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="md:pl-64 min-h-screen">
          <div className="max-w-7xl mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/products" element={<Products />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/analyzer" element={<Analyzer />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/feedback" element={<Feedback />} />
            </Routes>
          </div>
        </main>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App