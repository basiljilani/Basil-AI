import React from 'react';
import { Shield } from 'lucide-react';

export default function PrivacySettings() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy & Security</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-900 dark:text-white">Data Encryption</label>
            <p className="text-sm text-gray-500 dark:text-gray-400">Enable end-to-end encryption for premium users</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-900 dark:text-white">Profile Visibility</label>
            <p className="text-sm text-gray-500 dark:text-gray-400">Show your profile in community rankings</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>
      </div>
    </div>
  );
}