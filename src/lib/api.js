// API configuration
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-vps-ip:3000/api'  // Replace with your VPS IP or domain
  : 'http://localhost:3000/api';

// API client functions
export const api = {
  // Conversations
  async createConversation(title) {
    const response = await fetch(`${API_BASE_URL}/conversations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    return response.json();
  },

  async getConversations() {
    const response = await fetch(`${API_BASE_URL}/conversations`);
    return response.json();
  },

  // Messages
  async sendMessage(conversationId, content) {
    const response = await fetch(`${API_BASE_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        conversation_id: conversationId,
        role: 'user',
        content,
      }),
    });
    return response.json();
  },

  async getMessages(conversationId) {
    const response = await fetch(`${API_BASE_URL}/conversations/${conversationId}/messages`);
    return response.json();
  },
};
