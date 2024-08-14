"use client";
import React from "react";
import { allPosts } from "contentlayer/generated";
import LandingPage from "./components/landingPage";
import BlogContainer from "./blogContainer";

const BlogPage = () => {
  // Find the specific post you want to highlight
  const post = allPosts.find(
    (post) =>
      post._raw.flattenedPath ===
      "automating-repetitive-tasks-productivity-hacks-for-developers"
  );

  if (!post) {
    return <p>Post not found</p>;
  }

  console.log("post", post.image.filePath.replace("../public", ""));

  return (
    <section>
      {/* Pass the specific blog post to the LandingPage component */}
      <LandingPage blog={post} />

      {/* Pass all posts to the BlogContainer component */}
      <BlogContainer posts={allPosts} />
    </section>
  );
};

export default BlogPage;
