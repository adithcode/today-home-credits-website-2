import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slogans = [
  "Get loans using your vehicle as equity",
  "Fast, secure & trustworthy service",
  "Low credit score? No problem!",
  "Quick approval. No hassle.",
];

const Home = () => {
  const [currentSlogan, setCurrentSlogan] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlogan((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background Blur Gradient */}
      <div className="absolute -z-10 inset-0 flex justify-center items-start">
        <div className="w-[60vw] h-[200vh] bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 opacity-20 blur-[140px]"></div>
      </div>

      {/* Hero Section with Animated Text */}
      <section className="bg-blue-800 text-white py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
          Welcome to Today Home Credits
        </h1>
        <p className="text-lg md:text-xl mb-8 min-h-[2rem] transition-all duration-500">
          {slogans[currentSlogan]}
        </p>
        <Link
          to="/apply"
          className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Apply Now
        </Link>
      </section>

      {/* Loan Types Section (White Background) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">We Offer These Types of Loans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">🚗 Vehicle Equity Loan</h3>
              <p>Use your existing car, bike, or scooter as collateral and get instant cash.</p>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">💼 Business Use Loan</h3>
              <p>Need funds for business but only have a vehicle? Use it as equity!</p>
            </div>
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">📉 Low Credit Score? No Problem</h3>
              <p>Get a loan even if your credit score is low — your vehicle backs you up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (Dark Background) */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-6">
            Get in Touch With Us
          </h2>
          <p className="text-center mb-6 text-gray-100">
            Whether you have a question about our services, the loan process, or anything else, our team is here to help you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-blue-800 rounded-lg p-4 hover:scale-105 transition">
              <p className="font-semibold text-white">📞 Call Us</p>
              <p className="text-gray-200">+91 9445676300</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-4 hover:scale-105 transition">
              <p className="font-semibold text-white">📧 Email</p>
              <p className="text-gray-200">support@todayhomecredits.com</p>
            </div>
            <div className="bg-blue-800 rounded-lg p-4 hover:scale-105 transition">
              <p className="font-semibold text-white">📍 Location</p>
              <p className="text-gray-200">Kodungallur, Kerala</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 px-6 py-3 rounded hover:bg-gray-200 transition"
            >
              Contact Page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
