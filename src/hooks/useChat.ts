import { useState, useCallback, useEffect } from 'react';
import { Message, Conversation } from '../types/chat';

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [lastLogNumber, setLastLogNumber] = useState(101);

  // Create default conversation on mount
  useEffect(() => {
    if (conversations.length === 0) {
      const defaultConversation: Conversation = {
        id: 'default',
        title: 'Log Book 101',
        messages: [],
        createdAt: new Date(),
        updatedAt: new Date()
      };
      setConversations([defaultConversation]);
      setCurrentConversation(defaultConversation);
    }
  }, []);

  const createNewConversation = useCallback(() => {
    const newLogNumber = lastLogNumber + 1;
    setLastLogNumber(newLogNumber);
    
    const newConversation: Conversation = {
      id: Date.now().toString(),
      title: `Log Book ${newLogNumber}`,
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setConversations(prev => [newConversation, ...prev]);
    setCurrentConversation(newConversation);
    return newConversation;
  }, [lastLogNumber]);

  const deleteConversation = useCallback((id: string) => {
    if (id === 'default') return; // Prevent deleting default conversation
    setConversations(prev => prev.filter(conv => conv.id !== id));
    if (currentConversation?.id === id) {
      const defaultConv = conversations.find(c => c.id === 'default');
      setCurrentConversation(defaultConv || null);
    }
  }, [currentConversation, conversations]);

  const sendMessage = useCallback((content: string) => {
    const conversation = currentConversation || conversations.find(c => c.id === 'default');
    if (!conversation) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setCurrentConversation(prev => {
      if (!prev) return conversation;
      return {
        ...prev,
        messages: [...prev.messages, userMessage],
        updatedAt: new Date()
      };
    });

    setConversations(prev => 
      prev.map(conv => 
        conv.id === conversation.id 
          ? { ...conv, messages: [...conv.messages, userMessage], updatedAt: new Date() }
          : conv
      )
    );

    // Show typing animation
    setIsTyping(true);

    // Simulate AI response after 3 seconds
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but the chat functionality is currently under development. We're working hard to bring you an intelligent career assistant soon. In the meantime, you can explore your career progress and insights in the profile section.",
        sender: 'ai',
        timestamp: new Date()
      };

      setIsTyping(false);

      setCurrentConversation(prev => {
        if (!prev) return conversation;
        return {
          ...prev,
          messages: [...prev.messages, aiResponse],
          updatedAt: new Date()
        };
      });

      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversation.id 
            ? { ...conv, messages: [...conv.messages, aiResponse], updatedAt: new Date() }
            : conv
        )
      );
    }, 3000);
  }, [currentConversation, conversations]);

  return {
    conversations,
    currentConversation,
    createNewConversation,
    deleteConversation,
    sendMessage,
    setCurrentConversation,
    isTyping
  };
}