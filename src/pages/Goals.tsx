import React from 'react';
import { Target, Clock, ArrowRight } from 'lucide-react';

export default function Goals() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Goals</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Goal Tracking
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Set and track your career goals with our advanced goal management system. Coming soon!
            </p>
            <div className="flex items-center text-indigo-600 dark:text-indigo-400">
              <Clock className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Launch: Q2 2024</span>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50">
            <button className="w-full flex items-center justify-center space-x-2 text-indigo-600 dark:text-indigo-400 font-medium">
              <span>Get notified when available</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg text-white">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Coming Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span>Smart goal recommendations</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span>Progress analytics</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span>Milestone tracking</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                <span>Achievement sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}