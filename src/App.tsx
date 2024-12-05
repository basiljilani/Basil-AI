import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ChatLayout from './layouts/ChatLayout';
import ProfileLayout from './layouts/ProfileLayout';
import Landing from './pages/Landing';
import Chat from './pages/Chat';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import News from './pages/News';
import Goals from './pages/Goals';
import Community from './pages/Community';
import Settings from './pages/Settings';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<ChatLayout />}>
            <Route index element={<Chat />} />
          </Route>
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="progress" element={<Progress />} />
            <Route path="news" element={<News />} />
            <Route path="goals" element={<Goals />} />
            <Route path="community" element={<Community />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;