import Image from "next/image";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";
import { sortBlogs } from "@/utils";
import Tag from "@/app/components/tag/tag";
import styles from "../blog.module.css";

const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  return (
    <div className="w-full inline-block">
      {/* COMMENT THE DIV BELOW WHEN YOU WANT TO EDIT BLOG PAGE!!! */}
      <div className="flex flex-col justify-center fixed top-0 left-0 w-[100vw] h-[100vh] z-30 bg-black opacity-90">
        <div className="relative opacity-100 flex flex-col items-center justify-center">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
            objectFit="fill"
          />
          <div className="lg:flex items-center gap-2">
            <h1 className="text-xs sm:text-sm max-lg:text-xl text-white">
              Coming Soon
            </h1>
            <div className="max-sm:mt-8">
              <div className={styles.loader}>
                <div className={styles.circle}>
                  <div className={styles.dot}></div>
                  <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                  <div className={styles.dot}></div>
                  <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                  <div className={styles.dot}></div>
                  <div className={styles.outline}></div>
                </div>
                <div className={styles.circle}>
                  <div className={styles.dot}></div>
                  <div className={styles.outline}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <article className="flex flex-col items-start justify-end relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 - z-0"
        />
        <Image
          src={blog.image} // Directly "/unsplash.jpg"
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover -z-10"
          sizes="100vw"
          priority
        />

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
          <Link href={`blog/${blog._raw.flattenedPath}`} className="mt-6">
            <h1 className="font-bold capitalize text-lg text-light sm:text-xl md:text-3xl lg:text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px] text-light
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {blog.title}
              </span>
            </h1>
          </Link>
          <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
