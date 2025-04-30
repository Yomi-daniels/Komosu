import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div className="">
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
      <div className="mx-auto w-3/4 space-y-12">
        <div className="w-full space-y-6">
          <div className="w-full text-indigo-950 text-2xl font-medium capitalize leading-loose">
            Featured Posts
          </div>
          <div className="w-full space-y-12">
            <div className="w-full h-96 relative bg-yellow rounded-3xl outline outline-1 outline-offset-[-1px] outline-yellowLight">
              <div className="justify-around flex items-center gap-16">
                <div className="w-[472px] flex flex-col gap-2">
                  <div className="text-zinc-600 text-lg font-normal capitalize leading-relaxed tracking-tight">
                    April 13, 2025
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                      Mindfulness and Meditation Techniques for Developers:
                      Improving Focus and Clarity
                    </div>
                    <div className="text-justify text-indigo-950 text-lg font-normal capitalize leading-relaxed tracking-tight">
                      Until now, trying to style an article, document, or blog
                      post with Tailwind has been a tedious task that required a
                      keen eye for typography and a lot of complex custom CSS.
                    </div>
                  </div>
                </div>
                <div className="w-[528px] h-96 bg-black/10 rounded-lg"></div>
              </div>
            </div>
            <div className="w-full flex justify-start items-center gap-6">
              <div className="w-96 h-96 relative border-l border-r border-indigo-100 overflow-hidden">
                <div className="w-80 absolute left-[24px] top-[24px] flex flex-col gap-4">
                  <img
                    className="w-full h-40"
                    src="https://placehold.co/325x160"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="px-2 py-1 bg-yellow-50 rounded outline outline-1 outline-offset-[-1px] outline-yellow-100 flex justify-center items-center gap-2">
                        <div className="text-yellow-800 text-sm font-medium leading-tight">
                          Code Quality
                        </div>
                      </div>
                      <div className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </div>
                    </div>
                    <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                      Best Practices for Writing Clean and Maintainable Code
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 relative border-r border-indigo-100 overflow-hidden">
                <div className="w-80 absolute left-[24px] top-[24px] flex flex-col gap-4">
                  <img
                    className="w-full h-40"
                    src="https://placehold.co/325x160"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                        <div className="text-sky-800 text-sm font-medium leading-tight">
                          Productivity
                        </div>
                      </div>
                      <div className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </div>
                    </div>
                    <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                      Automating Repetitive Tasks: Productivity Hacks for
                      Developers
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-96 relative border-r border-indigo-100 overflow-hidden">
                <div className="w-80 absolute left-[24px] top-[24px] flex flex-col gap-4">
                  <img
                    className="w-full h-40"
                    src="https://placehold.co/325x160"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                        <div className="text-fuchsia-700 text-sm font-medium leading-tight">
                          Web Development
                        </div>
                      </div>
                      <div className="text-zinc-600 text-sm font-light leading-tight">
                        April 13, 2025
                      </div>
                    </div>
                    <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                      Building Progressive Web Apps: Bridging the Gap Between
                      Web and Mobile
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-yellowLight flex flex-col gap-12">
          <div className="w-full flex flex-col gap-8">
            <div className="w-full flex justify-between items-center">
              <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                All Posts
              </div>
              <div className="w-96 h-10 px-4 py-2 bg-neutral-200 rounded-lg flex justify-start items-center gap-2">
                <div className="text-zinc-600 text-sm font-light leading-tight">
                  Search
                </div>
              </div>
            </div>
            <div className="flex justify-start items-center">
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
          <div className="w-full flex justify-between gap-8">
            <div className="w-80 flex flex-col gap-4">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-yellow-50 rounded outline outline-1 outline-offset-[-1px] outline-yellow-100 flex justify-center items-center gap-2">
                    <div className="text-yellow-800 text-sm font-medium leading-tight">
                      Code Quality
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Best Practices for Writing Clean and Maintainable Code
                </div>
              </div>
            </div>
            <div className="w-80 flex flex-col gap-4">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                    <div className="text-sky-800 text-sm font-medium leading-tight">
                      Productivity
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Automating Repetitive Tasks: Productivity Hacks for Developers
                </div>
              </div>
            </div>
            <div className="w-80 flex flex-col gap-4">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                    <div className="text-fuchsia-700 text-sm font-medium leading-tight">
                      Web Development
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Building Progressive Web Apps: Bridging the Gap Between Web
                  and Mobile
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-8">
            <div className="w-80 flex flex-col gap-4 outline outline-1">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-yellow-50 rounded outline outline-1 outline-offset-[-1px] outline-yellow-100 flex justify-center items-center gap-2">
                    <div className="text-yellow-800 text-sm font-medium leading-tight">
                      Code Quality
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Best Practices for Writing Clean and Maintainable Code
                </div>
              </div>
            </div>
            <div className="w-80 flex flex-col gap-4">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-blue-100 rounded outline outline-1 outline-offset-[-1px] outline-blue-200 flex justify-center items-center gap-2">
                    <div className="text-sky-800 text-sm font-medium leading-tight">
                      Productivity
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Automating Repetitive Tasks: Productivity Hacks for Developers
                </div>
              </div>
            </div>
            <div className="w-80 flex flex-col gap-4">
              <img className="w-full h-44" src="https://placehold.co/352x180" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="px-2 py-1 bg-fuchsia-200 rounded outline outline-1 outline-offset-[-1px] outline-fuchsia-300 flex justify-center items-center gap-2">
                    <div className="text-fuchsia-700 text-sm font-medium leading-tight">
                      Web Development
                    </div>
                  </div>
                  <div className="text-zinc-600 text-sm font-light leading-tight">
                    April 13, 2025
                  </div>
                </div>
                <div className="text-indigo-950 text-2xl font-medium capitalize leading-loose">
                  Building Progressive Web Apps: Bridging the Gap Between Web
                  and Mobile
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
