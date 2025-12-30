import React from "react";

const OratorTemplate = ({ banner, image, name, from, about }) => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-[90%] mx-auto h-[58vh] text-center flex flex-col justify-center items-center bg-gray-900 mb-12 rounded-[20px]">
        <img src={banner} alt={name} className="w-full h-full object-cover rounded-[20px]" />
      </div>

      {/* profile image */}
      <div className="relative z-10 -mt-44">
        <img
          src={image}
          alt={name}
          className="max-w-64 max-h-64 object-cover rounded-full shadow-[0_10px_30px_0_var(--tw-shadow-color)] border-0 border-one bg-white"
          loading="lazy"
        />
      </div>

      {/* name and intro */}
      <div className="relative mt-[20px] flex flex-col items-center text-center">
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-one-600 text-lg">{from}</p>
      </div>

      {/* full description */}
      <div className="px-2 md:px-24 my-4 md:mb-16 mb-12">
        <p className="text-lg leading-[28px] text-center">{about}</p>
      </div>
    </div>
  );
};

export default OratorTemplate;
