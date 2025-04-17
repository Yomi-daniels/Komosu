"use client";
import React from "react";
import { allBlogs } from "contentlayer/generated";
import styles from "./blog.module.css";
// import LandingPage from "./components/landingPage";
import RecentPosts from "./components/recentPosts";
import { cn } from "@/lib/utils";
import FeaturedPost from "./components/featuredPost";
import HomeCoverSection from "./components/homePage";

const BlogPage = () => {
  // Find the specific post you want to highlight
  const post = allBlogs.find(
    (post) =>
      post._raw.flattenedPath ===
      "automating-repetitive-tasks-productivity-hacks-for-developers"
  );
  // console.log("post", post, "allBlogs", allBlogs);
  if (!post) {
    return <p>Post not found</p>;
  }

  console.log("post", post.image);

  return (
    <section className={cn(styles.container, "")}>
      {/* <LandingPage blog={post} /> */}
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </section>
  );
};

export default BlogPage;
