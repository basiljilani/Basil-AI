import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Award, TrendingUp, Clock, Target } from 'lucide-react';

const progressData = [
  { date: '2024-03-01', progress: 65, skills: 45 },
  { date: '2024-03-02', progress: 68, skills: 48 },
  { date: '2024-03-03', progress: 75, skills: 52 },
  { date: '2024-03-04', progress: 78, skills: 58 },
  { date: '2024-03-05', progress: 82, skills: 65 },
  { date: '2024-03-06', progress: 85, skills: 72 },
  { date: '2024-03-07', progress: 89, skills: 78 },
];

const metrics = [
  { icon: Award, label: 'Skills Growth', value: '+24%', trend: 'up' },
  { icon: TrendingUp, label: 'Project Completion', value: '92%', trend: 'up' },
  { icon: Clock, label: 'Learning Hours', value: '128 hrs', trend: 'neutral' },
  { icon: Target, label: 'Goals Achieved', value: '12/15', trend: 'up' },
];

export default function Progress() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Career Progress</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map(({ icon: Icon, label, value, trend }) => (
          <div key={label} className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                <Icon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <span className={`text-lg font-semibold ${
                trend === 'up' ? 'text-green-600 dark:text-green-400' :
                trend === 'down' ? 'text-red-600 dark:text-red-400' :
                'text-gray-900 dark:text-white'
              }`}>
                {value}
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Overall Progress</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="date"
                  stroke="#6B7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="progress" 
                  stroke="#4F46E5"
                  strokeWidth={2}
                  name="Career Progress"
                  dot={{ stroke: '#4F46E5', fill: '#4F46E5' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="skills" 
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  name="Skills Progress"
                  dot={{ stroke: '#8B5CF6', fill: '#8B5CF6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { skill: 'AI/ML', level: 85 },
                { skill: 'Data Science', level: 75 },
                { skill: 'Cloud', level: 70 },
                { skill: 'DevOps', level: 65 },
                { skill: 'Backend', level: 80 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="skill"
                  stroke="#6B7280"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="#6B7280"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#F3F4F6'
                  }}
                />
                <Bar 
                  dataKey="level" 
                  fill="#4F46E5"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}