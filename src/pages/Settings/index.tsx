import React from 'react';
import { Settings as SettingsIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NotificationSettings from './components/NotificationSettings';
import PrivacySettings from './components/PrivacySettings';
import AccountSettings from './components/AccountSettings';
import AppearanceSettings from './components/AppearanceSettings';
import PremiumFeatures from './components/PremiumFeatures';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <SettingsIcon className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
          </div>
          <button
            onClick={() => navigate('/chat')}
            className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Chat</span>
          </button>
        </div>
        
        <div className="grid gap-6">
          <AccountSettings />
          <AppearanceSettings />
          <NotificationSettings />
          <PrivacySettings />
          <PremiumFeatures />
        </div>
      </div>
    </div>
  );
}