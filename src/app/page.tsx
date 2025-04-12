// pages/index.js
"use client";
import Head from 'next/head';
import { useState } from 'react';
import HowWork from './components/HowWork';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonial';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {

    const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
    };
  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Head>
        <title> - Premium Review Services for Your Business</title>
        <meta name="description" content="Boost your online credibility with genuine reviews. Trusted by thousands of businesses worldwide." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <Navbar />
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
                  <p className="text-gray-700 text-base mb-2">{`"This service completely transformed my business. The authentic reviews helped me gain trust and attract more customers. Highly recommended!"`}</p>
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
      <Testimonials />

      {/* FAQ Section */}
      <FAQSection />


      {/* Contact Form */}
      <ContactSection />


      {/* Footer */}
      <Footer />
    </div>
  )
}