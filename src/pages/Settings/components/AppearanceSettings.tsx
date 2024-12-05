import React from 'react';
import { Palette, Sun, Moon, Monitor, Type } from 'lucide-react';
import { useTheme } from '../../../contexts/ThemeContext';

export default function AppearanceSettings() {
  const { theme, fontSize, setTheme, setFontSize } = useTheme();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Palette className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Display Preferences</h2>
      </div>

      <div className="space-y-8">
        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            <Sun className="h-4 w-4" />
            <span>Theme Selection</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'light', icon: Sun, label: 'Light Mode', desc: 'Bright and clear' },
              { value: 'dark', icon: Moon, label: 'Dark Mode', desc: 'Easier on the eyes' },
              { value: 'system', icon: Monitor, label: 'System', desc: 'Match your device' }
            ].map(({ value, icon: Icon, label, desc }) => (
              <button
                key={value}
                onClick={() => setTheme(value as 'light' | 'dark' | 'system')}
                className={`relative flex flex-col items-center p-4 rounded-lg transition-all ${
                  theme === value
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 border-2 border-indigo-600 dark:border-indigo-400'
                    : 'border-2 border-transparent hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <Icon className={`h-6 w-6 mb-2 ${
                  theme === value
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400'
                }`} />
                <span className={`text-sm font-medium mb-1 ${
                  theme === value
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-gray-300'
                }`}>
                  {label}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{desc}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
            <Type className="h-4 w-4" />
            <span>Text Size</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: 'small', label: 'Compact', sample: 'Aa' },
              { value: 'medium', label: 'Default', sample: 'Aa' },
              { value: 'large', label: 'Comfortable', sample: 'Aa' }
            ].map(({ value, label, sample }) => (
              <button
                key={value}
                onClick={() => setFontSize(value as 'small' | 'medium' | 'large')}
                className={`relative flex flex-col items-center p-4 rounded-lg transition-all ${
                  fontSize === value
                    ? 'bg-indigo-50 dark:bg-indigo-900/50 border-2 border-indigo-600 dark:border-indigo-400'
                    : 'border-2 border-transparent hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className={`${
                  value === 'small' ? 'text-lg' : value === 'medium' ? 'text-xl' : 'text-2xl'
                } font-semibold mb-2 ${
                  fontSize === value
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-gray-300'
                }`}>
                  {sample}
                </span>
                <span className={`text-sm font-medium ${
                  fontSize === value
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-900 dark:text-gray-300'
                }`}>
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}