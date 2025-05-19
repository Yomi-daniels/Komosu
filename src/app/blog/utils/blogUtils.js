// src/app/blog/utils/blogUtils.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Define the path to your markdown files
const BLOGS_PATH = path.join(process.cwd(), "src/app/blog/posts");

// Function to get all blogs
export function getBlogs() {
  const files = fs.readdirSync(BLOGS_PATH);
  const blogs = files.map((filename) => {
    const filePath = path.join(BLOGS_PATH, filename);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      ...data,
      content,
      slug: filename.replace(".md", ""),
    };
  });

  // Sort by date (newest first)
  const sortedBlogs = blogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  return sortedBlogs;
}

// Function to get a single blog by slug
export function getBlogBySlug(slug) {
  const filePath = path.join(BLOGS_PATH, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error("Blog post not found.");
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);

  return {
    ...data,
    content,
    slug,
  };
}
