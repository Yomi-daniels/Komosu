import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "../blog.module.css";
import Image from "next/image";
import BlogDetails from "../components/blogDetails";
import Tag from "@/app/components/tag/tag";

// Function to generate the static params
export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

// Page component
const BlogPostPage = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound(); // Render a 404 page if the post is not found
  }
  console.log("post", post[1]);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article>
      <div className={styles.blogImageBg}>
        {post.image && (
          <Image
            src={post.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={post.image.blurhashDataUrl}
            alt={post.title}
            width={post.image.width}
            height={post.image.height}
            className={styles.blogImage}
          />
        )}
        <div className={styles.slugTitleContainer}>
          <Tag href="#" size="small" className={styles.tag}>
            {post.tags[0]}
          </Tag>
          <h1 className={styles.slugArticleTitle}>{post.title}</h1>
        </div>
      </div>

      <BlogDetails post={post} slug={params.slug} />
    </article>
  );
};

export default BlogPostPage;
