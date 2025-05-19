"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown"; // Use this to render markdown

export default function FeaturedPost({ post }) {
  return (
    <div className="mx-auto w-3/4 space-y-12 mt-[3rem] max-sm:w-full max-sm:px-4">
      <h2 className="text-darkBlueText text-2xl font-medium capitalize">
        Featured Post
      </h2>
      <div className="w-full space-y-12 ">
        <div className="bg-[#FDF9E6] rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-4">
            <span className="text-[#585859] text-lg font-normal">{post.date}</span>
            <h3 className="text-darkBlueText text-2xl font-medium capitalize leading-[130%]">
              {post.title}
            </h3>
            <p className="text-darkBlueText text-lg font-normal capitalize leading-[150%]">
              {post.excerpt}
            </p>
          </div>
          <div className="w-full md:w-[528px] h-[300px] relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover rounded-lg object-right-top"
            />
          </div>
        </div>

        {/* Render content only if it exists */}
        {post.content ? (
          <article className="prose max-w-full mt-4">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </article>
        ) : null}
      </div>
    </div>
  );
}
