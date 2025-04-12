// pages/index.js
"use client";
import Head from 'next/head';
import { useState } from 'react';
import HowWork from './components/HowWork';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonial';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  // Ensure activeAccordion can be a number or null
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Define setMobileMenuOpen here

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
    setMobileMenuOpen(false); // Close the mobile menu after scrolling
  };
  const faqs = [
    {
      question: "How do you ensure the reviews are genuine?",
      answer: "Our network consists of real users who provide honest feedback based on their experience with your product or service. We maintain high standards for review quality and authenticity."
    },
    {
      question: "How long does it take to see the reviews?",
      answer: "Reviews typically start appearing within 24-48 hours after your order is processed. The timeline may vary depending on the package you choose."
    },
    {
      question: "Can I specify what I want in the reviews?",
      answer: "Yes, you can provide guidelines for the reviews. However, to maintain authenticity, reviewers will use their own words and honest opinions within those guidelines."
    },
    {
      question: "Are these reviews against platform policies?",
      answer: "Our services are designed to help businesses gather authentic feedback from real users. We adhere to ethical practices and recommend familiarizing yourself with each platform's terms of service."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and cryptocurrency payments. All transactions are secure and protected."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Head>
        <title> - Premium Review Services for Your Business</title>
        <meta name="description" content="Boost your online credibility with genuine reviews. Trusted by thousands of businesses worldwide." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">YourCompany</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact Us</button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Home</button>
              <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">How It Works</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Pricing</button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">Testimonials</button>
              <button onClick={() => scrollToSection('faq')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-600 hover:text-white  rounded-md">Contact Us</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 md:py-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between ">
            <div className="md:w-1/2 md:pr-10 mb-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Boost Your Online Reputation with Genuine Reviews</h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8">Get authentic reviews for your business from real users. Enhance your online credibility and attract more customers.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('pricing')} className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-200">Get Started</button>
                <button onClick={() => scrollToSection('how-it-works')} className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">Learn More</button>
              </div>
            </div>
            <div className=" md:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 -top-4 bg-blue-400 rounded-full w-20 h-20 opacity-20"></div>
                <div className="absolute -right-4 -bottom-4 bg-blue-400 rounded-full w-12 h-12 opacity-20"></div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-4">
                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-base mb-2">"This service completely transformed my business. The authentic reviews helped me gain trust and attract more customers. Highly recommended!"</p>
                  <div className="flex items-center">
                    <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-semibold">JD</span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium">John Doe</p>
                      <p className="text-gray-500 text-sm">Small Business Owner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowWork />

      {/* Pricing Section */}

      <PricingSection />
      {/* Testimonials Section */}
      <Testimonials/>
     
      {/* FAQ Section */}
      <FAQSection/>
   

      {/* Contact Form */}
      <ContactSection/>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4"></h3>
              <p className="text-gray-300 mb-4">Boosting your online reputation with genuine reviews since 2015.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.968.273 2.66.965.692.692.916 1.595.965 2.66.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.049 1.065-.273 1.968-.965 2.66-.692.692-1.595.916-2.66.965-1.024.047-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.065-.049-1.968-.273-2.66-.965-.692-.692-.916-1.595-.965-2.66-.047-1.024-.06-1.378-.06-3.808s.013-2.784.06-3.808c.049-1.065.273-1.968.965-2.66.692-.692 1.595-.916 2.66-.965 1.024-.047 1.378-.06 3.808-.06zm0 1.5c-2.226 0-2.45.01-3.296.06-.839.051-1.315.24-1.666.49-.351.249-.59.655-.639 1.173-.05.39-.06.91-.06 1.79 0 .88.01 1.4.06 1.79.05.518.288.924.639 1.173.351.249.827.44 1.666.49.846.05 1.07.06 3.296.06 2.226 0 2.45-.01 3.296-.06.839-.051 1.315-.24 1.666-.49.351-.249.59-.655.639-1.173.05-.39.06-.91.06-1.79 0-.88-.01-1.4-.06-1.79-.05-.518-.288-.924-.639-1.173-.351-.249-.827-.44-1.666-.49-.846-.05-1.07-.06-3.296-.06zm0 3.102c.426 0 .774.347.774.774 0 .426-.347.774-.774.774-.426 0-.774-.347-.774-.774 0-.426.347-.774.774-.774z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">Links</h3>
              <ul className="text-gray-300">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe</h3>
              <p className="text-gray-300 mb-4">Get the latest updates and offers directly in your inbox.</p>
              <form action="#" method="POST">
                <input type="email" name="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-lg text-gray-800" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 mt-8">
          <p>&copy; 2025 . All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}