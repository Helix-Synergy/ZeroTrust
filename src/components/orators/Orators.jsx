import React from "react";
import { Link } from "react-router-dom";
import { orators } from "../../utils/Orators/orators";
import OraterCard from "../ui/OraterCard";

const Orators = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 py-8 items-center justify-center my-8">
      <h1 className="text-2xl text-black md:text-3xl font-bold text-center">
       ZEROTRUSTAI -Orators
      </h1>
  

      <div className="flex flex-col md:flex-row cursor-default gap-6 items-center justify-center mt-4">
        {orators.slice(0, 4).map((item, idx) => (
          <OraterCard 
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            // link={item.link}
          />
        ))}
      </div>

      <Link to="/zerotrustai-orators"  >
        <button className="bg-one text-white px-10 md:px-20 py-2 rounded-full mt-6 text-sm md:text-base">
          View All
        </button>
      </Link>
    </div>
  );
};

export default Orators;
