"use client";
import React, { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("About Me");
  const [galleryImages, setGalleryImages] = useState([
    "https://via.placeholder.com/150", // Placeholder image 1
    "https://via.placeholder.com/150", // Placeholder image 2
    "https://via.placeholder.com/150", // Placeholder image 3
  ]);

  // Function to handle adding new images to the gallery
  const addImage = () => {
    const newImage = prompt("Enter the URL of the new image:");
    if (newImage) {
      setGalleryImages([...galleryImages, newImage]);
    }
  };

  return (
    <main className="flex min-h-screen text-white">
      {/* Left empty section */}
      <div className="hidden lg:block lg:w-1/2"></div>

      <div className="w-full lg:w-3/4 xl:w-2/3 p-8 bg-transparent">
        {/* First Widget: About Me + Tabs */}
        <div className="relative mb-6 p-8 rounded-3xl shadow-lg shadow-black bg-[#363C43]">
          {/* Right Stick in First Widget */}
          <div className="absolute top-0 right-0 h-full w-[4px] bg-[#9ca3af]"></div> {/* Color stick */}
          
          {/* Tabs Section */}
          <div className="container space-x-4 mb-4 text-center text-xl bg-[#171717] rounded-2xl relative">
            {["About Me", "Experiences", "Recommended"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-16 rounded-3xl transition-colors ${
                  selectedTab === tab
                    ? "bg-[#28292F] text-white"
                    : "bg-transparent text-gray-400"
                } hover:bg-[#28292F]`}
              >
                {tab}
              </button>
            ))}

            {/* Question Mark Icon */}
            <div className="absolute top-2 right-4 group">
              <button className="text-gray-400">?</button>
              <span className="hidden group-hover:block absolute top-0 right-0 mt-6 w-32 bg-[#28292F] text-sm p-2 rounded-md shadow-lg">
                Learn more about these sections.
              </span>
            </div>
          </div>

          {/* Grid Content Section based on selected tab */}
          <div className="grid grid-cols-2 gap-4 p-6 rounded-lg">
            {selectedTab === "About Me" && (
              <>
                <p>
                  Hello! I'm Dave, your sales rep from Salesforce. I've been
                  working at this awesome company for 3 years now...
                </p>
                <p>
                  My role is to help businesses grow and leverage the power of
                  our cutting-edge technologies...
                </p>
              </>
            )}
            {selectedTab === "Experiences" && (
              <>
                <p>
                  Here are some of my key experiences from working in the tech
                  industry...
                </p>
                <p>
                  I've worked with clients across various industries and helped
                  them achieve great results using Salesforce...
                </p>
              </>
            )}
            {selectedTab === "Recommended" && (
              <>
                <p>
                  Here are some recommended articles and resources for aspiring
                  sales professionals...
                </p>
                <p>
                  Don't miss out on our industry-leading insights and case
                  studies...
                </p>
              </>
            )}
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-px division p-[2px] mb-6"></div>

        {/* Second Widget: Gallery with White Glow */}
        <div
          className="p-6 bg-[#363C43] rounded-3xl shadow-lg shadow-black transition-all"
          style={{ boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.4)" }}
        >
          <div className="flex justify-between items-center mb-4">
            {/* Arrow Icons and Gallery Tab */}
            <div className="flex space-x-2 items-center text-xl bg-[#171717] rounded-2xl">
              <button className="px-2 py-1 hover:bg-[#28292F] transition-all">
                ←
              </button>
              <button className="px-2 py-1 hover:bg-[#28292F] transition-all">
                →
              </button>
              <span className="px-4 py-2">Gallery</span>
            </div>

            {/* Add Image Button */}
            <button
              onClick={addImage}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all"
            >
              + Add Image
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="bg-gray-600 h-40 rounded-lg"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full division h-px mt-8 p-[2px] mb-6"></div>
      </div>
    </main>
  );
}