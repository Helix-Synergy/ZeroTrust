import React from "react";
import { panel_members } from "../utils/Pannel Members/panel_members";
import PanelMemberCard from "../components/ui/PanelMemberCard";
import { Link } from "react-router-dom";
import { banner_style } from "../Styles/styles";

import page from "../assets/Images1/EXECTIVEPANNELMEMBERS.webp"
const Executive_members = () => {
  return (
    <section className="cw-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      {/* Banner Section */}
    <div
  className={`${banner_style} mx-auto text-one executive-panel-banner w-full`}
  style={{
    backgroundImage: `url(${page})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
        <h1 className=" text-white text-3xl sm:text-5xl md:text-6xl font-bold px-4">
     ZEROTRUSTAI    - Panel Members
        </h1>
      </div>

      {/* Intro Section */}
      <div className="flex flex-col px-4 md:px-12 py-4 items-center justify-center mt-2 text-center">
        <h2 className="text-2xl text-one md:text-3xl font-bold mb-2">
          Meet Our Distinguished Panel Members
        </h2>
        <p className="w-full md:w-2/3 text-sm md:text-base text-slate-600">
Leading global cybersecurity scientists, AI researchers, and innovators shaping the future of zero-trust security and AI-driven defense at ZEROTRUSTAI-2026
        </p>
      </div>

      {/* Orator Cards Grid */}
      <div className="grid grid-cols-1 px-4 md:px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 mb-12 items-center justify-center">
        {panel_members?.length > 0 ? (
          panel_members.map((item, idx) => (
            <Link
              to={item.link}
              key={idx}
              className="hover:scale-90 transition-transform"
            >
              <PanelMemberCard
                name={item.name}
                about={item.about}
                from={item.from}
                image={item.image}
                link={item.link}
              />
            </Link>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No panel-members available at the moment.
          </p>
        )}
      </div>
    </section>
  );
};

export default Executive_members;
