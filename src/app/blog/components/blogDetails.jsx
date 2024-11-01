import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
// import ViewCounter from "./viewCounter";

function BlogDetails({ post, slug: blogSlug }) {
  return (
    <div className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center justify-around text-lg sm:text-xl rounded-b-3xl font-medium">
      <time className="">
        {format(parseISO(post.publishedAt), "LLLL d, yyyy")}
      </time>
      <span className="">
        {/* <ViewCounter slug={blogSlug} /> */}
        20
      </span>
      <div>{post.readingTime.text}</div>
      <Link href={`/categories/${slug(post.tags[0])}`} className="">
        #{post.tags[0]}
      </Link>
    </div>
  );
}

export default BlogDetails;
