"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RequestAccessContext = createContext();

export const RequestAccessProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RequestAccessContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </RequestAccessContext.Provider>
  );
};

export const useRequestAccess = () => useContext(RequestAccessContext);
