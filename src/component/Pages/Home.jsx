import React from 'react';

export default function Home(){
  return (
    <section className="relative top-18 bg-white min-h-screen flex items-center justify-center">
      <div className="container px-6 mt-20 pt-20 text-center">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-evenly">
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-left">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              Build Your <span className='text-blue-600'>Dream Website</span>
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Create amazing websites and apps with ease using our services and tools.
            </p>
            <div className="flex gap-4">
              <a
                href="#features"
                className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition"
              >
                Explore Features
              </a>
              <a
                href="#pricing"
                className="bg-gray-300 font-semibold text-gray-800 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-400 transition"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 justify-items-end">
            <img
              src="https://t3.ftcdn.net/jpg/00/79/67/48/360_F_79674837_Jn4HbqZGciL1jMeobbM6xNOUUjen936J.jpg"
              alt="Hero Illustration"
              className="rounded-full shadow-lg shadow-neutral-600 w-[80%]"
            />
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-400">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
                felis vitae libero faucibus venenatis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-400">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-600">
                Nullam a sapien eget massa luctus aliquet vel eget purus. Integer
                tincidunt justo nec metus tempor, at posuere elit faucibus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg shadow-slate-400">
              <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-600">
                Aliquam erat volutpat. Quisque nec tellus ut augue auctor fringilla
                at eget lacus.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div id="cta" className="mt-16 bg-blue-500 text-white py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Sign up today and build the perfect website with our tools and services.
          </p>
          <a
            href="#signup"
            className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};


