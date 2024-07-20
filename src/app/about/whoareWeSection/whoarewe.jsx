import aboutstyles from "../aboutSection.module.css";
import Image from "next/image";
const WhoareweSection = () => {
  return (
    <section className={aboutstyles.Whoarewesection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4>Who are we?</h4>
        <h2>
          Komosu Network is committed to revolutionizing the automotive industry
          by providing innovative solutions.{" "}
        </h2>
        <p>
          our dedicated team of experts focuses on building strong relationships
          with clients, ensuring that they have more time to concentrate on what
          truly matters to them. We value hearing about their experiences and
          strive to support their journey every step of the way.
        </p>
      </div>
      <div className={aboutstyles.whoareweImageContainer}>
        <div className={aboutstyles.whoareWeImg}>
          <Image
            src="/Rectangle 14 (1).png"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
        <div className={aboutstyles.whoareWeImg2}>
          <Image
            src="/Rectangle 16 (1).png"
            alt="who are we image"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoareweSection;
