"use client";
import React from "react";
import { allPosts } from "contentlayer/generated";
import styles from "./blog.module.css";
import LandingPage from "./components/landingPage";
import BlogContainer from "./components/blogContainer";

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
    <section className={styles.container}>
      <LandingPage blog={post} className={styles.landingPage} />
      <BlogContainer posts={allPosts} />
    </section>
  );
};

export default BlogPage;
