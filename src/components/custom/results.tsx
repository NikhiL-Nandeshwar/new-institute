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

const examResultImages = [
  { src: "/institute.png", alt: "Result 1" },
  { src: "/institute.png", alt: "Result 2" },
  { src: "/institute.png", alt: "Result 3" },
  { src: "/institute.png", alt: "Result 4" },
  { src: "/institute.png", alt: "Result 5" }
];

export default function Results() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Tailwind's sm breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const groupedImages = isSmallScreen
    ? examResultImages.map((img) => [img]) // 1 image per slide
    : Array.from({ length: Math.ceil(examResultImages.length / 2) }, (_, i) =>
        examResultImages.slice(i * 2, i * 2 + 2) // 2 images per slide
      );

  return (
    <section id="results" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-indigo-800">Exam Achievements</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Proud moments from our top performers
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {groupedImages.map((group, i) => (
              <CarouselItem key={i}>
                <div className="flex justify-center gap-6">
                  {group.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-full sm:w-[500px] h-[500px] rounded-xl overflow-hidden border shadow-md mx-auto"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
