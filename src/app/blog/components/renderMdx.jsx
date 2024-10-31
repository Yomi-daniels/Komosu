"use client";
import React, { useEffect } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};
const RenderMdx = ({ post }) => {
  useEffect(() => {
    const headings = document.querySelectorAll(
      "article h1, article h2, article h3, article h4, article h5, article h6"
    );

    headings.forEach((headings) => {
      console.log(`Heading: ${headings.innerText}, ID: ${headings.id}`);
    });
  }, []);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div
      className="col-span-12  lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
    prose-blockquote:bg-accent/20
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-accent
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-li:marker:text-accent


    first-letter:text-3xl
    sm:first-letter:text-5xl

    pb-32
    "
    >
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
