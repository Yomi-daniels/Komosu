"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const DealerHubHeaderDesign = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="w-full max-w-[420px] mx-auto rounded-[20px] shadow-md flex flex-col border-[4px] border-[#DAD9FF] bg-white p-5 sm:p-6 min-h-[420px]">
          <div className="flex flex-col items-start">
            <h2 className="text-[22px] sm:text-[24px] font-bold mb-2 text-darkBlueText text-left">
              LICENSING & EXCLUSIVITY
            </h2>
            <p className="text-darkBlueText mb-5 text-[15px] sm:text-[16px] leading-[150%] text-left">
              licensed access to the system <br />
              exclusivity within their metropolitan area <br />
              continued access while the license remains active <br />
            </p>
          </div>
          <div className="relative mt-auto h-[210px] sm:h-[230px] w-full max-w-[280px] self-center">
            <div className="absolute top-4 left-2 sm:left-4 bg-blue-600 text-white rounded-[12px] w-[140px] h-[145px] sm:w-[155px] sm:h-[162px] flex flex-col justify-center items-center rotate-[10deg]">
              <h1 className="text-[18px] sm:text-[20px] font-bold">LICENSED</h1>
            </div>
            <div className="absolute top-11 left-24 sm:left-32 z-10 w-12 h-12">
              <Image fill src="/VVImg.png" alt="vvimg" className="object-cover" />
            </div>
            <div className="absolute top-10 right-2 sm:right-4 bg-accentDark text-black rounded-[12px] w-[140px] h-[145px] sm:w-[156px] sm:h-[162px] flex flex-col justify-center items-center rotate-[-4deg]">
              <h1 className="text-[18px] sm:text-[20px] font-bold text-darkBlueText text-left">
                NOT CUSTOMIZED
              </h1>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md w-full max-w-[420px] mx-auto h-[420px] sm:h-[500px]">
          <video
            ref={videoRef}
            src="/DealerDesignVideo.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute right-[20px] bottom-[20px]">
            <button
              onClick={togglePlay}
              className="bg-[#605E5E] bg-opacity-50 text-white p-2 rounded-full w-[48px] h-[48px] flex items-center justify-center text-xl"
            >
              {isPlaying ? "\u275A\u275A" : "\u25B6"}
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative w-full rounded-full max-w-[420px] mx-auto h-[320px] sm:h-[390px] py-2 sm:py-4">
          <Image
            fill
            src="/DealerDesignVehicle.png"
            alt="car features"
            className="object-cover rounded-[12px]"
          />
          {/* <div className="absolute top-[-40px] right-[-70px] bg-[#E6E6FF]  rounded-[12px] shadow-md w-[239px] h-[134px] p-4 max-sm:right-[-20px]
          max-sm:w-[180px] max-sm:h-[180px]">
            <p className="text-blueText text-[40px] font-black max-w-[207px] h-[54px] max-sm:-[140px] max-sm:text-[30px]">
              30%
            </p>
            <p className="text-[18px] text-darkBlueText ">
              Of Customers Purchased
              <br />
              This Car In April
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DealerHubHeaderDesign;

