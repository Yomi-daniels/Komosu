"use client";
import React from "react";

const Constrains = () => {
  const principles = [
    {
      number: "01",
      title: "Fixed Format",
      description:
        "A locked structure removes distraction. Buyers move forward instead of wandering.",
    },
    {
      number: "02",
      title: "Limited Inventory",
      description:
        "Capped batches prevent overload and make every vehicle feel intentional.",
    },
    {
      number: "03",
      title: "Consistent Layout",
      description:
        "Predictability builds trust. Buyers convert faster when the system feels controlled.",
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
            CarMosu is intentionally limited. These constraints preserve focus,
            increase confidence, and keep intent moving forward.
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
                <span className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-500 font-regular text-lg border-darkBlueText text-darkBlueText ">
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
                <div className="hidden md:block absolute left-0 top-1/2 w-4 border-t border-gray-300 -translate-y-1/2"></div>
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
