import { useState, useEffect } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  function openModal(data) {
    setContent(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setContent(null);
  }

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return { isOpen, content, openModal, closeModal };
}