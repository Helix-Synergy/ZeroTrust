import React from 'react';
import {Link} from 'react-router-dom'
import { orators } from '../../assets/orators';
import OraterCard from '../ui/OraterCard';

const Orators = () => {
  return (
    <div className="flex flex-col px-4 md:px-12 h-auto items-center justify-center">
      <h1 className="text-2xl text-one md:text-3xl font-bold text-center">
      ZEROTRUSTAI  - Orators
      </h1>
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mt-6">
        {orators.map((item, idx) => (
          <OraterCard
            key={idx}
            name={item.name}
            about={item.about}
            from={item.from}
            image={item.image}
            link={item.link}
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