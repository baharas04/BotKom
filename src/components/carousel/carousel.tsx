"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image"; 
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CarouselProps {
  items: { imageUrl: string; title: string; description: string; altText: string }[]; 
  autoplayDelay?: number; 
}

export const CarouselComponent: React.FC<CarouselProps> = ({
  items,
  autoplayDelay = 10000, 
}) => {
  const plugin = React.useRef(Autoplay({ delay: autoplayDelay, stopOnInteraction: false }));

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative w-full h-44 lg:h-[500px] rounded-lg"> {/* Responsive height for different breakpoints */}
              <Image
                src={item.imageUrl}
                alt={item.altText}
                width={1920} // Full width
                height={1080} // Use an appropriate aspect ratio for your image
                className="object-cover w-full h-full rounded-lg" // Cover the space while maintaining the image's aspect ratio
                layout="relative" 
              />
              <div className="absolute bottom-10 left-0 w-full text-center p-6 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{item.title}</h3> {/* Title text */}
                <p className="mt-2 text-sm sm:text-base md:text-lg">{item.description}</p> {/* Description text */}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
