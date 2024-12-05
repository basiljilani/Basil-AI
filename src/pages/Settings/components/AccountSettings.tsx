import React, { useState } from 'react';
import { User, Shield, Mail, Key, Eye, EyeOff } from 'lucide-react';

export default function AccountSettings() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <User className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Account Settings</h2>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Mail className="h-4 w-4" />
              <span className="text-sm font-medium">Email Address</span>
            </div>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                placeholder="your@email.com"
              />
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
              >
                Update
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Key className="h-4 w-4" />
              <span className="text-sm font-medium">Password</span>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 pr-24 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-transparent"
                placeholder="••••••••"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
                <button 
                  className="px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  Change
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Account Security</h3>
          </div>
          <div className="space-y-4">
            <button className="w-full text-left px-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security to your account</p>
                </div>
                <span className="text-sm text-red-600 dark:text-red-400">Not Enabled</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}