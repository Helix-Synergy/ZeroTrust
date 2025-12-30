import React, { useState, useEffect } from "react";
import { banner_images } from "../utils/Banner Carousel/Carousel";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: banner_images.banner_one,
    },
    {
      id: 2,
      image: banner_images.banner_two,
    },

    {
      id: 3,
      image: banner_images.banner_three,
    },

    {
      id: 4,
      image: banner_images.banner_four,
    },

    
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-[90%] h-auto sm:h-[280px] md:h-auto border border-one mx-auto overflow-hidden rounded-2xl bg-slate-200">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black"
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 49,
        }}
        aria-label="Previous Slide"
      >
        <span style={{ fontSize: "1.5rem" }}>❮</span>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full hover:bg-black"
        style={{
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 49,
        }}
        aria-label="Next Slide"
      >
        <span style={{ fontSize: "1.5rem" }}>❯</span>
      </button>

    </div>
  );
};

export default Carousel;
