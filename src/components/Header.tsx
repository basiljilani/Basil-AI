import React from 'react';
import { BrainCircuit, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import NotificationPopover from './NotificationPopover';

interface HeaderProps {
  className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profile');

  return (
    <header className={`bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <BrainCircuit className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Basil.AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <NotificationPopover />
            {isProfilePage ? (
              <button
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Chat</span>
              </button>
            ) : (
              <button
                onClick={() => navigate('/settings')}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BrainCircuit className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}