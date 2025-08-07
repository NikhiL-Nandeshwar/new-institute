'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const examResultImages = [
  { src: "/results/slider-1.jpg", alt: "Result 1" },
  { src: "/results/slider-2.jpg", alt: "Result 2" },
  { src: "/results/slider-3.jpg", alt: "Result 3" },
];

export default function Results() {
  return (
    <section id="results" className="bg-stone-50 py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-800">Exam Achievements</h2>
        <p className="text-gray-600 mt-3 text-lg">
          Proud moments from our top performers
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <Carousel className="w-full mx-1.5">
          <CarouselContent>
            {examResultImages.map((img, i) => (
              <CarouselItem key={i} className="px-10 sm:px-12 md:px-3">

  <div className="relative aspect-video w-full bg-slate-100 border shadow-md rounded-xl overflow-hidden">
    <Image
      src={img.src}
      alt={img.alt}
      fill
      className="object-contain"
      sizes="(max-width: 768px) 100vw, 768px"
    />
  </div>
</CarouselItem>

            ))}
          </CarouselContent>

          {/* Navigation arrows */}
          <CarouselPrevious className="absolute text-indigo-900 bg-indigo-200 hover:bg-indigo-300 -left-3 md:-left-10 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute text-indigo-900 bg-indigo-200 hover:bg-indigo-300 right-0 md:-right-8 top-1/2 -translate-y-1/2 z-10" />

        </Carousel>
      </div>
    </section>
  );
}
