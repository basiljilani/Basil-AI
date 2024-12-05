import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function DailyProgress() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Daily Progress</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Current Streak</span>
          <span className="font-semibold">7 days</span>
        </div>
        <div className="flex items-center text-green-600">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span>Completed today's check-in</span>
        </div>
      </div>
    </div>
  );
}