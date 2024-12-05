import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function CareerInsights() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Career Insights</h2>
      <div className="space-y-4">
        <div className="flex items-center text-blue-600">
          <TrendingUp className="h-5 w-5 mr-2" />
          <span>AI & ML Industry Growth: +45%</span>
        </div>
        <p className="text-sm text-gray-600">
          Latest trend: Increased demand for AI specialists in healthcare sector
        </p>
      </div>
    </div>
  );
}