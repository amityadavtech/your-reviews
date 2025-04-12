import React, { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer web development, design, SEO, and digital marketing services.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "It typically takes 2–4 weeks depending on the complexity and requirements.",
  },
  {
    question: "Do you provide support after website delivery?",
    answer: "Yes, we offer maintenance and support packages post-delivery.",
  },
  // Add more FAQs as needed
];

const FAQSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-lg text-blue-600">{faq.question}</span>
                <svg
                  className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${
                    activeAccordion === index ? "rotate-180" : "rotate-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeAccordion === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
