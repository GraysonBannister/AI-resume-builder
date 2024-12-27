import React from 'react';
import { FileText, CheckCircle, Download, Globe, ArrowRight, Star } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <FileText className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AI Resume Builder</span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-gray-900">Templates</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Login / Sign Up
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Create Your Perfect Resume in Minutes with AI
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Tailored, ATS-friendly, and ready to impress recruiters
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <button className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Powerful Features for Your Success
            </h2>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'ATS Optimized',
                  description: 'Ensure your resume passes through Applicant Tracking Systems',
                  icon: CheckCircle
                },
                {
                  title: 'Custom Templates',
                  description: 'Choose from a variety of professional and creative designs',
                  icon: FileText
                },
                {
                  title: 'Easy Export',
                  description: 'Download in multiple formats or share online instantly',
                  icon: Download
                },
                {
                  title: 'Multi-language Support',
                  description: 'Create resumes in multiple languages for global opportunities',
                  icon: Globe
                },
                {
                  title: 'AI Suggestions',
                  description: 'Get real-time improvements and optimization tips',
                  icon: Star
                }
              ].map((feature) => (
                <div key={feature.title} className="flex flex-col items-center p-6 bg-white rounded-lg shadow">
                  <feature.icon className="h-12 w-12 text-blue-600" />
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {[
              {
                quote: "The AI suggestions helped me highlight achievements I would have otherwise missed. Landed my dream job!",
                author: "Sarah J.",
                role: "Software Engineer"
              },
              {
                quote: "Perfect for customizing resumes for different roles. The ATS optimization feature is a game-changer.",
                author: "Michael R.",
                role: "Marketing Manager"
              },
              {
                quote: "Created a stunning resume in minutes. The templates are professional and modern.",
                author: "Emma L.",
                role: "UX Designer"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="text-gray-600 italic mb-4">{testimonial.quote}</p>
                <div className="font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-gray-300 hover:text-white block">Features</a>
                <a href="#" className="text-gray-300 hover:text-white block">Templates</a>
                <a href="#" className="text-gray-300 hover:text-white block">Pricing</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-gray-300 hover:text-white block">Blog</a>
                <a href="#" className="text-gray-300 hover:text-white block">Guides</a>
                <a href="#" className="text-gray-300 hover:text-white block">Support</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-gray-300 hover:text-white block">About</a>
                <a href="#" className="text-gray-300 hover:text-white block">Careers</a>
                <a href="#" className="text-gray-300 hover:text-white block">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <div className="mt-4 space-y-4">
                <a href="#" className="text-gray-300 hover:text-white block">Privacy</a>
                <a href="#" className="text-gray-300 hover:text-white block">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;