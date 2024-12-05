import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrainCircuit, ArrowRight } from 'lucide-react';
import NeuralAnimation from '../components/NeuralAnimation';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
      <NeuralAnimation />
      
      <div className="relative z-10 text-center px-4">
        <div className="flex items-center justify-center space-x-4 mb-8">
          <BrainCircuit className="h-16 w-16 text-indigo-400" />
          <h1 className="text-4xl md:text-6xl font-bold text-white">Basil.AI</h1>
        </div>
        
        <h2 className="text-xl md:text-2xl text-indigo-200 mb-8 max-w-2xl mx-auto">
          Your intelligent Path Finder powered by Basil Consulting, helping you navigate and excel in your professional journey
        </h2>
        
        <button
          onClick={() => navigate('/chat')}
          className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-900 bg-white rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}