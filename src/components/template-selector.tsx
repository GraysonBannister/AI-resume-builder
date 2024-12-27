import React, { useState } from 'react';
import { Search, Filter, Check } from 'lucide-react';

const TemplateSelector = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const templates = [
    { id: 1, name: 'Modern Professional', category: 'Professional', color: 'blue' },
    { id: 2, name: 'Creative Design', category: 'Creative', color: 'purple' },
    { id: 3, name: 'Executive', category: 'Professional', color: 'gray' },
    { id: 4, name: 'Tech Minimal', category: 'Tech', color: 'green' },
    { id: 5, name: 'Startup Bold', category: 'Creative', color: 'red' },
    { id: 6, name: 'Academic', category: 'Professional', color: 'indigo' }
  ];

  const categories = ['All', 'Professional', 'Creative', 'Tech'];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || template.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Choose Your Template</h1>
          <p className="mt-2 text-gray-600">Select a template that best matches your professional style</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search templates..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-md ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map(template => (
            <div
              key={template.id}
              className={`relative bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer transition-shadow hover:shadow-lg ${
                selectedTemplate?.id === template.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedTemplate(template)}
            >
              {/* Template Preview */}
              <div className={`h-64 bg-${template.color}-50 p-6`}>
                <div className="h-full border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Template Preview</span>
                </div>
              </div>
              
              {/* Template Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                    <p className="text-sm text-gray-500">{template.category}</p>
                  </div>
                  {selectedTemplate?.id === template.id && (
                    <div className="bg-blue-100 rounded-full p-1">
                      <Check className="h-5 w-5 text-blue-600" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        {selectedTemplate && (
          <div className="mt-8 flex justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Use Template
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateSelector;