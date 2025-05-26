"use client";

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
    <div className="h-[80vh] md:[100vh] max-sm:h-[100%] bg-gray-100 flex items-center justify-center p-8 py-3 z-10  pt-[4rem] px-[2rem]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl max-sm:gap-16">
        {/* Card 1 */}
        <div className="p-6 rounded-[20px] shadow-md flex flex-col items-center text-center border-[4px] border-[#DAD9FF] w-[328px] h-[400px] overflow-hidden">
          <div className="flex flex-col items-start">
            <h2 className="text-[24px] font-bold mb-2 text-darkBlueText text-left ">
               Leads to Buyers
            </h2>
            <p className="text-darkBlueText mb-4 text-[16px] leading-[150%] tracking-[2%] text-left font-regular">
             Turn site traffic into serious car buyers with tools built to convert — not just collect.
            </p>
          </div> 
          <div className="flex items-center relative pb-3">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-[12px] w-[155px] h-[162px] flex flex-col justify-center items-center rotate-[2deg]">
              <h1 className="text-[24px] font-bold ">LEADS</h1>
            </div>
            <img
              src="/VVImg.png"
              alt="vvimg"
              className="w-[48px] h-[48px] object-cover absolute left-[37%] z-10"
            />
            <div className="bg-accentDark text-black px-4 py-2 rounded-[12px] w-[156px] h-[162px] flex flex-col justify-center items-center rotate-[-4deg]">
              <h1 className="text-[24px] font-bold text-darkBlueText text-left">
                BUYING CUSTOMER
              </h1>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white rounded-lg overflow-hidden shadow-md h-[500px]">
          <video
            ref={videoRef}
            src="/DealerDesignVideo.mp4"
            className="w-[400px] h-[500px] object-cover"
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
              {isPlaying ? "❚❚" : "▶"}
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative h-[390px] py-4">
          <img
            src="/Product.png"
            alt="car features"
            className="w-full h-[390px] object-cover rounded-[12px]"
          />
          <div className="absolute top-[-40px] right-[-70px] bg-[#E6E6FF]  rounded-[12px] shadow-md w-[239px] h-[134px] p-4 max-sm:right-[-20px]
          max-sm:w-[180px] max-sm:h-[180px]">
            <p className="text-blueText text-[40px] font-black max-w-[207px] h-[54px] max-sm:-[140px] max-sm:text-[30px]">
              30%
            </p>
            <p className="text-[18px] text-darkBlueText ">
              Of Customers Purchased
              <br />
              This Car In April
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerHubHeaderDesign;
