import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-16 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 On The Way Transport | All Rights Reserved</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
