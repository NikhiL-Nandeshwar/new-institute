"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppBubble = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = "918149304666";
  const message = "Hello, I want to enquire about the admissions.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  return (
<div className="fixed bottom-5 right-3 z-50 flex flex-col items-center group">
      {/* Tooltip container: invisible on desktop until hover, hidden only on mobile */}
      <div
        className={`
          mb-2 px-3 py-1 bg-gray-600 text-white text-sm rounded-full shadow-lg animate-fade-in
          ${showTooltip ? "block" : "hidden md:block md:invisible md:group-hover:visible"}
        `}
      >
        Enquire About Admission
      </div>

      <Link
        href={waLink}
        target="_blank"
        onClick={handleClick}
        className="
          bg-green-500 text-white
          w-12 h-12
          md:w-13 md:h-13
          flex items-center justify-center
          rounded-full shadow-lg
          hover:scale-110 transition-transform duration-200
        "
      >
        <FaWhatsapp className="text-[28px] md:text-[31px]" />
      </Link>
    </div>
  );
};

export default WhatsAppBubble;
