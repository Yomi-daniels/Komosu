"use client";

import React from "react";
import Link from "next/link"; // 👈 import Link from Next.js
import { motion } from "framer-motion";

const BlogPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 bg-black">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Blog Coming Soon!
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-gray-300 text-center max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We are brewing up some amazing content for you. Stay tuned!
      </motion.p>

      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold transition">
            Go Home
          </button>
        </Link>

        <Link href="/contact-us">
          <button className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full font-semibold transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default BlogPage;
