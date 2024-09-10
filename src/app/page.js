"use client";
import React, { useState } from "react";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("About Me");

  return (
    <main className="flex min-h-screen text-white bg-[#171717]">
      {/* Left empty section for larger screens */}
      <div className="hidden lg:block lg:w-1/2"></div>

      {/* Right section */}
      <div className="w-full lg:w-3/4 xl:w-2/3 p-8 bg-transparent">
        {/* First Widget: About Me + Tabs */}
        <div className="mb-6 p-8 rounded-3xl shadow-lg shadow-black bg-[#363C43]">
          {/* Tabs Section */}
          <div className="container space-x-4 mb-4 text-center text-xl bg-[#171717] rounded-2xl">
            {["About Me", "Experiences", "Recommended"].map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-16 rounded-3xl ${
                  selectedTab === tab ? "bg-[#28292F]" : "transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Section based on selected tab */}
          <div className="p-6 rounded-lg">
            {selectedTab === "About Me" && (
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
                <br /> <br />I was born and raised in Albany, NY& have been
                living in Santa Carla for the past 10 years my wife Tiffany and
                my 4 year old twin daughters- Emma and Ella. Both of them are
                just starting school, so my calender is usually blocked between
                9-10 AM. This is a...
              </p>
            )}
            {selectedTab === "Experiences" && (
              <p>
                Here are some of my key experiences from working in the tech
                industry...
              </p>
            )}
            {selectedTab === "Recommended" && (
              <p>
                Here are some recommended articles and resources for aspiring
                sales professionals...
              </p>
            )}
          </div>
        </div>

        {/* Horizontal Separator */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Second Widget: Gallery */}
        <div className="p-6 bg-[#363C43] rounded-3xl shadow-lg shadow-black">
          <div className="flex justify-between items-center mb-4">
            <div className="flex px-16 space-x-2 mb-4 text-center text-xl bg-[#171717] rounded-2xl">
              {["Gallery"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-4 px-2 rounded-3xl ${
                    selectedTab === tab ? "bg-[#28292F]" : "transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              + Add Image
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gray-600 h-40 rounded-lg"></div>
            <div className="bg-gray-600 h-40 rounded-lg"></div>
            <div className="bg-gray-600 h-40 rounded-lg"></div>
          </div>
        </div>

        {/* Bottom Horizontal Separator */}
        <div className="w-full h-px bg-gray-600 mt-8 mb-6"></div>
      </div>
    </main>
  );
}
