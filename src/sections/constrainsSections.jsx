"use client";
import React from "react";

const Constrains = () => {
  const principles = [
    {
      number: "01",
      title: "Fixed Format",
      description:
        "The structure does not change. \n No elements are added or rearranged.",
    },
    {
      number: "02",
      title: "Limited Inventory",
      description:
        "Inventory is capped. \n Anything outside the batch is inaccessible.",
    },
    {
      number: "03",
      title: "Consistent Layout",
      description:
        "The surface behaves the same every time. \n There are no variations or optimisations.",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-[42px] md:text-[48px] font-bold tracking-tight text-darkBlueText mb-6 leading-tight">
            Constraints Are the Feature
          </h2>
          <p className="text-[19px] text-gray-600 leading-relaxed">
            CarMosu is intentionally limited. The system works only because these limits are enforced.
          </p>
        </div>

        {/* Principles */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {principles.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-6 py-12 items-start group hover:bg-gray-50 transition-colors duration-300"
            >
              {/* Number with border */}
              <div className="col-span-12 md:col-span-2 flex justify-center md:justify-start">
                <span className="flex items-center justify-center w-9 h-9 rounded-full border-2 border-gray-300 text-gray-500 font-regular text-md font-bold border-darkBlueText text-darkBlueText ">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="col-span-12 md:col-span-4 flex flex-col justify-center relative">
                {/* Thin line connecting number */}
              
                <h3 className="text-[24px] font-semibold text-darkBlueText">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="col-span-12 md:col-span-6 flex flex-col justify-center relative">
                {/* Thin line connecting number */}
                {/* <div className="hidden md:block absolute left-0 top-1/2 w-4 border-t border-gray-300 -translate-y-1/2"></div> */}
                <p className="text-[18px] text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Constrains;
