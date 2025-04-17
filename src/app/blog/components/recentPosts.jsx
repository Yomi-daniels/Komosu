import React from "react";
import styles from "../blog.module.css";
import BlogPost from "./blogPost";
import { cn } from "@/lib/utils";
import BlogLayoutThree from "./blogLayoutThree";

const RecentPosts = ({ blogs }) => {
  return (
    <div
      className={cn(
        styles.blogContainer,
        "w-full px-5 gap-16 mt-[100px] flex flex-col sm:px-10 md:px-24 lg:px-44 sxl:px-32 "
      )}
    >
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Recent Posts
      </h2>
      <div
        className={cn(
          styles.grid,
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16"
        )}
      >
        {blogs.map((post) => (
          <article key={post._id} className="col-span-1 row-span-1 relative">
            {/* <BlogPost post={post} /> */}
            <BlogLayoutThree blog={post} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
