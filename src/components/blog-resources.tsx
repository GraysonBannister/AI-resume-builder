import React, { useState } from 'react';
import { Search, Tag, Clock, ChevronRight, FileText } from 'lucide-react';

const BlogResources = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Top 10 Resume Mistakes to Avoid in 2024',
      category: 'Resume Tips',
      readTime: '5 min',
      image: '/api/placeholder/800/400',
      preview: 'Learn about common resume mistakes and how to fix them...'
    },
    {
      id: 2,
      title: 'Mastering the Technical Interview',
      category: 'Interviews',
      readTime: '8 min',
      image: '/api/placeholder/800/400',
      preview: 'Prepare for technical interviews with these proven strategies...'
    },
    {
      id: 3,
      title: 'Using AI to Optimize Your Job Search',
      category: 'Job Search',
      readTime: '6 min',
      image: '/api/placeholder/800/400',
      preview: 'Leverage AI tools to streamline your job search process...'
    }
  ];

  const categories = ['All', 'Resume Tips', 'Interviews', 'Job Search', 'Career Growth'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-blue-600 rounded-2xl p-8 mb-8 text-white">
          <h1 className="text-3xl font-bold mb-4">Career Resources & Guides</h1>
          <p className="text-blue-100 mb-6">Expert advice to help you land your dream job</p>
          <div className="relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="/api/placeholder/800/400"
                alt="Featured article"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Tag className="h-4 w-4 mr-1" />
                <span>Career Growth</span>
                <Clock className="h-4 w-4 ml-4 mr-1" />
                <span>10 min read</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How to Navigate Career Changes in 2024
              </h2>
              <p className="text-gray-600 mb-6">
                Comprehensive guide on making successful career transitions...
              </p>
              <button className="flex items-center text-blue-600 hover:text-blue-700">
                Read More <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Tag className="h-4 w-4 mr-1" />
                  <span>{article.category}</span>
                  <Clock className="h-4 w-4 ml-4 mr-1" />
                  <span>{article.readTime} read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.preview}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  Read More <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Resources Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Free Resources</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Resume Templates',
                description: 'Download professionally designed resume templates',
                icon: FileText
              },
              {
                title: 'Interview Prep Guide',
                description: 'Complete guide to ace your next interview',
                icon: FileText
              },
              {
                title: 'Skills Assessment',
                description: 'Evaluate your professional skills',
                icon: FileText
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <resource.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <button className="flex items-center text-blue-600 hover:text-blue-700">
                  Download <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogResources;