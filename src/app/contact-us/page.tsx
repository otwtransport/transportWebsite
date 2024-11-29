"use client";
import React from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FormfacadeEmbed from "@formfacade/embed-react";

const ContactUs = () => {
  return (
    <div className="text-black min-h-screen flex flex-col font-sans">
      {/* Section 1: Header with Illustration */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/contactus.png"
            alt="Contact Us Illustration"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <h1 className="relative text-5xl font-bold text-white">Contact Us</h1>
      </section>

      {/* Section 2: Contact Information */}
      <section className="flex-1 py-16 px-6 md:px-16 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">Get in Touch</h2>
        <div className="grid gap-16 md:grid-cols-3 text-center">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <FaPhoneAlt className="text-blue-600 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700 text-lg">
              0411951952<br />0451040144
            </p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-blue-600 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:onthewaytransport2024@gmail.com"
              className="text-gray-700 text-lg hover:no-underline"
            >
              onthewaytransport2024@gmail.com
            </a>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-600 text-5xl mb-6" />
            <h3 className="text-2xl font-semibold mb-2">Office Address</h3>
            <a
              href="https://www.google.com/maps?q=11+Crawford+Rise,+Cobblebank+3338,+Victoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 text-lg hover:no-underline"
            >
              11 Crawford Rise, Cobblebank 3338, Victoria
            </a>
          </div>
        </div>
      </section>

      {/* Section 3: Contact Form */}
      <section className="bg-white py-16 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/107481609455152340993/form/1FAIpQLScHJqs4h3291PTyUF-NLQhLC62zdu_-LmF2pukwb6rAEOv7OA/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log('Form submitted')}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
