import React from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';
const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <PlanCard
            title="Basic"
            price={99}
            features={[
              '10 Genuine Reviews',
              'Delivery within 7 days',
              'Basic review customization',
              'Email support',
            ]}
            highlight={false}
          />

          {/* Premium Plan */}
          <PlanCard
            title="Premium"
            price={249}
            features={[
              '30 Genuine Reviews',
              'Delivery within 5 days',
              'Advanced review customization',
              'Priority support',
              'Response management',
            ]}
            highlight
          />

          {/* Enterprise Plan */}
          <PlanCard
            title="Enterprise"
            price={499}
            features={[
              '75 Genuine Reviews',
              'Delivery within 3 days',
              'Full review customization',
              'Dedicated account manager',
              'Analytics & reporting',
            ]}
            highlight={false}
          />
        </div>
      </div>
    </section>
  );
};

type PlanCardProps = {
  title: string;
  price: number;
  features: string[];
  highlight?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ title, price, features, highlight }) => {
  return (
    <div
      className={`bg-white border ${
        highlight ? 'border-2 border-blue-600 shadow-lg md:scale-105' : 'border-gray-200 shadow-md'
      } rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl`}
    >
      {highlight && (
        <div className="p-1 bg-blue-600">
          <p className="text-white text-xs text-center font-bold uppercase tracking-wide">
            Most Popular
          </p>
        </div>
      )}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 text-center">{title}</h3>
        <div className="mt-4 text-center">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/ month</span>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li className="flex items-start" key={index}>
              <CheckIcon className="h-6 w-6 text-green-500 mr-2" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200">
          Select Plan
        </button>
      </div>
    </div>
  );
};

export default PricingSection;
