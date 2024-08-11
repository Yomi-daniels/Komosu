"use client";
import { useRef, useState, useEffect } from "react";

const Magnet = ({ children, padding = 100, disabled = false }) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const m = useRef(null);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e) => {
      if (m.current) {
        const { left, top, width, height } = m.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = Math.abs(centerX - e.clientX);
        const distY = Math.abs(centerY - e.clientY);

        if (distX < width / 2 + padding && distY < height / 2 + padding) {
          setIsActive(true);
          const offsetX = (e.clientX - centerX) / 2;
          const offsetY = (e.clientY - centerY) / 2;
          setPosition({ x: offsetX, y: offsetY });
        } else {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled]);

  return (
    <div
      ref={m}
      style={{
        position: "relative",
        display: "inline-block",
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? "transform 0.3s ease-out" : "transform 0.5s ease-in-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default Magnet;
