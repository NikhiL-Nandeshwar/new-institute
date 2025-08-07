'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define image list with orientation
const examResultImages = [
  { src: "/results/b-1.jpg", alt: "Result 1", orientation: "portrait" },
  { src: "/results/b-2.jpg", alt: "Result 2", orientation: "portrait" },
  { src: "/results/b-3.jpg", alt: "Result 3", orientation: "portrait" },
  { src: "/results/b-4.jpg", alt: "Result 4", orientation: "portrait" },
  { src: "/results/b-5.jpg", alt: "Result 5", orientation: "landscape" },
  { src: "/results/b-6.jpg", alt: "Result 6", orientation: "landscape" },
  { src: "/results/b-7.jpg", alt: "Result 7", orientation: "portrait" },
];

export default function Results() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  // Group logic
  const groupedImages = [];
  if (isSmallScreen) {
    // Always 1 image per slide on small screens
    for (const img of examResultImages) {
      groupedImages.push([img]);
    }
  } else {
    // On desktop: 2 portraits or 1 landscape per slide
    let tempGroup: typeof examResultImages = [];
    for (const img of examResultImages) {
      if (img.orientation === "landscape") {
        groupedImages.push([img]);
      } else {
        tempGroup.push(img);
        if (tempGroup.length === 2) {
          groupedImages.push(tempGroup);
          tempGroup = [];
        }
      }
    }
    if (tempGroup.length > 0) {
      groupedImages.push(tempGroup);
    }
  }

  return (
    <section id="results" className="bg-stone-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">Exam Achievements</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Proud moments from our top performers
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {groupedImages.map((group, i) => (
              <CarouselItem key={i} className="px-3">
                <div
                  className={`flex justify-center ${group.length === 2 ? "flex-row gap-6 flex-wrap" : "flex-col items-center"
                    }`}
                >
                  {group.map((img, idx) => {
                    const isLandscape = img.orientation === "landscape";
                    return (
                      <div
                        key={idx}
                        className={`relative bg-slate-100 overflow-hidden border shadow-md rounded-xl
                          ${isLandscape
                            ? "w-full sm:w-[45rem] h-[30rem]"
                            : "w-full sm:w-[35rem] h-[35rem]"
                          }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
