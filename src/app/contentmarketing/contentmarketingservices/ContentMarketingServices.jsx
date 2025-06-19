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
    title: "See What Buyers Want, Then Act On It",
    description: " Track behavior in real time, score leads automatically, and fine-tune offers based on what actually works.",
    image: "/Data.png",
    pillTop: true,
  },
];

const ContentMarketingServices = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".features-wrapper",
            start: "top 85%",
            end: "bottom 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    mm.add("(min-width: 769px)", () => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-wrapper",
            start: "top 80%",
            end: "bottom 70%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-left">
      <div className="features-wrapper flex flex-wrap relative">
        {features.map((feature, index) => {
          const removeTop = index < 3 ? "border-t-0" : "";
          const removeBottom = index >= 3 ? "border-b-0" : "";

          return (
            <div
              key={index}
              className={`group relative w-full md:w-1/3 border border-[#E6E6FF] p-6 text-left ${removeTop} ${removeBottom} flex flex-col items-start py-12 transition-all duration-300 ease-in-out md:hover:bg-[#f5f5f5] feature-card`}
            >
              {feature.pillTop && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-bl-full rounded-br-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
              )}

              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-10 h-10 mb-4 object-contain"
                />
              ) : (
                <feature.icon className="text-3xl text-blue-500 mb-4" />
              )}

              {feature.pill && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-[#D9D9D9] rounded-tl-full rounded-tr-full shadow-sm transition-colors duration-300 group-hover:bg-btn" />
              )}

              <h3 className="text-[24px] font-bold max-sm:text-[20px] text-[#28282B] mb-2 transition-all duration-300 md:group-hover:text-[24.5px] md:group-hover:scale-105">
                {feature.title}
              </h3>
              <p className="text-[#585859] font-medium text-[18px] transition-all duration-300 md:group-hover:text-[18.2px] md:group-hover:scale-105">
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
