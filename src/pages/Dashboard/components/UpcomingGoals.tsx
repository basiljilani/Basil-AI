import React from 'react';
import { Calendar } from 'lucide-react';

export default function UpcomingGoals() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Goals</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
          <div>
            <p className="font-medium">Complete AWS Certification</p>
            <p className="text-sm text-gray-600">Due in 14 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}