import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Message, Conversation, ChatContextType } from '../types/chat';
import { api } from '../lib/api';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [lastLogNumber, setLastLogNumber] = useState(101);

  // Load conversations on mount
  useEffect(() => {
    const loadConversations = async () => {
      try {
        const loadedConversations = await api.getConversations();
        setConversations(loadedConversations);
        if (loadedConversations.length > 0) {
          setCurrentConversation(loadedConversations[0]);
        } else {
          createNewConversation();
        }
      } catch (error) {
        console.error('Error loading conversations:', error);
        createNewConversation();
      }
    };
    loadConversations();
  }, []);

  const createNewConversation = useCallback(async () => {
    const newLogNumber = lastLogNumber + 1;
    setLastLogNumber(newLogNumber);
    
    try {
      const newConversation = await api.createConversation(`Log Book ${newLogNumber}`);
      setConversations(prev => [newConversation, ...prev]);
      setCurrentConversation(newConversation);
      return newConversation;
    } catch (error) {
      console.error('Error creating conversation:', error);
      return null;
    }
  }, [lastLogNumber]);

  const deleteConversation = useCallback((id: string) => {
    setConversations(prev => prev.filter(conv => conv.id !== id));
    if (currentConversation?.id === id) {
      const firstConv = conversations[0];
      setCurrentConversation(firstConv || null);
    }
  }, [currentConversation, conversations]);

  const sendMessage = useCallback(async (content: string) => {
    if (!currentConversation) return;

    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: content.trim(),
        sender: 'user',
        timestamp: new Date()
      };

      // Update UI optimistically
      setCurrentConversation(prev => {
        if (!prev) return null;
        return {
          ...prev,
          messages: [...prev.messages, userMessage],
          updatedAt: new Date()
        };
      });

      // Send message to backend
      const response = await api.sendMessage(currentConversation.id, content);
      
      // Load updated messages
      const updatedMessages = await api.getMessages(currentConversation.id);
      
      // Update conversation with latest messages
      setCurrentConversation(prev => {
        if (!prev) return null;
        return {
          ...prev,
          messages: updatedMessages,
          updatedAt: new Date()
        };
      });

      setConversations(prev => 
        prev.map(conv => 
          conv.id === currentConversation.id 
            ? { ...conv, messages: updatedMessages, updatedAt: new Date() }
            : conv
        )
      );

    } catch (error) {
      console.error('Error sending message:', error);
      // Revert optimistic update on error
      const originalMessages = await api.getMessages(currentConversation.id);
      setCurrentConversation(prev => {
        if (!prev) return null;
        return {
          ...prev,
          messages: originalMessages
        };
      });
    }
  }, [currentConversation]);

  const value = {
    conversations,
    currentConversation,
    isTyping,
    setCurrentConversation,
    createNewConversation,
    deleteConversation,
    sendMessage
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}
