import React, { Suspense } from "react";
import { MapPin, PlaneIcon, Star } from "lucide-react";
import { banner_style } from "../Styles/styles";
import VenueMap from "../components/ui/VenueMap";
import venue from "../assets/Images1/venue1.webp"
const Venue = () => {
  return (
    <section className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      
      {/* Banner Section (CLONED FROM ORATORS) */}
      <div
        className={`${banner_style} w-full mx-auto venue-banner`}
        style={{
          backgroundImage: `url(${venue})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-slate-100 text-3xl sm:text-5xl md:text-6xl font-bold px-4">
          Our Venue
        </h1>
      </div>

      {/* Intro Section (SAME PATTERN AS ORATORS INTRO) */}
      <div className="flex flex-col px-4 md:px-12 py-4 items-center justify-center mt-2 text-center">
        <h2 className="text-base md:text-lg font-normal text-one mb-4">
          Proposed Conference Venue
        </h2>

        <h1 className="text-xl md:text-2xl gap-2 flex flex-row items-center justify-center">
          <MapPin /> Coming Soon
        </h1>

        {/* <p className="text-sm md:text-[15px] flex flex-row items-center font-normal justify-center">
          <PlaneIcon className="mr-1" /> Coming soon
        </p> */}

        {/* <h3 className="text-sm md:text-[18px] gap-2 font-normal flex flex-row items-center justify-center">
          <Star size={18} /> 4.5 rating
        </h3> */}
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center my-6 gap-6 px-4 md:px-12">
        <div className="lg:w-[40vw]">
          <img
            src="https://static-resources-elementor.mirai.com/wp-content/uploads/sites/1396/restaurante-home-rooftop.jpg"
            alt="Venue"
            loading="lazy"
            className="w-full h-[30vh] md:h-[40vh] lg:h-[50vh] object-cover rounded-xl"
          />
        </div>

        <div className="w-full lg:w-auto z-0">
          <Suspense
            fallback={
              <div className="w-full h-[50vh] flex items-center justify-center">
                Loading map...
              </div>
            }
          >
            <VenueMap />
          </Suspense>
        </div>
      </div>

    </section>
  );
};

export default Venue;





  {/* <h1 className="my-8 text-2xl md:text-3xl text-center">Places to visit near the Venue</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 md:px-12 w-full md:mb-8 mb-2">
          {visit_places.map((item, index) => (
            <div key={index} className="flex gap-2 flex-col px-4 text-left items-start">
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="h-28 w-full sm:w-44 object-cover rounded-xl"
              />
              <h1 className="text-sm md:text-[16px] font-normal leading-tight">
                {item.name}
              </h1>
              <p className="text-sm md:text-[16px] leading-tight flex flex-row font-normal items-center text-one">
                <MapPin size={16} className="mr-1" /> {item.km}km
              </p>
            </div>
          ))}
        </div> */}