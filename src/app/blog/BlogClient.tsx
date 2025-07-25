"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "All", color: "bg-darkBlueText text-white" },
  {
    name: "Code Quality",
    color: "bg-[#FFF9DB] text-[#7A6803] border-[#FFF2AB]",
  },
  {
    name: "Productivity",
    color: "bg-[#DBEEFF] text-[#014B8B] border-[#A8D5FC]",
  },
  {
    name: "Web Development",
    color: "bg-[#F9DBFF] text-[#9100AE] border-[#F3B8FF]",
  },
];

export default function BlogClient({ blogs }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "success" | "error" | "subscribed" | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Featured post: "Why Dealerships should start thinking like creators in 2025"
  const featuredPost = blogs.find((blog) => blog.slug === "thinklikecreators");

  // Filtered blogs excluding the featured post
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.slug !== featuredPost?.slug &&
      (selectedCategory === "All" || blog.category === selectedCategory)
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      const result = await response.json();
      console.log("Subscription success:", result);
      setEmail("");
      setStatus("success");
    } catch (error) {
      console.error("Subscription error:", error);
      setStatus(
        error.message === "Email already subscribed" ? "subscribed" : "error"
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section>
      {/* Header Section */}
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

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row justify-start items-center space-y-4 md:space-y-0 md:space-x-4"
          >
            <div className="w-full md:w-80 h-12 px-4 py-2 bg-white rounded-lg flex items-center">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to get up-to-date news & offers"
                className="w-full bg-transparent text-zinc-800 text-sm outline-none border-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow h-12 px-4 py-2 rounded-lg flex justify-center items-center gap-2 text-zinc-800 text-sm font-bold leading-tight"
            >
              {isSubmitting ? "Subsribing..." : "Subscribe"}
            </button>
          </form>
          {status && (
            <p className="text-indigo-100">
              {status === "success" && "Subscribed successfully!"}
              {status === "error" && "Invalid email address."}
              {status === "subscribed" && "You are already subscribed."}
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1064px] space-y-12 mt-12 px-4">
        <h2 className="text-darkBlueText text-2xl font-medium">
          Featured Post
        </h2>
        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block">
            <div className="relative bg-[#FDF9E6] rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center w-full">
              <div className="flex flex-col gap-4 md:gap-6 md:flex-1">
                <p className="text-[#585859] text-sm md:text-base">
                  April 13, 2025
                </p>
                <h3 className="text-lg md:text-2xl font-medium text-darkBlueText">
                  Why Dealerships Should Start Thinking Like Creators in 2025
                </h3>
                <p className="text-darkBlueText text-sm md:text-base leading-[150%] tracking-[0.36px]">
                  How digital communities and first-party data will define the
                  next generation of automotive brands
                </p>
              </div>
              <div className="relative w-full h-64 md:w-[528px] md:h-[368px]">
                <Image
                  src={featuredPost.image || "/man_meditating.png"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover rounded-lg "
                />
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Category Filters */}
      <div className="flex flex-col items-start max-w-[1120px] mx-auto mt-[4rem]  px-5">
        <h3 className="text-darkBlueText text-2xl font-medium">All Posts</h3>
        <div className="relative flex max-sm:overflow-x-scroll mt-[2rem]  max-sm:whitespace-nowrap max-sm:scrollbar-thin max-sm:scrollbar-thumb-rounded scrollbar-thumb-gray-300 max-sm:w-full max-sm:gap-[1em]">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-md inline-block ${selectedCategory === category.name ? "bg-darkBlueText text-white" : "bg-gray-200"}`}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px] mt-[3rem]">
        <div className="flex flex-wrap gap-6">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="w-96 min-h-full p-4 border-x border-[#E6E6FF]">
                  <div className="relative w-full h-40 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.png"}
                      alt={post.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-center flex-wrap gap-4 mt-[1rem]">
                    <div
                      className={`px-2 py-1 rounded ${categories.find((cat) => cat.name === post.category)?.color || "bg-gray-200"}`}
                    >
                      <p className="text-sm font-medium">{post.category}</p>
                    </div>
                    <p className="text-zinc-600 text-sm font-light">
                      {post.date}
                    </p>
                  </div>
                  <h3 className="text-2xl font-semibold text-darkBlueText leading-[130%] mt-[1rem]">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No posts available in this category.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
