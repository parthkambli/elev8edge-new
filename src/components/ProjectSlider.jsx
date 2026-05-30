import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LazyImage from "./ui/LazyImage";

export default function ProjectSlider({ images }) {
const [current, setCurrent] = useState(0);
const [hovered, setHovered] = useState(false);
const [transition, setTransition] = useState(true);
const hasMultipleImages = images.length > 1;


const nextSlide = () => {
  if (!hasMultipleImages) return;

  setCurrent((prev) => prev + 1);
};

const prevSlide = () => {
  if (!hasMultipleImages) return;

  setCurrent((prev) =>
    prev === 0 ? images.length - 1 : prev - 1
  );
};

  useEffect(() => {
    if (!hovered || !hasMultipleImages) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 1200);

    return () => clearInterval(interval);
  }, [hovered, hasMultipleImages]);

  useEffect(() => {
  if (current !== images.length) return;

  const timer = setTimeout(() => {
    setTransition(false);
    setCurrent(0);

    setTimeout(() => {
      setTransition(true);
    }, 50);
  }, 700);

  return () => clearTimeout(timer);
}, [current, images.length]);

  return (
    <div
      className="relative h-[260px] w-full overflow-hidden bg-black sm:h-[340px] md:h-[520px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Images */}
        <div
        className="flex h-full"
        style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition
            ? "transform 700ms ease-in-out"
            : "none",
        }}
        >
        {(hasMultipleImages ? [...images, images[0]] : images).map(
          (img, index) => (
          <div
            key={index}
            className="h-full min-w-full"
          >
            <LazyImage
              src={img}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Mobile Arrows */}
      {hasMultipleImages && (
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white md:hidden"
      >
        <ChevronLeft size={20} />
      </button>
      )}

      {hasMultipleImages && (
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white md:hidden"
      >
        <ChevronRight size={20} />
      </button>
      )}
    </div>
  );
}