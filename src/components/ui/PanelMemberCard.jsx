import React from "react";

const PanelMemberCard = ({ image, name, about, from, link }) => {
  return (
    <div className="flex flex-col p-4 items-center rounded-lg h-full">
      <div className="border-2 border-one rounded-full inline-block">
        <img
          src={image}
          alt="ima"
          className="h-52 w-52 object-cover rounded-full m-2"
          loading="lazy"
        />
      </div>
      <h2 className="text-black font-bold text-md">{name}</h2>
      <p className='text-one text-md font-semibold text-center line-clamp-3'>
  {about}
</p>


      <p className="text-md font-semibold">{from}</p>
    </div>
  );
};

export default PanelMemberCard;
