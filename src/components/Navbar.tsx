"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Trigger dynamic island after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isCurrentPath = (href : any) => window.location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "top-4 w-[90%] max-w-[800px] rounded-full bg-blue-600 shadow-xl border border-blue-700"
          : "w-full bg-white shadow-md"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          isScrolled ? "px-8 py-4" : "px-6 py-3"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          <span
            className={`font-bold ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            On The Way Transport
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium relative transition-colors ${
                isCurrentPath(item.href)
                  ? isScrolled
                    ? "text-white after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-white"
                    : "text-blue-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-black hover:text-blue-600"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
