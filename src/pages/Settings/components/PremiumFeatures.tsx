import React from 'react';
import { CreditCard } from 'lucide-react';

export default function PremiumFeatures() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <CreditCard className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Premium Features</h2>
      </div>

      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
        <h4 className="text-lg font-semibold mb-2">Upgrade to Premium</h4>
        <p className="text-sm opacity-90 mb-4">Get access to advanced features, priority support, and more</p>
        <button className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm">
          View Plans
        </button>
      </div>
    </div>
  );
}