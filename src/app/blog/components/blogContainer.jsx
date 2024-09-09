import React from "react";
import styles from "../blog.module.css";
import BlogPost from "./blogPost";

const BlogContainer = ({ posts }) => {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.articleTitle}>Recent Posts</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <article key={post._id}>
            <BlogPost post={post} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogContainer;
