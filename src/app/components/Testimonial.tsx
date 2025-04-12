import React from "react";

const StarIcon = () => (
  <svg
    className="h-5 w-5 text-yellow-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "BeingxBot transformed our online presence. The reviews were
              genuine and helped increase our sales by 30% in just one month.
              Incredible service!"
            </p>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">SM</span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Sarah Mitchell</p>
                <p className="text-gray-500 text-sm">E-commerce Store</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "Working with BeingxBot was a game-changer! Their solutions
              helped us grow our business beyond expectations."
            </p>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">JD</span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">John Doe</p>
                <p className="text-gray-500 text-sm">Tech Startup</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className="text-gray-700 mb-6">
              "Our experience with BeingxBot was fantastic! Their team is
              professional, responsive, and truly dedicated to results."
            </p>
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">AB</span>
              </div>
              <div>
                <p className="text-gray-900 font-medium">Alice Brown</p>
                <p className="text-gray-500 text-sm">Marketing Agency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
