import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Company</h3>
            <p className="text-gray-300 mb-4">
              Boosting your online reputation with genuine reviews since 2015.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.968.273 2.66.965.692.692.916 1.595.965 2.66.047 1.024.06 1.378.06 3.808s-.013 2.784-.06 3.808c-.049 1.065-.273 1.968-.965 2.66-.692.692-1.595.916-2.66.965-1.024.047-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.065-.049-1.968-.273-2.66-.965-.692-.692-.916-1.595-.965-2.66-.047-1.024-.06-1.378-.06-3.808s.013-2.784.06-3.808c.049-1.065.273-1.968.965-2.66.692-.692 1.595-.916 2.66-.965 1.024-.047 1.378-.06 3.808-.06zm0 1.5c-2.226 0-2.45.01-3.296.06-.839.051-1.315.24-1.666.49-.351.249-.59.655-.639 1.173-.05.39-.06.91-.06 1.79 0 .88.01 1.4.06 1.79.05.518.288.924.639 1.173.351.249.827.44 1.666.49.846.05 1.07.06 3.296.06 2.226 0 2.45-.01 3.296-.06.839-.051 1.315-.24 1.666-.49.351-.249.59-.655.639-1.173.05-.39.06-.91.06-1.79 0-.88-.01-1.4-.06-1.79-.05-.518-.288-.924-.639-1.173-.351-.249-.827-.44-1.666-.49-.846-.05-1.07-.06-3.296-.06zm0 3.102c.426 0 .774.347.774.774 0 .426-.347.774-.774.774-.426 0-.774-.347-.774-.774 0-.426.347-.774.774-.774z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Links</h3>
            <ul className="text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates and offers directly in your inbox.
            </p>
            <form action="#" method="POST">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-gray-400 mt-8">
        <p>&copy; 2025 BeingxBot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
