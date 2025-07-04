'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WebDesignLandingpage from "./webdesignlandingpage/WebDesignLandingpage";
import webstyle from "./webdesign.module.css";
import Testimonials from "@/sections/testimonials";
import FAQ from "@/sections/faq";
import WebdesignHub from "./WebdesignHub";
import WebDesignImg from "./webdesignimg/WebDesignImg";
import WebDesignDigital from "./webdigitalpresence/WebDesignDigital";
import { WiSmoke } from "react-icons/wi";
import vehicles from './vehiclecollection/vehiclesData';
import categories from './categories';
import { FaCarSide } from 'react-icons/fa';

const WebDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredVehicles =
    selectedCategory === "All"
      ? vehicles
      : vehicles.filter((v) => v.category === selectedCategory);

  const vehiclesToShow = showAll ? filteredVehicles : filteredVehicles.slice(0, 6);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".vehicle-grid-wrapper",
          start: "top 80%",
        },
      }
    );
  }, []);

  const toggleFeatures = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section className={webstyle.webdesignSection}>
      <WebDesignLandingpage />
      <WebDesignImg />
      <WebdesignHub />
      <WebDesignDigital />

      {/* Vehicle Collection Section */}
      <div className="p-6 relative flex flex-col items-center mx-auto  max-w-[1200px] bg-[#F9F9F9] rounded-lg ">
        <div className="w-full overflow-x-auto mx-auto mb-6 scrollbar-hide ">
          <div className="flex flex-nowrap gap-3 px-2 mx-auto justify-center max-sm:ml-0 max-md:ml-0 max-sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowAll(false);
                }}
                className={`flex-shrink-0 px-4 py-2 rounded-full border border-darkBlueText text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-darkBlueText text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Grid */}
        <div className="vehicle-grid-wrapper flex flex-wrap gap-6 justify-center items-center mx-auto max-w-[1200px] max-sm:w-full">
          {vehiclesToShow.map((vehicle, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="border-[1px] border-[#D7D7D7] w-[350.757px] bg-white rounded-[12px] relative shadow-sm transition p-6"
            >
              <div className="flex flex-col items-start mb-4 gap-[5px]">
                <span className="text-gray font-Regular leading-[120%] tracking-[0.196px] text-[16px]">
                  {vehicle.description}
                </span>
                <h3 className="text-[1.5rem] font-bold text-[#28282B] capitalize">
                  {vehicle.title}
                </h3>
                <p className="text-[#28282B] font-medium text-[17px]">
                  ${vehicle.price.toLocaleString()}
                </p>
                <img
                  src={vehicle.image}
                  alt={vehicle.title}
                  className="w-full h-40 object-contain mb-3"
                />
              </div>

              {vehicle.features && (
                <button
                  onClick={() => toggleFeatures(i)}
                  className={`mt-3 mb-3 relative flex items-center mx-auto justify-center transition-opacity duration-300 z-30 ${
                    openIndex === i ? 'opacity-0 pointer-events-none' : 'opacity-100'
                  }`}
                >
                  <img
                    src="/showFeatures.png"
                    alt="Show Features"
                    className="w-5 h-5"
                  />
                </button>
              )}

              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-col items-center">
                  <h1 className="text-[1.5rem] text-[#28282B] font-black">{vehicle.hp}</h1>
                  <p>Horsepower</p>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-[1.5rem] text-[#28282B] font-black">{vehicle.drive}</h1>
                  <p>Full time range</p>
                </div>
                <div className="flex flex-col gap-[2.5px] items-center mt-4">
                  <div
                    className="w-[19.577px] h-[19.577px] rounded-full border-[2px] border-gray"
                    style={{ backgroundColor: vehicle.colorCode }}
                  ></div>
                  <p>{vehicle.color}</p>
                </div>
              </div>

              {/* Features List */}
              <div
                className={`transition-all min-h-[300px] duration-[1s] ease-in-out overflow-hidden absolute left-0 bottom-0 w-full bg-white text-sm text-gray-600 px-4 border-[#D7D7D7] z-20 border-t-0 border-b border-l border-r border-[1px] rounded-lg ${
                  openIndex === i ? 'max-h-40 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                }`}
                style={{ zIndex: 10 }}
              >
                {vehicle.features && (
                  <button
                    onClick={() => toggleFeatures(i)}
                    className="mt-3 mb-6 relative flex items-center mx-auto justify-center"
                  >
                    <img
                      src={openIndex === i ? "/hideFeatures.png" : "/showFeatures.png"}
                      alt={openIndex === i ? "Hide Features" : "Show Features"}
                      className="w-5 h-5"
                    />
                  </button>
                )}

                <ul className="flex flex-wrap justify-center gap-[2em] list-none">
                  {vehicle.features.horsepower && (
                    <div className="flex flex-col gap-3 items-center">
                      <h1 className="text-[1.5rem] text-[#28282B] font-black">
                        {vehicle.features.horsepower}
                      </h1>
                      <p>Horsepower</p>
                    </div>
                  )}

                  {vehicle.features.range && (
                    <div className="flex flex-col gap-3 items-center">
                      <h1 className="text-[1.5rem] text-[#28282B] font-black">
                        {vehicle.features.range}
                      </h1>
                      <p>Full time range</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-[2.5px] items-center mt-2">
                    <div
                      className="w-[19.577px] h-[19.577px] rounded-full border-[2px] border-gray"
                      style={{ backgroundColor: vehicle.colorCode }}
                    ></div>
                    <p>{vehicle.color}</p>
                  </div>

                  {vehicle.features.exhaust && (
                    <div className="flex flex-col gap-3 items-center">
                      <WiSmoke size={24} color="#000000" />
                      <p>{vehicle.features.exhaust}</p>
                    </div>
                  )}

                  {vehicle.features.driveType || vehicle.features.drive ? (
                    <div className="flex flex-col gap-3 items-center">
                      <FaCarSide size={24} color="#000000" />
                      <p>{vehicle.features.driveType || vehicle.features.drive}</p>
                    </div>
                  ) : null}

                  {vehicle.features.trim && (
                    <div className="flex flex-col gap-3 items-center">
                      <img src="/tire.png" alt="tire" className="w-[24px] h-[24px]" />
                      <p className="text-[#28282B]">{vehicle.features.trim}</p>
                    </div>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {/* {filteredVehicles.length > 6 && (
          <button
            onClick={toggleShowAll}
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )} */}
      </div>

      <Testimonials />
      <FAQ />
    </section>
  );
};

export default WebDesign;
