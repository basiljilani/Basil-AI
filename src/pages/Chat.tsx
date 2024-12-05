import React from 'react';
import { BrainCircuit } from 'lucide-react';

export default function Chat() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center py-8">
        <BrainCircuit className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Basil.AI</h2>
        <p className="text-gray-600">Your personal AI career assistant</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex space-x-4">
            <div className="flex-shrink-0">
              <BrainCircuit className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-gray-900">
                Hello! I'm here to help guide your career journey. You can ask me about:
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Career planning and development</li>
                <li>• Industry trends and insights</li>
                <li>• Skill development recommendations</li>
                <li>• Job market analysis</li>
                <li>• Professional networking strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}