import React from 'react';
import { MessageSquare, Trash2 } from 'lucide-react';
import { Conversation } from '../types/chat';

interface ConversationListProps {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  onSelect: (conversation: Conversation) => void;
  onDelete: (id: string) => void;
}

export default function ConversationList({ 
  conversations, 
  currentConversation, 
  onSelect, 
  onDelete 
}: ConversationListProps) {
  return (
    <div className="space-y-2">
      {conversations.map(conversation => (
        <div
          key={conversation.id}
          className={`flex items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-white/20 ${
            currentConversation?.id === conversation.id ? 'bg-white/20' : ''
          }`}
          onClick={() => onSelect(conversation)}
        >
          <div className="flex items-center space-x-3">
            <MessageSquare className="h-5 w-5" />
            <span className="truncate">{conversation.title}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(conversation.id);
            }}
            className="p-1 rounded-full hover:bg-white/10"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}