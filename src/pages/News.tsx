import React, { useState } from 'react';
import { ExternalLink, Bookmark, TrendingUp, Filter, Search } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'The Rise of AI in Healthcare: New Opportunities for ML Engineers',
    source: 'TechTrends',
    date: '2024-03-07',
    category: 'Industry Trends',
    relevance: 'High',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
    excerpt: 'Discover how artificial intelligence is transforming healthcare and creating new career opportunities for ML engineers.'
  },
  {
    id: 2,
    title: 'Latest Machine Learning Frameworks: A 2024 Comparison',
    source: 'AI Weekly',
    date: '2024-03-06',
    category: 'Technical',
    relevance: 'High',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=400',
    excerpt: 'An in-depth analysis of the most popular ML frameworks and their performance benchmarks.'
  },
  {
    id: 3,
    title: 'Top AI Conferences and Events in 2024',
    source: 'AI Community',
    date: '2024-03-05',
    category: 'Events',
    relevance: 'Medium',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=400',
    excerpt: 'Stay updated with the most important AI conferences and networking opportunities this year.'
  },
];

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [relevanceFilter, setRelevanceFilter] = useState('Most Relevant');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Industry News</h1>
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
            Trending in Tech
          </span>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        {/* Search and Filters */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
              />
            </div>
            <div className="flex space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
              >
                <option>All Categories</option>
                <option>Industry Trends</option>
                <option>Technical</option>
                <option>Events</option>
              </select>
              <select
                value={relevanceFilter}
                onChange={(e) => setRelevanceFilter(e.target.value)}
                className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
              >
                <option>Most Relevant</option>
                <option>Latest</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* News Items */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {newsItems.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-48 h-32 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200">
                      {item.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Source: {item.source}
                    </span>
                    <div className="flex items-center space-x-4">
                      <button className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <Bookmark className="h-5 w-5" />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                        <ExternalLink className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}