"use client";

import React, { useEffect, useState } from "react";

// Define the interface for Sheet Data
interface SheetData {
  firstName: string;
  lastName: string;
  rating: string;
  description: string;
  time: string;
}

interface GoogleSheetResponse {
  values: string[][];
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
      const data: GoogleSheetResponse = await response.json(); // Type the response

      console.log("Raw Data from Google Sheets:", data);

      if (data.values) {
        const parsedData = data.values.slice(1).map((row) => {
          const entry: SheetData = {
            time: row[0] || "No time available",
            firstName: row[1] || "N/A",
            lastName: row[2] || "N/A",
            description: row[3] || "No description available",
            rating: row[4] || "0",
          };

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

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<span key={i} className="text-yellow-400 text-3xl">★</span>);
    }

    if (hasHalfStar) {
      starElements.push(<span key="half" className="text-yellow-400 text-3xl">☆</span>);
    }

    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
      starElements.push(<span key={i} className="text-gray-400 text-3xl">★</span>);
    }

    return <div>{starElements}</div>;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sheetData.length > 0 ? (
          sheetData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
            >
              <div className="text-2xl font-bold text-black mb-2">
                {item.firstName} {item.lastName}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {formatDate(item.time)}
              </div>
              <div className="text-gray-700 mb-4">
                <p>{item.description}</p>
              </div>
              <div className="flex items-center mt-auto">
                <div className="mr-2 text-gray-600 text-xl"></div>
                {renderStars(item.rating)}
              </div>
            </div>
          ))
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
