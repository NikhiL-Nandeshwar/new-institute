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
  { src: "/institute.png", alt: "Result 5" },
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

  const groupedImages = isSmallScreen
    ? examResultImages.map((img) => [img])
    : Array.from({ length: Math.ceil(examResultImages.length / 2) }, (_, i) =>
        examResultImages.slice(i * 2, i * 2 + 2)
      );

  return (
    <section id="results" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">Exam Achievements</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Proud moments from our top performers
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent>
            {groupedImages.map((group, i) => (
              <CarouselItem key={i}>
                <div className="flex flex-wrap justify-center gap-6">
                  {group.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative w-full sm:w-[500px] h-[500px] rounded-xl overflow-hidden border shadow-md"
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

          {/* Arrows - absolutely positioned to avoid vertical layout shift */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
