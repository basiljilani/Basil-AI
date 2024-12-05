import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function ProfileLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header className="fixed top-0 left-0 right-0 z-50" />
      <div className="flex pt-16"> {/* Add padding-top to account for fixed header */}
        <Sidebar className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64" />
        <main className="flex-1 ml-64 p-8 overflow-y-auto min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}