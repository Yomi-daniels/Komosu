"use client";
import { useRequestAccess } from "@/app/context/RequestAccessContext";
import RequestAccessModal from "@/sections/RequestAccessModal";

const GlobalRequestAccessModal = () => {
  const { isOpen, closeModal } = useRequestAccess();

  return <RequestAccessModal isOpen={isOpen} onClose={closeModal} />;
};

export default GlobalRequestAccessModal;
