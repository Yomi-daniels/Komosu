import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import styles from "../blog.module.css";
import Image from "next/image";
import BlogDetails from "../components/blogDetails";
import Tag from "@/app/components/tag/tag";
import RenderMdx from "../components/renderMdx";
import { cx } from "@/utils";
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
  console.log("post", post.tags[0]);
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
        <div className={cx("gap-4", styles.slugTitleContainer)}>
          <Tag
            href="#"
            size="small"
            className={cx("text-white  text-center justify-center", styles.tag)}
            name={post.tags[0]}
          />

          <h1 className={styles.slugArticleTitle}>{post.title}</h1>
        </div>
      </div>

      <BlogDetails post={post} slug={params.slug} />
      <div className="grid grid-cols-12 gap-12 mt-8 px-32">
        <div className="col-span-12  lg:col-span-3">
          <details
            className="border-[1px] mb-32 border-solid  border-[var(--btn)] text-dark  rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {post.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      <span className="">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx post={post} />
      </div>
    </article>
  );
};

export default BlogPostPage;
