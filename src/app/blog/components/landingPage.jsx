import Image from "next/image";
import styles from "../blog.module.css";

const LandingPage = ({ blog }) => {
  return (
    <section className={styles.landingContainer}>
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
          <Image
            src="/Rectangle 74.png" // Adjust the image path
            alt={blog.title}
            placeholder="blur"
            blurDataURL={blog.image.blurhashDataUrl} // Blur effect for lazy loading
            fill
          />
        </div>
        <div className={styles.blogTextWrapper}>
          <div className={styles.blogText}>
            <p>{blog.tags.join(", ")}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
            >
              <circle cx="2" cy="2.5" r="2" fill="#0500FF" />
            </svg>
            <p>3 Min Read</p>
            {/* Estimated reading time */}
          </div>
          <h2 className={styles.articleTitle}>{blog.title}</h2>
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
  );
};

export default LandingPage;
