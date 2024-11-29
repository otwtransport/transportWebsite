"use client";

import React, { useEffect, useState } from "react";

// Define the interface for Sheet Data
interface SheetData {
  firstName: string;
  lastName: string;
  rating: string; // Rating as a string to handle decimal values
  description: string;
  time: string; // Time or date of the entry (if available)
}

const GoogleSheetCard = () => {
  const [sheetData, setSheetData] = useState<SheetData[]>([]);

  // Fetch Google Sheets data
  const fetchGoogleSheetData = async () => {
    const API_KEY = "AIzaSyBYfjRAi4jNnDZhS7eoISoqBwBdPhsvJbg"; // Replace with your actual API key
    const SHEET_ID = "1uvaafKy_dwU_PPiYLPz7xmBw_iGtHQTTbE0ZV3K8SI8"; // Replace with your actual sheet ID
    const RANGE = "rating1"; // Replace with the correct range
  
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );
      const data = await response.json();
  
      console.log("Raw Data from Google Sheets:", data); // Log the raw data fetched from the sheet
  
      if (data.values) {
        const parsedData = data.values.slice(1).map((row) => {
          const entry = {
            time: row[0] || "No time available", // First column is time
            firstName: row[1] || "N/A", // Second column is first name
            lastName: row[2] || "N/A", // Third column is last name
            description: row[3] || "No description available", // Fourth column is description
            rating: row[4] || "0", // Fifth column is rating
          };

          // Log the parsed data for debugging
          console.log("Parsed Entry:", entry);
          
          return entry;
        });
        setSheetData(parsedData);
      }
    } catch (error) {
      console.error("Error fetching Google Sheets data:", error);
    }
  };

  useEffect(() => {
    fetchGoogleSheetData();
  }, []);

  // Helper function to render stars based on the rating
  const renderStars = (rating: string) => {
    const ratingValue = parseFloat(rating);
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;
    const starElements = [];

    // Add full stars
    for (let i = 0; i < fullStars; i++) {
      starElements.push(<span key={i} className="text-yellow-400 text-3xl">★</span>);
    }

    // Add half star if applicable
    if (hasHalfStar) {
      starElements.push(<span key="half" className="text-yellow-400 text-3xl">☆</span>);
    }

    // Add empty stars for the remaining up to 5
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      starElements.push(<span key={i} className="text-gray-400 text-3xl">★</span>);
    }

    return <div>{starElements}</div>;
  };

  // Helper function to format the date to dd/mm/yyyy
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
        User Reviews
      </h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sheetData.length > 0 ? (
          sheetData.map((item, index) => {
            console.log(`Rendering Item ${index}:`, item); // Log the current item being rendered
            return (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
              >
                {/* Name with bold black text */}
                <div className="text-2xl font-bold text-black mb-2">
                  {item.firstName} {item.lastName}
                </div>
                
                {/* Time in smaller, light grey text */}
                <div className="text-sm text-gray-500 mb-4">
                  {formatDate(item.time)}
                </div>

                {/* Description in normal text */}
                <div className="text-gray-700 mb-4">
                  <p>{item.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center mt-auto">
                  <div className="mr-2 text-gray-600 text-xl"></div>
                  {renderStars(item.rating)}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            No data available. Check console logs for errors.
          </p>
        )}
      </div>
    </div>
  );
};

export default GoogleSheetCard;
