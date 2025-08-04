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
    { src: "/institute.png", alt: "Result 1" },
    { src: "/institute.png", alt: "Result 2" },
    { src: "/institute.png", alt: "Result 3" },
    { src: "/institute.png", alt: "Result 4" },
    { src: "/institute.png", alt: "Result 5" }

];

export default function Results() {
    return (
        <section id='results' className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-indigo-700">Exam Achievements</h2>
                <p className="text-gray-600 mt-3 text-lg">Proud moments from our top performers</p>
            </div>

            <div className="max-w-6xl mx-auto">
                <Carousel className="w-full">
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(examResultImages.length / 2) }).map((_, i) => (
                            <CarouselItem key={i}>
                                {/* For md and above: 2 images | For smaller: 1 image */}
                                <div className="flex flex-col sm:flex-row justify-center gap-6">
                                    {examResultImages.slice(i * 2, i * 2 + 2).map((img, idx) => (
                                        <div
                                            key={idx}
                                            className="relative w-full sm:w-[48%] h-[500px] rounded-xl overflow-hidden border shadow-md mx-auto"
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
