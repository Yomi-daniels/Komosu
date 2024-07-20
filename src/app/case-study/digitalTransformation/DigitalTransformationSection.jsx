import casestyles from "../casestudy.module.css";
// import Image from "next/image";
import TickImg from "@/app/webdesign/components/TickImg";
const DigitalTransformationSection = () => {
  return (
    <section className={casestyles.DigitalTransformationSection}>
      <div className={casestyles.headingsection}>
        <h5>Digital Transformation with Komosu Network</h5>
        <h2>
          Envisioning the Full Digital Transformation: <br />A Comprehensive
          Look at Marshall Group
        </h2>
        <p>
          Marshall Group, a renowned automotive dealership, has begun their
          digital transformation journey but has yet to realize its full <br />
          potential. Here’s how Komosu Network can elevate their operations with
          a complete suite of digital solutions.
        </p>
      </div>
      <div className={casestyles.secondheadingsection}>
        <h4>
          "Marshall Group currently faces several <br />
          challenges:
        </h4>
        <div className={casestyles.challanges}>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Outdated website design that does not cater to modern <br />
              user expectations.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Inefficient customer service processes leading to lost <br />{" "}
              leads.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Lack of integrated digital solutions for customer <br />{" "}
              engagement and transactions.
            </p>
          </div>
        </div>
      </div>

      <div className={casestyles.thirdheadingsection}>
        <h4 className={casestyles.thirdsectionheader}>
          To address these challenges, Komosu Network would implement the
          following solutions:
        </h4>
        <div className={casestyles.textWrapper}>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Web Design</h4>
              <p>
                Revamping Marshall Group’s website with a modern, responsive
                design that offers intuitive navigation and optimized user
                experience. This would result in a significant increase in
                online engagement and lead conversion.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>AI Chatbot</h4>
              <p>
                Integrating AI-powered chatbots to provide 24/7 customer
                support, book appointments, and facilitate vehicle reservations
                with a fully refundable fee. This innovation would streamline
                customer service and ensure every lead is noticed.
              </p>
            </div>
          </div>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Content Marketing</h4>
              <p>
                Developing a robust content marketing strategy, including a
                virtual content creator that generates dynamic, self-marketing
                content, social media campaigns, and targeted advertisements to
                drive more traffic to their website and enhance their online
                visibility.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>Lead Generation & CRM Integration</h4>
              <p>
                Implementing advanced lead generation tools and integrating them
                with their CRM system to manage and nurture leads more
                effectively.
              </p>
            </div>
          </div>
          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Digital Contracting and E-Signature Implementation</h4>
              <p>
                Introducing digital contracting and e-signature solutions to
                minimize paperwork, making the sales process faster and more
                efficient.
              </p>
            </div>
            <div className={casestyles.textconent}>
              <h4>Online Forms & Application Development</h4>
              <p>
                Creating online forms for applications and inquiries to simplify
                customer interactions and data collection
              </p>
            </div>
          </div>

          <div className={casestyles.textcontentflex}>
            <div className={casestyles.textconent}>
              <h4>Mobile Solution Deployment</h4>
              <p>
                Ensuring that all digital tools are mobile-friendly, allowing
                customers and staff to access them on-the-go."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={casestyles.secondheadingsection}>
        <h4>
          With these comprehensive digital solutions, <br /> Marshall Group
          could expect
        </h4>
        <div className={casestyles.challanges}>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              A significant increase in website traffic and lead <br />{" "}
              conversion rates.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              Enhanced customer satisfaction due to round-the-clock <br />{" "}
              support and seamless transaction processes.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>
              A streamlined sales process with reduced paperwork and <br />{" "}
              faster closing times.
            </p>
          </div>
          <div className={casestyles.challangescontent}>
            <div className={casestyles.TickImg}>
              <TickImg />
            </div>
            <p>Improved brand visibility and a stronger online presence.</p>
          </div>
        </div>
      </div>
      <p className={casestyles.lastheadingtext}>
        Through our comprehensive digital solutions, Marshall Group could fully
        realize their digital transformation, leading to increased sales and a
        stronger market presence. Let Komosu Network help you unlock your
        dealership’s full potential."
      </p>
    </section>
  );
};

export default DigitalTransformationSection;
