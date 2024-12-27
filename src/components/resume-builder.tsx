import React, { useState } from 'react';
import { 
  FileText, 
  Save, 
  Download, 
  Plus, 
  Trash2, 
  MessageSquare,
  Eye,
  EyeOff,
  Settings
} from 'lucide-react';

const ResumeBuilder = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const [showPreview, setShowPreview] = useState(true);
  const [formData, setFormData] = useState({
    personal: { name: '', email: '', phone: '', location: '' },
    experience: [],
    education: [],
    skills: []
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [field]: value }
    }));
  };

  const addListItem = (section) => {
    const newItem = section === 'experience' 
      ? { company: '', position: '', startDate: '', endDate: '', description: '' }
      : { school: '', degree: '', field: '', graduationDate: '' };
    
    setFormData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeListItem = (section, index) => {
    setFormData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">Resume Builder</h1>
            </div>
            <div className="flex space-x-4">
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200">
                <Save className="h-5 w-5 mr-2" />
                Save
              </button>
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Download className="h-5 w-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Left Sidebar - Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <nav className="space-y-2">
                {['personal', 'experience', 'education', 'skills'].map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      activeSection === section 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex gap-6">
            {/* Form Section */}
            <div className={`flex-1 bg-white rounded-lg shadow p-6 ${!showPreview ? 'w-full' : ''}`}>
              {activeSection === 'personal' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={formData.personal.name}
                        onChange={(e) => handleInputChange('personal', 'name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        value={formData.personal.email}
                        onChange={(e) => handleInputChange('personal', 'email', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Work Experience</h2>
                    <button
                      onClick={() => addListItem('experience')}
                      className="flex items-center px-3 py-2 bg-blue-50 text-blue-700 rounded-md hover:bg-blue-100"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </button>
                  </div>
                  {formData.experience.map((exp, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-medium text-gray-900">Experience {index + 1}</h3>
                        <button
                          onClick={() => removeListItem('experience', index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Company</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={exp.company}
                            onChange={(e) => {
                              const newExp = [...formData.experience];
                              newExp[index].company = e.target.value;
                              setFormData({ ...formData, experience: newExp });
                            }}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Position</label>
                          <input
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            value={exp.position}
                            onChange={(e) => {
                              const newExp = [...formData.experience];
                              newExp[index].position = e.target.value;
                              setFormData({ ...formData, experience: newExp });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Preview Section */}
            {showPreview && (
              <div className="w-96 bg-white rounded-lg shadow">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900">Preview</h2>
                  <button
                    onClick={() => setShowPreview(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <EyeOff className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  {/* Preview content */}
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{formData.personal.name || 'Your Name'}</h1>
                      <p className="text-gray-600">{formData.personal.email || 'email@example.com'}</p>
                    </div>
                    {formData.experience.length > 0 && (
                      <div>
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Experience</h2>
                        {formData.experience.map((exp, index) => (
                          <div key={index} className="mb-4">
                            <h3 className="font-medium">{exp.position || 'Position'}</h3>
                            <p className="text-gray-600">{exp.company || 'Company'}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar - AI Suggestions */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-gray-900">AI Suggestions</h2>
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-700">
                    Try adding specific achievements with numerical results to make your experience more impactful.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-md">
                  <p className="text-sm text-blue-700">
                    Consider adding relevant keywords from the job description to improve ATS matching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;