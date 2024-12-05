import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Target, Users, TrendingUp, LineChart } from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/profile' },
  { icon: LineChart, label: 'Progress', path: '/profile/progress' },
  { icon: TrendingUp, label: 'Industry News', path: '/profile/news' },
  { icon: Target, label: 'Goals', path: '/profile/goals' },
  { icon: Users, label: 'Community', path: '/profile/community' }
];

export default function Sidebar({ className = '' }: SidebarProps) {
  return (
    <nav className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto ${className}`}>
      <div className="p-4">
        <div className="space-y-2">
          {navItems.map(({ icon: Icon, label, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}