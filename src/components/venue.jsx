import React from "react";
import { ArrowRightCircle } from "lucide-react";
import ImageGalleryCard from "./ui/ImageGalleryCard";
import { Link } from "react-router-dom";
 
const venueList = [
  { id: 1, name: "Hozen -ji Temple" },
  { id: 2, name: "Nakanoshima park" },
  { id: 3, name: "Osaka Castle" },
  { id: 4, name: "Sumiyoshi Taisha" },
  { id: 5, name: "Umeda sky Buiding" },
  { id: 6, name: "Universal-Studios-Japan-" },

];
 
const Venue = () => {
  return (
    <div className="w-full py-8 px-4 md:px-12 flex flex-col justify-center items-center md:px-32 border-t">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
   ZEROTRUSTAI -Venue
      </h2>
 
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
        {/* Description Section */}
        <div className="w-full md:w-[22vw] py-2">
         
 
          {/* Highlighted Venue List */}
          <h1 className="">Proposed Conference Venue</h1>
          <h1 className="text-2xl md:text-2xl font-bold mb-8 text-left text-one">
      Osaka | Japan
          </h1>
          <ul className="mt-4 space-y-2 ">
            {venueList.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-2 text-sm md:text-[15px] leading-[26px] md:leading-[26px]"
              >
                <ArrowRightCircle size={16} className="text-one" />
                {item.name}
              </li>
            ))}
          </ul>
        </div>
 
        {/* Image Gallery Section */}
        <div className="w-full md:self-center">
          <ImageGalleryCard />
        </div>
      </div>
 
      {/* CTA Button */}
      <Link to="/venue">
        <button className="bg-accent text-white px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base hover:bg-one transition">
          View All
        </button>
      </Link>
    </div>
  );
};
 
export default Venue;