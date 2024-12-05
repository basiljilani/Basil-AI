import React from 'react';
import DailyProgress from './components/DailyProgress';
import CareerInsights from './components/CareerInsights';
import UpcomingGoals from './components/UpcomingGoals';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DailyProgress />
        <CareerInsights />
        <UpcomingGoals />
      </div>
    </div>
  );
}