"use client";
import React from "react";
import Image from "next/image";
import styles from "../blog.module.css";
import BlogContainer from "./blogCont";
import BlogPost from "./blogPost";

const blogPosts = [
  { id: 1, image: '1', title: 'First Post', content: 'This is the content of the first post.', updatedAt: '2024-08-08', tag: 'Maintaince Tips' },
  { id: 2,  image: '2', title: 'Second Post', content: 'This is the content of the second post.', updatedAt: '2024-08-08', tag: 'Maintaince Tips' },
];

const landingPage = () => {
  return (
    <section className={styles.container}>
      <h5>Blog</h5>
      <h1>
        Your <span>Ultimate </span>
        Source for Automotive Insights and Trends!
      </h1>
      <p>
        Discover the latest trends, insights, and expert advice in the
        automotive world. Our blog is your go-to resource for all things
        automotive, whether you&apos;re a car enthusiast, a dealership owner, or
        simply looking to stay informed about the industry.
      </p>
      <div className={styles.article}>
        <div className={styles.articleImg}>
          <Image src="/Rectangle 74.png" fill />
        </div>
        <div className={styles.blogTextWrapper}>
          <div className={styles.blogText}>
            <p>Industry News</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
            >
              <circle cx="2" cy="2.5" r="2" fill="#0500FF" />
            </svg>
            <p>7 Min Read</p>
          </div>
          <h2 className={styles.articleTitle}>
            The Future of Electric Vehicles - What you need to Know
          </h2>
          <button>
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
          </button>
        </div>
      </div>
    </section>
    <BlogContainer>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} image={ post.image }title={post.title} updatedAt={post.updatedAt} tag={post.tag} content={post.content} />
      ))}
    </BlogContainer>
  );
};

export default landingPage;

const SinglePostPage = () => {
  return <div>SinglePostPage</div>;
};

export default SinglePostPage;
