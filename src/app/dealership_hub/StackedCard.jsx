"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const sections = [
  { id: 1, color: "#ff5733", text: "Section 1" },
  { id: 2, color: "#33aaff", text: "Section 2" },
  { id: 3, color: "#33cc33", text: "Section 3" },
];

const StackedCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {sections.map((section, index) => {
        const opacity = useTransform(
          scrollYProgress,
          [index * 0.3, (index + 1) * 0.3],
          [1, 0]
        );

        return (
          <motion.div
            key={section.id}
            style={{
              backgroundColor: section.color,
              opacity,
            }}
            className="sticky top-0 h-screen flex items-center justify-center text-white text-4xl font-bold"
          >
            {section.text}
          </motion.div>
        );
      })}
    </div>
  );
};

export default StackedCards;
