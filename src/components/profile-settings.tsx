import React, { useState } from 'react';
import { User, Mail, Lock, CreditCard, Bell, Globe, ChevronRight } from 'lucide-react';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [notifications, setNotifications] = useState({
    email: true,
    applications: false,
    updates: true
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Lock }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white shadow rounded-lg p-2">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-4 py-2 rounded-md mb-1 ${
                    activeTab === tab.id 
                      ? 'bg-blue-50 text-blue-700' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white shadow rounded-lg p-6">
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="New York, USA"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Subscription</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium text-blue-900">Current Plan: Pro</h3>
                      <p className="text-blue-700">Billing monthly • $15/month</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Change Plan
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-medium mb-4">Billing History</h3>
                  <div className="space-y-4">
                    {[
                      { date: 'Dec 1, 2024', amount: '$15.00' },
                      { date: 'Nov 1, 2024', amount: '$15.00' }
                    ].map((bill, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-gray-600">{bill.date}</span>
                        <span className="text-gray-900">{bill.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  {[
                    { id: 'email', label: 'Email Notifications', description: 'Receive updates about your resume views' },
                    { id: 'applications', label: 'Job Applications', description: 'Get notified about new matching jobs' },
                    { id: 'updates', label: 'Product Updates', description: 'Learn about new features and improvements' }
                  ].map(setting => (
                    <div key={setting.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-900">{setting.label}</h3>
                        <p className="text-gray-500">{setting.description}</p>
                      </div>
                      <button
                        onClick={() => setNotifications(prev => ({
                          ...prev,
                          [setting.id]: !prev[setting.id]
                        }))}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                          notifications[setting.id] ? 'bg-blue-600' : 'bg-gray-200'
                        }`}
                      >
                        <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          notifications[setting.id] ? 'translate-x-5' : 'translate-x-0'
                        }`} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-bold mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Current Password</label>
                    <input
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">New Password</label>
                    <input
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
                    <input
                      type="password"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Update Password
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;