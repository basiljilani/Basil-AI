import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Message, Conversation, ChatContextType } from '../types/chat';
import { OllamaService } from '../services/ollama';

const ollamaService = new OllamaService('llama3');
const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
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

  const sendMessage = useCallback(async (content: string) => {
    const conversation = currentConversation || conversations.find(c => c.id === 'default');
    if (!conversation) return;

    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: content.trim(),
        sender: 'user',
        timestamp: new Date()
      };

      // Update UI with user message
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

      // Get response from Ollama
      const aiContent = await ollamaService.sendMessage(conversation, content);

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: aiContent,
        sender: 'ai',
        timestamp: new Date()
      };

      setIsTyping(false);

      // Update UI with AI response
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
    } catch (error) {
      console.error('Error in chat:', error);
      setIsTyping(false);
      
      let errorMessage: string;
      if (error instanceof Error) {
        errorMessage = error.message.includes('AI service')
          ? error.message
          : 'I encountered an unexpected error. Please try again later.';
      } else {
        errorMessage = 'I encountered an unexpected error. Please try again later.';
      }
      
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `# Error\n\n${errorMessage}\n\n**Troubleshooting Steps:**\n\n1. Ensure Ollama is running locally\n2. Check your internet connection\n3. Try refreshing the page\n4. If the issue persists, please try again in a few minutes`,
        sender: 'ai',
        timestamp: new Date()
      };

      setCurrentConversation(prev => {
        if (!prev) return conversation;
        return {
          ...prev,
          messages: [...prev.messages, errorResponse],
          updatedAt: new Date()
        };
      });

      setConversations(prev => 
        prev.map(conv => 
          conv.id === conversation.id 
            ? { ...conv, messages: [...conv.messages, errorResponse], updatedAt: new Date() }
            : conv
        )
      );
    }
  }, [currentConversation, conversations]);

  const value = {
    conversations,
    currentConversation,
    isTyping,
    createNewConversation,
    deleteConversation,
    sendMessage,
    setCurrentConversation,
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
