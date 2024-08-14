"use client";
import React from "react";
import { allPosts } from "contentlayer/generated";
import LandingPage from "./components/landingPage";
import BlogPost from "./components/blogPost";

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

      {/* Map through all posts and render a BlogPost component for each */}
      {allPosts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </section>
  );
};

export default BlogPage;
