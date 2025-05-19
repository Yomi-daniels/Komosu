// src/app/blog/page.js

import React from "react";
import BlogClient from "@/app/blog/BlogClient";
import { getBlogs } from "@/app/blog/utils/blogUtils";

export default async function BlogPage() {
  const blogs = await getBlogs(); // Make sure to await this

  if (!blogs || blogs.length === 0) {
    return <div className="text-center mt-10">No blogs available.</div>;
  }

  return <BlogClient blogs={blogs} />;
}
