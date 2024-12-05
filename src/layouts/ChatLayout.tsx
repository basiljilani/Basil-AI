import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BrainCircuit, User, Settings } from 'lucide-react';
import { useChat } from '../hooks/useChat';
import ConversationList from '../components/ConversationList';
import ChatMessage from '../components/ChatMessage';
import TypingAnimation from '../components/TypingAnimation';

export default function ChatLayout() {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const {
    conversations,
    currentConversation,
    createNewConversation,
    deleteConversation,
    sendMessage,
    setCurrentConversation,
    isTyping
  } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(message);
    setMessage('');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left sidebar */}
      <div className="w-64 bg-gray-900 text-white p-4 flex flex-col">
        <div className="flex justify-center mb-8">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300"
          >
            <BrainCircuit className="h-8 w-8" />
            <span className="text-xl font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-400 hover:to-purple-400 transition-all duration-300">
              Basil.AI
            </span>
          </button>
        </div>
        <button 
          onClick={createNewConversation}
          className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg p-3 mb-4"
        >
          New Conversation
        </button>
        <div className="flex-1 overflow-auto">
          <ConversationList
            conversations={conversations}
            currentConversation={currentConversation}
            onSelect={setCurrentConversation}
            onDelete={deleteConversation}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Your Partner for a Promising Future</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/profile')} 
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <User className="h-5 w-5 text-gray-600" />
              </button>
              <button 
                onClick={() => navigate('/settings')} 
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <Settings className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Chat area */}
        <div className="flex-1 overflow-auto p-6">
          {currentConversation ? (
            <div className="max-w-3xl mx-auto space-y-6">
              {currentConversation.messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="flex space-x-4 bg-gray-50 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <BrainCircuit className="h-5 w-5 text-indigo-600" />
                    </div>
                  </div>
                  <TypingAnimation />
                </div>
              )}
            </div>
          ) : (
            <Outlet />
          )}
        </div>

        {/* Input area */}
        <div className="border-t border-gray-200 p-4">
          <div className="max-w-3xl mx-auto">
            <form className="flex space-x-4" onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about your career path..."
                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}