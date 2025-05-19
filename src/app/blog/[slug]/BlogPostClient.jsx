"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function BlogPostClient({ blog }) {
  const router = useRouter();

  return (
    <div className="mx-auto w-3/4 space-y-12 mt-[8rem] max-sm:w-full max-sm:px-4">
      <div className="sticky top-4 bg-white z-10 border-b border-gray-200 pb-4">
        <button
          onClick={() => router.push("/blog")}
          className="px-4 py-2 text-darkBlueText flex items-center gap-4 fixed top-[15%] left-[1%] bg-white"
        >
          <Image src="/backtoblogbtn.png" width={7} height={13} alt="back_to_blog" objectFit="cover" />
          <p className="font-medium">Back to Blog</p>
        </button>
      </div>
       <div>
         <p className="text-sm text-gray-500">{blog.date}</p>
               <h1 className="text-[50px] font-bold text-darkBlueText w-[700px]">{blog.title}</h1>
               <Image src={blog.image} alt={blog.title} width={1120}height={500} objectFit="cover" className="mt-[2rem]"/>
       </div>
   
      <ReactMarkdown >{blog.content}</ReactMarkdown>
    </div>
  );
}
