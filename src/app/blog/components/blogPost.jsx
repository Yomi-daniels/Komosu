import Image from "next/image";
import styles from "../blog.module.css";
import Link from "next/link";

const BlogPost = ({ post }) => {
  if (!post) return null; // Handle case where no post is passed

  const { title, image, description, updatedAt, publishedAt } = post;

  return (
    <article className={styles.blogPost}>
      {/* Image */}
      {image && (
        <Image
          src={image.filePath.replace("../public", "")} // Adjust image path
          alt={title}
          width={post.image.width} // Set appropriate width
          height={post.image.height} // Set appropriate height
          className={styles.blogImage}
        />
      )}

      {/* Dates */}
      <div className="">
        <div className={styles.blogText}>
          <p>Published on: {new Date(publishedAt).toLocaleDateString()}</p>

          <p>Updated on: {new Date(updatedAt).toLocaleDateString()}</p>
        </div>

        {/* Title */}
        <h5 className={styles.articleTitle}>{title}</h5>

        {/* Description */}
        <p className={styles.articleDescription}>{description}</p>

        {/* Read More Button */}
        <Link
          href={`blog/${post._raw.flattenedPath}`}
          passHref
          className={styles.readMoreButton}
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
          >
            <path
              d="M12.3536 4.85355C12.5488 4.65829 12.5488 4.34171 12.3536 4.14645L9.17157 0.964466C8.97631 0.769204 8.65973 0.769204 8.46447 0.964466C8.2692 1.15973 8.2692 1.47631 8.46447 1.67157L11.2929 4.5L8.46447 7.32843C8.2692 7.52369 8.2692 7.84027 8.46447 8.03553C8.65973 8.2308 8.97631 8.2308 9.17157 8.03553L12.3536 4.85355ZM0 5H12V4H0V5Z"
              fill="black"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogPost;
