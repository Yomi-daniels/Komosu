import contentStyles from "../contentmarketing.module.css";
import Image from "next/image";
import GetStarted from "@/app/webdesign/components/GetStarted";

const ContentMarketingServices = () => {
  return (
    <section className={contentStyles.contentservicessection}>
      <div className={contentStyles.contentservicescontainer}>
        <div className={contentStyles.contentservicecontent}>
          <div className={contentStyles.contentServiceText}>
            <h3>Virtual Content Creator </h3>
            <p>At Komosu Network, we empower dealerships with a cutting-edge virtual content creator who works tirelessly on your dealership's behalf. This innovative tool transforms your content into compelling narratives that enhance the inherent appeal of each vehicle, making it stand out in the competitive market.</p>
            <GetStarted />
          </div>
          <div className={contentStyles.contentservicesImg}>
            <Image src="/Group 6324.png" fill objectFit="contain" />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div
            className={`${contentStyles.contentservicesImg} ${contentStyles.contentservicesImg2}`}
          >
            <Image
              src="/social campaign image.png"
              fill
              objectFit="contain"
            />
          </div>
          <div className={contentStyles.contentServiceText}>
            <h3>
            Social Media Campaigns
            </h3>
            <p>
            Coupled with targeted social media campaigns and strategic advertisements, our solutions are tailored to elevate your dealership's online presence and drive customer engagement.
            </p>
            <GetStarted />
          </div>
        </div>
        <div className={contentStyles.contentservicecontent}>
          <div className={contentStyles.contentServiceText}>
            <h3>Next-Generation Landing Pages</h3>
            <p>Our expertise extends to creating next-generation landing pages meticulously designed to maximize sales and conversions. We ensure improved performance and increased conversions by transforming your advertisements from low to high content ratings.</p>
            <GetStarted />
          </div>
          <div className={contentStyles.contentservicesImg}>
            <Image src="/nextgen landingpage img.png" fill objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingServices;
