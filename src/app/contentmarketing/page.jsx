import ContentHub from "./ContentHub";
import contentStyles from "./contentmarketing.module.css";
import ContentMarketingLandingPage from "./contentmarketinglandingpage/ContentMarketingLandingPage";
import ContentMarketingServices from "./contentmarketingservices/ContentMarketingServices";
import ContentPricing from "./contentpricing/ContentPricing";
const Contentmarketing = () => {
  return (
    <section className={contentStyles.Contentmarketingpage}>
      <ContentMarketingLandingPage />
      <ContentHub />
      <div className={contentStyles.contentdiv}>
        <ContentMarketingServices />

        <ContentPricing />
      </div>
    </section>
  );
};

export default Contentmarketing;
