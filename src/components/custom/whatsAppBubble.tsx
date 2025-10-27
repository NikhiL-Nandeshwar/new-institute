"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "918149304666";
  const message = "Hello, I want to enquire about the admissions.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // For mobile tap tooltip behavior
  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 flex items-center gap-2 z-50">
      {showTooltip && (
        <div className="px-3 py-1 bg-gray-500 text-white text-sm rounded-full shadow-lg animate-fade-in">
          Enquire about Admission
        </div>
      )}

      <Link
        href={waLink}
        target="_blank"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleClick}
        className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      >
        <FaWhatsapp size={30} />
      </Link>
    </div>
  );
};

export default WhatsAppBubble;
