"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
// import casestyles from "../app/case-study/casestudy.module.css";
import casestyles from "../case-study/casestudy.module.css";

const slides = [
  {
    src: "/slider1.jpg",
    text: "Grow your own customer network - not Facebook’s.",
  },
  {
    src: "/slider2.jpg",
    text: "Engage directly with buyers – no algorithm limits",
  },
  {
    src: "/slider3.jpg",
    text: "Turn views into leads & sales – all within your platform.",
  },
  {
    src: "/slider4.jpg",
    text: "Get Started Today",
    button: { text: "Book a Demo", link: "/request-demo" },
  },
];

export default function DealershipPagination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${"relative w-full max-w-5xl mx-auto overflow-hidden"}${casestyles.carouselHeader}`}
    >
      <div className="relative w-full h-[500px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center">
              <h2 className="text-white text-[2rem] font-black mb-2">
                {slide.text}
              </h2>
              {slide.button && (
                <Link
                  href={slide.button.link}
                  className=" px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-600 transition mt-5"
                >
                  {slide.button.text}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
