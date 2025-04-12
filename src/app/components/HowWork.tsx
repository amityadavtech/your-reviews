import React from 'react';

const HowWork: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our simple process delivers authentic reviews that enhance your online presence
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
            number: 1,
            title: 'Choose Your Package',
            description: 'Select from our range of review packages tailored to your business needs and budget.'
          }, {
            number: 2,
            title: 'Provide Details',
            description: 'Share information about your product or service to help our reviewers create authentic feedback.'
          }, {
            number: 3,
            title: 'Watch Reviews Roll In',
            description: 'Sit back as genuine reviews start appearing, boosting your credibility and online presence.'
          }].map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold absolute -top-6 left-1/2 transform -translate-x-1/2">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
