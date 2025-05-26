'use client'
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTools, FaNetworkWired, FaUserShield, FaCogs, FaHandshake, FaChartBar } from "react-icons/fa";

const features = [
  {
    title: "Tailored for Your Dealership",
    description: "We don’t do templates. Your platform reflects your brand — and it’s built to convert browsers into buyers.",
    image: "/Custom Solution.png",
    pill: true,
  },
  {
    title: "Turn Your Site Into a Social Engine",
    description: "We embed a full engagement layer into your website — think likes, saves, comments, and sign-ups — all on your turf.",
    image: "/Integration.png",
    pill: true,
  },
  {
    title: "Real Help. Real Strategy.",
    description: "From launch to scale, we back you with hands-on guidance, content help, and proven playbooks that drive results.",
    image: "/Support.png",
    pill: true,
  },
  {
    title: "Everything in One Dashboard",
    description: "Engagement, leads, insights — no more jumping between tools. It’s all built into your site and easy to manage.",
    image: "/Support.png",
    pillTop: true,
  },
  {
    title: "Built to Earn Buyer Confidence",
    description: "Secure, mobile-first, and optimized for trust — we help you look great and sell better.",
    image: "/Trust.png",
    pillTop: true,
  },
  {
    title: "See What Buyers Want — Then Act On It",
    description: " Track behavior in real time, score leads automatically, and fine-tune offers based on what actually works.",
    image: "/Data.png",
    pillTop: true,
  },
];

const ContentMarketingServices = () => {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate the elements when they come into view
    gsap.utils.toArray(".feature-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0.5, y: 80 }, // Initial state
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%", // Start when the element is 80% from the top of the viewport
            end: "bottom 50%",
            scrub: true, // Smooth animation tied to scroll position
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <div className="flex flex-wrap relative">
        {features.map((feature, index) => {
          const removeTop = index < 3 ? "border-t-0" : "";
          const removeBottom = index >= 3 ? "border-b-0" : "";

          return (
            <div
              key={index}
              className={`group relative w-full md:w-1/3 border border-[#E6E6FF] p-6 text-left ${removeTop} ${removeBottom} flex flex-col items-start py-12 transition-all duration-300 ease-in-out hover:bg-[#f5f5f5] feature-card`}
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
