import React from "react";

const OratorTemplate = ({ banner, image, name, from, about }) => {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-20">
      {/* Banner Section */}
      <div className="w-[95%] md:w-[90%] mx-auto h-[40vh] md:h-[50vh] mt-4 relative overflow-hidden rounded-[30px] shadow-xl">
        <img 
          src={banner} 
          alt="banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Profile Image with Glow */}
      <div className="relative z-10 -mt-32 md:-mt-40">
        <div className="rounded-full p-1 bg-white shadow-[0_0_50px_rgba(45,212,191,0.5)]">
          <img
            src={image}
            alt={name}
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white"
            loading="lazy"
          />
        </div>
      </div>

      {/* Name and Location */}
      <div className="mt-8 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          {name}
        </h1>
        <p className="text-teal-600 text-xl md:text-2xl font-medium mt-2">
          {from}
        </p>
      </div>

      {/* Bio Information */}
      <div className="max-w-4xl px-6 md:px-12 mt-10 mb-20">
        <p className="text-lg md:text-xl leading-relaxed text-slate-700 text-justify">
          {about}
        </p>
      </div>
    </div>
  );
};

export default OratorTemplate;
