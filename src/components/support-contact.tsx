import React, { useState } from 'react';
import { Mail, MessageCircle, HelpCircle, Phone, Send } from 'lucide-react';

const SupportContact = () => {
  const [messageType, setMessageType] = useState('general');
  
  const faqs = [
    {
      q: "How do I download my resume?",
      a: "Click the 'Download' button in the resume builder. You can choose PDF or Word format."
    },
    {
      q: "Can I create multiple versions of my resume?",
      a: "Yes, Pro users can create unlimited resume versions for different job applications."
    },
    {
      q: "How does the ATS optimization work?",
      a: "Our AI analyzes job descriptions and suggests keywords to improve your resume's visibility."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Contact Options */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              title: 'Email Support',
              description: '24/7 email support for all users',
              icon: Mail,
              action: 'Send Email',
              color: 'blue'
            },
            {
              title: 'Live Chat',
              description: 'Chat with our support team',
              icon: MessageCircle,
              action: 'Start Chat',
              color: 'green'
            },
            {
              title: 'Help Center',
              description: 'Browse our knowledge base',
              icon: HelpCircle,
              action: 'View Articles',
              color: 'purple'
            }
          ].map((option) => (
            <div key={option.title} className="bg-white p-6 rounded-lg shadow">
              <div className={`inline-block p-3 rounded-lg bg-${option.color}-100 mb-4`}>
                <option.icon className={`h-6 w-6 text-${option.color}-600`} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <button className={`text-${option.color}-600 font-medium hover:text-${option.color}-700`}>
                {option.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message Type
                </label>
                <select
                  value={messageType}
                  onChange={(e) => setMessageType(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
              <button className="text-blue-600 font-medium hover:text-blue-700">
                View All FAQs
              </button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <div className="flex items-center">
            <Phone className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-medium text-gray-900">Need urgent help?</h3>
              <p className="text-gray-600">
                Pro users can call us at <span className="font-medium">1-800-RESUME</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;