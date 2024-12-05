import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Daily Goal Achieved',
      message: 'Congratulations! You\'ve completed your daily learning goal.',
      time: '2 hours ago',
      read: false
    },
    {
      id: '2',
      title: 'New Course Available',
      message: 'A new AI & ML course has been added to your recommendations.',
      time: '5 hours ago',
      read: false
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n =>
      n.id === id ? { ...n, read: true } : n
    ));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 relative"
      >
        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg cursor-pointer ${
                      notification.read
                        ? 'bg-gray-50 dark:bg-gray-700'
                        : 'bg-indigo-50 dark:bg-indigo-900/30'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                        {notification.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {notification.message}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 dark:text-gray-400">
                  No new notifications
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}