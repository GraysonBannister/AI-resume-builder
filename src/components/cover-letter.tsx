import React, { useState } from 'react';
import { FileText, Upload, Sparkles, Copy, Download, Loader } from 'lucide-react';

const CoverLetterGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState('');

  const generateCoverLetter = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setContent(`Dear Hiring Manager,

I am writing to express my strong interest in the Software Engineer position at [Company Name]. With my background in full-stack development and passion for creating innovative solutions, I believe I would be a valuable addition to your team.

[AI-generated content would continue here...]`);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="md:flex md:gap-6">
          {/* Input Section */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Generate Cover Letter</h2>
              
              {/* Job Description Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <Upload className="h-8 w-8 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                      Paste job description or upload file
                    </p>
                    <input
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <button className="mt-2 px-4 py-2 text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100">
                      Upload File
                    </button>
                  </div>
                </div>
              </div>

              {/* Tone Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Writing Tone
                </label>
                <select className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                  <option>Professional</option>
                  <option>Enthusiastic</option>
                  <option>Confident</option>
                  <option>Creative</option>
                </select>
              </div>

              {/* Focus Points */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Key Points to Emphasize
                </label>
                <div className="space-y-2">
                  {['Technical Skills', 'Leadership', 'Project Experience', 'Cultural Fit'].map((point) => (
                    <label key={point} className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">{point}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={generateCoverLetter}
                disabled={isGenerating}
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {isGenerating ? (
                  <Loader className="h-5 w-5 animate-spin mr-2" />
                ) : (
                  <Sparkles className="h-5 w-5 mr-2" />
                )}
                {isGenerating ? 'Generating...' : 'Generate Cover Letter'}
              </button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="mt-6 md:mt-0 md:w-1/2">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900">Preview</h2>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
                    <Copy className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="prose max-w-none">
                {content ? (
                  <div className="whitespace-pre-wrap">{content}</div>
                ) : (
                  <div className="text-center text-gray-500 py-12">
                    <FileText className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2">Your cover letter will appear here</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;