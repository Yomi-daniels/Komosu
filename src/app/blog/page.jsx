"use client";
import React from "react";
import BlogPost from "./components/blogPost";

const posts = [
  { title: "First Post", content: "This is the content of the first post." },
  { title: "Second Post", content: "This is the content of the second post." },
];

const BlogPage = () => {
  return <BlogPost posts={posts} />;
};

export default BlogPage;
