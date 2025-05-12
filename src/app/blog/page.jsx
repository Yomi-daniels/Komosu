"use client";

import React from "react";
// import Link from "next/link"; // 👈 import Link from Next.js
// import { motion } from "framer-motion";
import Image from "next/image";

const BlogPage = () => {
  return (
    <section>
        <div className="relative overflow-hidden w-full h-[407px] bg-darkBlueText">
      <Image
        src="/blog_img.png"
        alt=""
        width={499}
        height={499}
        className="absolute right-1/2 md:right-44 max-sm:right-0 -bottom-14 aspect-square flex-shrink-0 -rotate-12 opacity-50"
      />

      <div className="relative z-10 w-11/12 md:w-3/4 h-full mx-auto  flex flex-col gap-4 text-center md:text-left mt-[12rem] max-sm:mt-[8rem]">
        <h1 className="text-indigo-100 text-3xl md:text-5xl font-bold capitalize leading-snug">
          Latest News
        </h1>
        <p className="text-indigo-100 text-base md:text-lg font-normal leading-relaxed tracking-tight">
          Get the latest news and articles from Komosu
        </p>

        <div className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-full md:w-80 h-12 px-4 py-2 bg-white rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Subscribe to get up-to-date news & offers"
              className="w-full bg-transparent text-zinc-800 text-sm outline-none border-none"
            />
          </div>

          <button className="bg-yellow h-12 px-4 py-2 rounded-lg flex justify-center items-center gap-2 text-zinc-800 text-sm font-bold leading-tight">
            Subscribe
          </button>
        </div>
      </div>
    </div>
      <div className="mx-auto w-3/4 space-y-12 mt-[3rem] max-sm:w-full max-sm:px-4">
        <div className="w-full space-y-6 ">
        <h2 className="text-darkBlueText text-2xl font-medium capitalize">Featured Posts</h2>
          <div className="w-full space-y-12 ">
          <div className="bg-[#FDF9E6] rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-4">
              <span className="text-[#585859] text-lg font-normal">April 13, 2025</span>
              <h3 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%]">
                Why Dealerships should start thinking like creators in 2025
              </h3>
              <p className="text-darkBlueText text-lg font-normal capitalize leading-[150%]">
                How digital communities and first-party data will define the next generation of automatotive brands...
              </p>
            </div>
            <div className="w-full md:w-[528px] h-[300px] relative ">
              <Image src="/man_meditating.png" alt="image" fill className="object-cover rounded-lg object-right-top" />
            </div>
          </div>

            <div className="w-full flex justify-start items-center gap-0  max-md:flex-col ">
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/man_Coding.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>   
<div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-[#FFF9DB] rounded outline-1 outline-offset-[-1px] outline-[#FFF2AB] flex justify-center items-center gap-2">
                        <p className="text-[#7A6803]  text-sm font-medium leading-tight">
                        Code Quality
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                    Your Websites is more than a Digital lot. it's a Community Engine
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/tutor.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                        <p className="text-sky-800 text-sm font-medium leading-tight">
                          Productivity
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                     Social Media is your Funnel. Community is the Destination.
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4  py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/responsiveWebDesign.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                        <p className="text-fuchsia-700 text-sm font-medium leading-tight">
                          Web Development
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                    First-Party Data: The Foundation of the new Dealership Model.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-yellowLight flex flex-col gap-12">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex justify-between items-center flex-wrap">
              <h4
               className="text-darkBlueText text-2xl font-medium capitalize leading-loose">
                All Posts
              </h4>
              {/* <div className="w-96 h-10 px-4 py-2 bg-neutral-200 rounded-lg flex justify-start items-center gap-2">
                <div className="text-zinc-600 text-sm font-light leading-tight">
                  Search
                </div>
              </div> */}
            </div>
            <div className="flex justify-start items-center max-sm:justify-center  flex-wrap">
              <div className="px-6 py-2 border-b-2 border-blue-700 flex flex-col justify-center items-center gap-2">
                <div className="text-blue-700 text-lg font-bold capitalize leading-relaxed tracking-tight">
                  All
                </div>
              </div>
              <div className="px-6 py-2 flex flex-col justify-center items-center gap-2">
                <div className="text-zinc-600 text-lg font-normal capitalize leading-relaxed tracking-tight">
                  Code Quality
                </div>
              </div>
              <div className="px-6 py-2 flex flex-col justify-center items-center gap-2">
                <div className="text-zinc-600 text-lg font-normal capitalize leading-relaxed tracking-tight">
                  Productivity
                </div>
              </div>
              <div className="px-6 py-2 flex flex-col justify-center items-center gap-2">
                <div className="text-zinc-600 text-lg font-normal capitalize leading-relaxed tracking-tight">
                  Web Development
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-center gap-0  max-md:flex-col ">
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/man_Coding.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>   
<div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-[#FFF9DB] rounded outline-1 outline-offset-[-1px] outline-[#FFF2AB] flex justify-center items-center gap-2">
                        <p className="text-[#7A6803]  text-sm font-medium leading-tight">
                        Code Quality
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                    Turning Visitors into Members - and Members into Buyers
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/tutor.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                        <p className="text-sky-800 text-sm font-medium leading-tight">
                          Productivity
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                  Why This Stratey Works: The Business Case
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4  py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/responsiveWebDesign.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                        <p className="text-fuchsia-700 text-sm font-medium leading-tight">
                          Web Development
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                      How to Get Started (No Giant Budget Needed)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-start items-center gap-0  max-md:flex-col ">
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/man_Coding.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>   
<div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-[#FFF9DB] rounded outline-1 outline-offset-[-1px] outline-[#FFF2AB] flex justify-center items-center gap-2">
                        <p className="text-[#7A6803]  text-sm font-medium leading-tight">
                        Code Quality
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                 Final Thought: The Dealership as a Digital Brand
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4 py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/tutor.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center  flex-wrap gap-4">
                      <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                        <p className="text-sky-800 text-sm font-medium leading-tight">
                          Productivity
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                      Automating Repetitive Tasks: Productivity Hacks for
                      Developers
                    </h4>
                  </div>
                </div>
              </div>
              <div className="w-96 min-h-96 relative border-x max-sm:border-y  border-indigo-100  px-4  py-[24px]">
                <div className="w-full left-[24px] top-[24px] flex flex-col gap-4">
                <div className="relative w-full h-40">
  <Image
    src="/responsiveWebDesign.png"
    alt="image"
    fill
    className="object-cover"
  />
</div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center flex-wrap gap-4">
                      <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                        <p className="text-fuchsia-700 text-sm font-medium leading-tight">
                          Web Development
                        </p>
                      </div>
                      <p className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </p>
                    </div>
                    <h4 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%] tracking-[-0.48px]">
                      Building Progressive Web Apps: Bridging the Gap Between
                      Web and Mobile
                    </h4>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 bg-black">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Blog Coming Soon!
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are brewing up some amazing content for you. Stay tuned!
        </motion.p>
        <motion.div
          className="flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link href="/">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">
              Go Home
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
              Contact Us
            </button>
          </Link>
        </motion.div>
      </div> */}
    </section>
  );
};

export default BlogPage;
