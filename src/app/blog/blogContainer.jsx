import React from "react";
import styles from "./blogContainer.module.css";
import BlogPost from "./components/blogPost";

const BlogContainer = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </div>
  );
};

export default BlogContainer;
