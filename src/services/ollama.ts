import axios from 'axios';

const OLLAMA_API_ENDPOINT = import.meta.env.VITE_OLLAMA_API_ENDPOINT || 'http://localhost:11434';

export class OllamaService {
  private baseUrl: string;
  private model: string;
  
  constructor(model: string = 'llama3') {
    this.baseUrl = OLLAMA_API_ENDPOINT;
    this.model = model;
  }

  private async makeRequest(endpoint: string, data: any) {
    const response = await axios.post(`${this.baseUrl}${endpoint}`, data);
    return response.data;
  }

  private async generateCompletion(prompt: string, system?: string): Promise<string> {
    try {
      const response = await this.makeRequest('/api/generate', {
        model: this.model,
        prompt: prompt,
        system: system || `You are Basil AI, a career guidance assistant. Your role is to help users with 
                         professional development, career planning, and skill growth. Provide actionable
                         advice based on current industry trends and best practices.`,
        stream: false
      });

      return response.response;
    } catch (error) {
      console.error('Error generating response:', error);
      throw error;
    }
  }

  async sendMessage(conversation: any, content: string): Promise<string> {
    try {
      console.log('Sending message to Ollama:', {
        messageLength: content.length,
        conversationLength: conversation.messages.length
      });

      const systemPrompt = `You are a highly capable career guidance AI assistant powered by Llama 3. You excel at providing detailed, nuanced advice while maintaining a professional and engaging tone. When formatting responses:

1. Use clear markdown structure with proper headings (# for main titles, ## for sections)
2. Ensure good visual spacing between sections (double newline)
3. Use bullet points and numbered lists appropriately
4. Emphasize key points with **bold** text
5. Use \`code blocks\` for technical terms or specific tools
6. Include relevant examples and practical steps
7. Keep responses focused and actionable

Your responses should demonstrate:
- Deep understanding of modern career landscapes
- Up-to-date industry knowledge
- Practical, actionable advice
- Clear prioritization of recommendations
- Empathy and understanding of career challenges`;

      const messages = conversation.messages.map((msg: any) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      const response = await this.makeRequest('/api/generate', {
        model: this.model,
        prompt: content,
        system: systemPrompt,
        stream: false
      });

      if (!response.response) {
        throw new Error('Invalid response format from Ollama');
      }

      return response.response;
    } catch (error) {
      console.error('Error in sendMessage:', error);
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNREFUSED') {
          throw new Error('Unable to connect to Ollama. Please ensure the service is running.');
        }
        if (error.response?.status === 404) {
          throw new Error('The specified model is not available. Please check your Ollama installation.');
        }
        throw new Error(`Ollama API error: ${error.message}`);
      }
      throw new Error('An unexpected error occurred while communicating with Ollama');
    }
  }

  async streamResponse(prompt: string, onChunk: (text: string) => void): Promise<void> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/api/generate`,
        {
          model: this.model,
          prompt: prompt,
          stream: true
        },
        { responseType: 'stream' }
      );

      for await (const chunk of response.data) {
        try {
          const text = JSON.parse(chunk.toString()).response;
          if (text) {
            onChunk(text);
          }
        } catch (e) {
          console.error('Error parsing chunk:', e);
        }
      }
    } catch (error) {
      console.error('Error streaming response:', error);
      throw error;
    }
  }

  async getCareerAdvice(query: string): Promise<string> {
    const system = `You are a career guidance expert. Provide specific, actionable advice about career paths, 
                   skill development, and professional growth. Focus on practical steps and current industry trends.`;
    return this.generateCompletion(query, system);
  }

  async getSkillsAnalysis(skills: string[]): Promise<string> {
    const prompt = `Analyze these skills and suggest career paths and improvements:
                   Skills: ${skills.join(', ')}
                   Please provide:
                   1. Potential career paths
                   2. Skills to develop
                   3. Learning resources
                   4. Industry demand`;
    return this.generateCompletion(prompt);
  }

  async getResumeAdvice(resumeText: string): Promise<string> {
    const prompt = `Review this resume and provide improvement suggestions:
                   ${resumeText}
                   Please analyze:
                   1. Content and structure
                   2. Impact and achievements
                   3. Keywords and optimization
                   4. Areas for improvement`;
    return this.generateCompletion(prompt);
  }

  async getInterviewPrep(position: string): Promise<string> {
    const prompt = `Prepare me for an interview for the position of ${position}.
                   Include:
                   1. Common interview questions
                   2. Key skills to highlight
                   3. Questions to ask the interviewer
                   4. Industry-specific preparation tips`;
    return this.generateCompletion(prompt);
  }
}
