import React, { useState } from 'react';
import { BrainCircuit, Send } from 'lucide-react';
import { useChat } from '../contexts/ChatContext';

export default function Chat() {
  const { currentConversation, sendMessage, isTyping } = useChat();
  const [input, setInput] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {currentConversation?.messages.length === 0 ? (
          <div className="text-center py-8">
            <BrainCircuit className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Basil.AI</h2>
            <p className="text-gray-600">Your personal AI career assistant</p>
            <div className="mt-6 space-y-2 text-gray-600">
              <p>You can ask me about:</p>
              <ul className="list-disc list-inside">
                <li>Career planning and development</li>
                <li>Industry trends and insights</li>
                <li>Skill development recommendations</li>
                <li>Job market analysis</li>
                <li>Professional networking strategies</li>
              </ul>
            </div>
          </div>
        ) : (
          currentConversation.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === 'user'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-6 py-2 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
}