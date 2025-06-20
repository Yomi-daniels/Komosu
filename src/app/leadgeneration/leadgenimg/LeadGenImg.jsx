"use client";
import Image from "next/image";
import React from "react";
import { ScrollParallax } from "react-just-parallax";

const LeadGenImg = () => {
  return (
    <div
      className="flex flex-col mx-auto items-center justify-center md:px-[1.5rem] sm:px-[1rem] max-sm:px-[1rem]
    relative h-[400px]"
    >
      <div className="flex items-end absolute justify-center left-[32rem] max-sm:left-[5rem] max-sm:top-0 max-sm:bottom-[7rem] max-w-[979px] bottom-0">
        <div className="absolute left-[-15rem] max-sm:left-[-9rem] w-[737px] h-[496px] max-sm:w-[400px] max-sm:h-[300px]  object-cover max-sm:z-20 ">
          <Image
            src="/LeadGenguy.png"
            alt="leadGenImage"
            fill
            className=" 
              w-full h-full z-10 "
            objectFit="cover"
          />
        </div>
        <div className="relative w-[737px] h-[496px] max-sm:w-[400px] max-sm:h-[300px]  object-cover">
          <Image
            src="/leadGengirl.png"
            alt="leadGenImage"
            fill
            objectFit="cover"
            className=" z-10 "
          />
        </div>
      </div>
      <div>
        <ScrollParallax isAbsolutelyPositioned>
          <div className="absolute left-[15rem] top-0 max-sm:left-[1rem] max-sm:top-[-2rem] w-[254px] h-[218px] max-sm:w-[200px] max-sm:h-[170px] object-cover">
            <Image
              src="/StatLead.png"
              alt="leadGenImage"
              fill
              objectFit="contain"
              
            />
          </div>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned>
          <div className="z-10 absolute right-[10rem] top-0 max-sm:right-[0rem] max-sm:top-[-4rem] w-[254px] h-[218px] max-sm:w-[200px]  max-sm:h-[170px] object-cover">
            <Image
              src="/Stat (4).png"
              alt="leadGenImage"
             fill
              objectFit="contain"
              
            />
          </div>
        </ScrollParallax>
      </div>
      <div>
        <div
          className="absolute w-[1120px] h-[12px] object-contain z-10 bottom-0 
  left-1/2 transform -translate-x-1/2
  max-sm:bottom-[6rem] max-sm:h-[15px] max-sm:w-[400px] max-sm:px-6 "
        >
          <Image
            src="/Bottom border.png"
            alt="leadGenImage"
            fill
            className="object-cover border-l rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default LeadGenImg;
