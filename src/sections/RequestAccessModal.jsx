"use client";
import { useEffect } from "react";
import DemoForm from "@/app/components/demoForm/demoForm";

const RequestAccessModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Hard lock scroll without layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      // Fully restore scroll without touching position
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-5xl mx-auto max-h-[90vh] overflow-y-auto rounded-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition"
        >
          ✕
        </button>

        <DemoForm />
      </div>
    </div>
  );
};

export default RequestAccessModal;