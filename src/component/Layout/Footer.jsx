import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-800 text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
            <p className="text-sm">
              We are a team dedicated to providing the best solutions for your web development needs. 
              Our mission is to empower individuals and businesses with high-quality designs and tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-blue-400 transition">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-blue-400 transition">About</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-blue-400 transition">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-sm mb-2">
              <strong>Email:</strong> support@example.com
            </p>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 123 Web St., Design City, WD 45678
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
