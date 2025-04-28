import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div>
      <div className="relative overflow-hidden w-fill h-[407px] bg-foundationBlue">
        <Image
          src="/blog-img.png"
          alt=""
          width="499"
          height="499"
          className="absolute right-44 -bottom-14 aspect-square flex-shrink-0 -rotate-12 opacity-50"
        />
        {/* <div className="pl-12 w-fit">
          <div className="self-stretch justify-start text-indigo-100 text-5xl font-bold  capitalize leading-[60px]">
            Stay up to date
          </div>
        </div> */}
        <div className="relative z-10 w-3/4 h-full mx-auto justify-center flex flex-col gap-2">
          <h1 className="self-stretch justify-start text-indigo-100 text-5xl font-bold capitalize leading-[60px]">
            Latest News
          </h1>
          <p className="self-stretch justify-center text-indigo-100 text-lg font-normal leading-relaxed tracking-tight">
            Get the latest news and articles from Komosu
          </p>
          <div className="inline-flex justify-start items-center space-x-4">
            <div className="w-80 h-10 px-4 py-2 bg-white rounded-lg inline-flex justify-start items-center gap-2">
              <div
                className="justify-start w-full text-zinc-800 text-sm
                font-normal leading-tight"
              >
                Subscribe to get up-to-date news & offers
              </div>
            </div>

            <div className="bg-yellow h-10 px-4 py-2 rounded-lg flex justify-start items-center gap-2">
              <button className="justify-start text-zinc-800 text-sm font-bold leading-tight">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto flex flex-col justify-start items-start gap-6">
        <div className="self-stretch justify-start text-indigo-950 text-2xl font-medium capitalize leading-loose">
          Featured Posts
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-12">
          <div className="self-stretch h-96 relative bg-yellow rounded-3xl outline outline-1 outline-offset-[-1px] outline-yellowLight">
            <div className="left-[40px] top-[16px] absolute inline-flex justify-start items-center gap-16">
              <div className="w-[472px] inline-flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-start text-zinc-600 text-lg font-normal capitalize leading-relaxed tracking-tight">
                  April 13, 2025
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-6">
                  <div className="self-stretch justify-start text-indigo-950 text-2xl font-medium capitalize leading-loose">
                    Mindfulness and Meditation Techniques for Developers:
                    Improving Focus and Clarity
                  </div>
                  <div className="self-stretch text-justify justify-start text-indigo-950 text-lg font-normal capitalize leading-relaxed tracking-tight">
                    Until now, trying to style an article, document, or blog
                    post with Tailwind has been a tedious task that required a
                    keen eye for typography and a lot of complex custom CSS.
                  </div>
                </div>
              </div>
              <div className="w-[528px] h-96 bg-black/10 rounded-lg"></div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center">
            <div className="w-96 h-96 relative border-l border-r border-indigo-100 overflow-hidden">
              <div className="w-80 left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-4">
                <img
                  className="self-stretch h-40 relative"
                  src="https://placehold.co/325x160"
                />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="px-2 py-1 bg-yellow-50 rounded outline outline-1 outline-offset-[-1px] outline-yellow-100 flex justify-center items-center gap-2">
                      <div className="justify-start text-yellow-800 text-sm font-medium leading-tight">
                        Code Quality
                      </div>
                    </div>
                    <div className="justify-start text-zinc-600 text-sm font-light leading-tight">
                      April 13, 2025
                    </div>
                  </div>
                  <div className="self-stretch justify-start text-indigo-950 text-2xl font-medium capitalize leading-loose">
                    Best Practices for Writing Clean and Maintainable Code
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 relative border-r border-indigo-100 overflow-hidden">
              <div className="w-80 left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-4">
                <img
                  className="self-stretch h-40 relative"
                  src="https://placehold.co/325x160"
                />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                      <div className="justify-start text-sky-800 text-sm font-medium leading-tight">
                        Productivity
                      </div>
                    </div>
                    <div className="justify-start text-zinc-600 text-sm font-light leading-tight">
                      April 13, 2025
                    </div>
                  </div>
                  <div className="self-stretch justify-start text-indigo-950 text-2xl font-medium capitalize leading-loose">
                    Automating Repetitive Tasks: Productivity Hacks for
                    Developers
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 relative border-r border-indigo-100 overflow-hidden">
              <div className="w-80 left-[24px] top-[24px] absolute inline-flex flex-col justify-start items-start gap-4">
                <img
                  className="self-stretch h-40 relative"
                  src="https://placehold.co/325x160"
                />
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                      <div className="justify-start text-fuchsia-700 text-sm font-medium leading-tight">
                        Web Development
                      </div>
                    </div>
                    <div className="justify-start text-zinc-600 text-sm font-light leading-tight">
                      April 13, 2025
                    </div>
                  </div>
                  <div className="self-stretch justify-start text-indigo-950 text-2xl font-medium capitalize leading-loose">
                    Building Progressive Web Apps: Bridging the Gap Between Web
                    and Mobile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
