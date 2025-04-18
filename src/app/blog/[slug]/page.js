import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import styles from "../blog.module.css";
import Image from "next/image";
import BlogDetails from "../components/blogDetails";
import Tag from "@/app/components/tag/tag";
import RenderMdx from "../components/renderMdx";
import { cx } from "@/utils";
import siteMetadata from "@/utils/siteMetaData";

// Function to generate the static params
export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList = Array.isArray(blog.image) ? blog.image : [blog.image];
  }

  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: ogImages,
    datePublished: publishedAt,
    dateModified: modifiedAt,
    author: [
      {
        "@type": "Person",
        name: blog?.author ? blog.author : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return jsonLd; // Optional: you can return JSON-LD here if required
}

const BlogPostPage = ({ params }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    notFound();
  }

  let imageList = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList = Array.isArray(blog.image) ? blog.image : [blog.image];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: blog.title,
    description: blog.description,
    image: imageList,
    datePublished: new Date(blog.publishedAt).toISOString(),
    dateModified: new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    author: [
      {
        "@type": "Person",
        name: blog?.author ? [blog.author] : siteMetadata.author,
        url: siteMetadata.twitter,
      },
    ],
  };

  return (
    <>
      {/* Embedding JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <div className={styles.blogImageBg}>
          {blog.image &&
            (typeof blog.image === "string" ? (
              <div className={styles.articleImg}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            ) : (
              <Image
                src={blog.image}
                placeholder="blur"
                blurDataURL={blog.image.blurhashDataUrl}
                alt={blog.title}
                width={blog.image.width}
                height={blog.image.height}
                className={styles.blogImage}
              />
            ))}
          <div className={cx("gap-4", styles.slugTitleContainer)}>
            <Tag
              href="/"
              size="small"
              className={cx("text-white text-center justify-center")}
              name={blog.tags[0]}
            />
            <h1 className={styles.slugArticleTitle}>{blog.title}</h1>
          </div>
        </div>

        <BlogDetails post={blog} slug={params.slug} />
        <div className="grid grid-cols-12 gap-12 mt-8 px-32">
          <div className="col-span-12 lg:col-span-3">
            <details
              className="border-[1px] mb-32 border-solid border-[var(--btn)] text-dark rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc && blog.toc.length > 0 ? (
                  blog.toc.map((heading) => (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0 data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start"
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}
                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  ))
                ) : (
                  <li>No content available</li>
                )}
              </ul>
            </details>
          </div>
          <RenderMdx post={blog} />
        </div>
      </article>
    </>
  );
};

export default BlogPostPage;
