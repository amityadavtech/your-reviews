import React from "react";
import { useState } from "react";

const Navbar: React.FC = () => {
    // Ensure activeAccordion can be a number or null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Define setMobileMenuOpen here


  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
    setMobileMenuOpen(false); // Close the mobile menu after scrolling
  };
    return (
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

    );
};

export default Navbar;
