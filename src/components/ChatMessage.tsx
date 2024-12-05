import React from 'react';
import { Message } from '../types/chat';
import { BrainCircuit, User } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.sender === 'ai';

  return (
    <div className={`flex space-x-4 ${isAI ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      <div className="flex-shrink-0">
        {isAI ? (
          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <BrainCircuit className="h-5 w-5 text-indigo-600" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="h-5 w-5 text-gray-600" />
          </div>
        )}
      </div>
      <div className="flex-1">
        <p className="text-gray-900">{message.content}</p>
        <span className="text-xs text-gray-500 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
}