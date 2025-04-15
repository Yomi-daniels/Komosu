import { FaTools, FaNetworkWired, FaUserShield, FaCogs, FaHandshake, FaChartBar } from "react-icons/fa";

const features = [
  {
    title: "Custom Solutions",
    description: "Our Designs Reflect Your Unique Brand Identity While Integrating Cutting-Edge Features.",
    image: "/Custom Solution.png",
    pill: true,
  },
  {
    title: "Dealer Hub Integration",
    description: "We Build A Social Media Hub Into Your Website, Offering Unparalleled Engagement Opportunities.",
    image: "/Integration.png",
    pill: true,
  },
  {
    title: "Expert Support",
    description: "From Content Creation To Advanced Functionality, We Ensure Your Site Is Both Stunning And Strategic.",
    image: "/Support.png",
    pill: true,
  },
  {
    title: "All-In-One Solution",
    description: "No Need For Multiple Tools — Manage Engagement, Leads, And Insights In One Place.",
    image: "/Support.png",
    pillTop: true,
  },
  {
    title: "Trust & Credibility",
    description: "With Secure Platforms, Real-Time Support, And A Proven Track Record, We Help You Convert Clicks Into Customers.",
    image: "/Trust.png",
    pillTop: true,
  },
  {
    title: "Data-Driven Growth",
    description: "Leverage Real-Time Insights To Optimize Marketing & Sales.",
    image: "/Data.png",
    pillTop: true,
  },
];


const ContentMarketingServices = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
    <div className="flex flex-wrap relative">
      {features.map((feature, index) => {
        const removeTop = index < 3 ? "border-t-0" : "";
        const removeBottom = index >= 3 ? "border-b-0" : "";

        return (
          <div
            key={index}
            className={`group relative w-full md:w-1/3 border border-[#E6E6FF] p-6 text-left ${removeTop} ${removeBottom} flex flex-col items-start py-12 transition-all duration-300 ease-in-out hover:bg-[#f5f5f5] `}
          >
            {/* Top Pill for last 3 */}
            {feature.pillTop && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-bl-full rounded-br-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
            )}

            {/* Image/Icon */}
            {feature.image ? (
              <img
                src={feature.image}
                alt={feature.title}
                className="w-10 h-10 mb-4 object-contain"
              />
            ) : (
              <feature.icon className="text-3xl text-blue-500 mb-4" />
            )}

            {/* Bottom Pill for top 3 */}
            {feature.pill && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-tl-full rounded-tr-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
            )}

            {/* Text Content */}
            <h3 className="text-[24px] font-bold text-[#28282B] mb-2 transition-all duration-300 group-hover:text-[24.5px] group-hover:scale-105">
              {feature.title}
            </h3>
            <p className="text-[#585859] font-medium text-[18px] transition-all duration-300 group-hover:text-[18.2px] group-hover:scale-105">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  </section>
  );
};

export default ContentMarketingServices;
