"use client";
import React from "react";
import Image from "next/image";
import FormfacadeEmbed from "@formfacade/embed-react";
import GoogleSheetCard from "../../components/GoogleSheetCard"; // Adjust the import path based on your folder structure

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
      {/* Header Section */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/aboutus.png"
            alt="About Us Illustration"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <h1 className="relative text-5xl font-bold text-white">About Us</h1>
      </section>

      {/* Google Form Section */}
      <section className="flex-1 py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-blue-600 text-center mb-6">
            Satisfied With Our Service?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Take a minute to fill our form.
          </p>
          <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/107481609455152340993/form/1FAIpQLSebvBohYqhNDN1MQITkyDQMIknog3HktIyl7_HUU11Wn8_Omg/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
        </div>
      </section>

      {/* Google Sheets Data Cards Section */}
      {/* <section className="py-16 px-6 md:px-16 bg-gray-50">
        <GoogleSheetCard />
      </section> */}
    </div>
  );
};

export default AboutUs;
