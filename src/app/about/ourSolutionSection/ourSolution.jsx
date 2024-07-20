import aboutstyles from "../aboutSection.module.css";

const OurSolutionSection = () => {
  return (
    <section className={aboutstyles.OurSolutionSection}>
      <div className={aboutstyles.whoareweHeader}>
        <h4>Our Solution</h4>
        <h2>
          At Komosu, we offer a wide range of service that is targeted to
          leverage your company’s performances{" "}
        </h2>
        <p>
          Komosu Network innovates lead generation for dealerships, combining
          content marketing and chatbot to boost sales and conversions. we
          enhance your online presence with content marketing , in-depth
          analysis of marketing trend all in a bid to keep you ahead.
        </p>
      </div>
    </section>
  );
};

export default OurSolutionSection;
