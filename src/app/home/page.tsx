import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import GoogleSheetCard from "@/components/GoogleSheetCard";
import Link from "next/link"; // For routing to contact us

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Padding */}
      <div className="container mx-auto px-6 py-16 text-center pt-24"> {/* Added pt-24 for padding-top */}
        <h1 className="text-6xl font-bold text-blue-600 mb-8">
          Welcome to Our Transport Business!
        </h1>
        <p className="text-2xl text-gray-700 mb-16">
          Your trusted partner for reliable and efficient transport services.
        </p>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-100 rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Local Moving</h3>
            <p className="text-gray-700">
              Need help with local moves? Our team handles everything from furniture transport to personal items, ensuring a smooth experience.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Long-Distance Moving</h3>
            <p className="text-gray-700">
              We offer long-distance moving services with guaranteed timely delivery and careful handling of your goods.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Cargo Transport</h3>
            <p className="text-gray-700">
              Need to ship cargo? Our reliable trucks and experienced drivers ensure that your goods reach their destination safely.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Experienced Drivers</h3>
            <p className="text-gray-700">
              Our team is made up of highly skilled and experienced drivers who are committed to providing safe and reliable transport services.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Affordable Prices</h3>
            <p className="text-gray-700">
              We offer competitive pricing without compromising on the quality of service. Get the best value for your money with us.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Reliable and Timely</h3>
            <p className="text-gray-700">
              Our commitment to punctuality ensures that your goods arrive at the right place, at the right time, every time.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section with Padding */}
      <div className="bg-blue-600 text-white py-12 rounded-lg mt-16 px-6"> {/* Added px-6 padding */}
        <h2 className="text-center text-3xl font-semibold mb-8">
          What Our Customers Say
        </h2>
        <GoogleSheetCard /> {/* This will handle the slider inside it */}
      </div>

      {/* Contact Us Section */}
      <div className="container mx-auto px-6 py-16 bg-gray-100 rounded-lg mt-16">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Have a question or need to get in touch? We’re here to help! Contact us for more information.
        </p>
        <div className="flex justify-center">
          <Link
            href="/contact-us"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Email Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
