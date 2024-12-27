import React from 'react';
import { Check, X } from 'lucide-react';

const PricingPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      billing: '',
      description: 'Perfect for trying out our service',
      features: [
        'Basic templates',
        'One resume',
        'Export to PDF',
        'Basic ATS optimization',
        'Email support'
      ],
      nonFeatures: [
        'Premium templates',
        'Multiple versions',
        'Cover letter generator',
        'Analytics',
        'Priority support'
      ]
    },
    {
      name: 'Pro',
      price: '15',
      billing: 'per month',
      description: 'For job seekers who want the best results',
      features: [
        'All Free features',
        'Premium templates',
        'Unlimited resumes',
        'Advanced ATS optimization',
        'Cover letter generator',
        'Analytics dashboard',
        'Priority support',
        'No watermark'
      ]
    },
    {
      name: 'Lifetime',
      price: '99',
      billing: 'one-time',
      description: 'Best value for long-term career growth',
      features: [
        'All Pro features',
        'Lifetime updates',
        'Career coaching resources',
        'Early access to new features',
        'Personal branding tools',
        'LinkedIn profile optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600">Choose the plan that's right for your career</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-gray-600">{plan.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  {plan.billing && (
                    <span className="text-gray-500 ml-2">{plan.billing}</span>
                  )}
                </p>

                <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Get Started
                </button>
              </div>

              <div className="px-6 pt-6 pb-8">
                <h3 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-4 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.nonFeatures?.map((feature) => (
                    <li key={feature} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 flex-shrink-0" />
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <div className="mt-8 grid gap-6">
              {[
                {
                  q: "Can I change plans later?",
                  a: "Yes, you can upgrade or downgrade your plan at any time."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards and PayPal."
                },
                {
                  q: "Is there a refund policy?",
                  a: "Yes, we offer a 30-day money-back guarantee for all paid plans."
                }
              ].map(({ q, a }) => (
                <div key={q}>
                  <h3 className="text-lg font-medium text-gray-900">{q}</h3>
                  <p className="mt-2 text-gray-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;