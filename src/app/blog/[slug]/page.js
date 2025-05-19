import { getBlogBySlug } from "@/app/blog/utils/blogUtils";
import BlogPostClient from "./BlogPostClient";

export default function BlogPostPage({ params }) {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogPostClient blog={blog} />;
}
