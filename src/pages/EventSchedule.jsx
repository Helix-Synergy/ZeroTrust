import React from "react";
import EventSchedule from "../components/EventSchedule";
import { banner_style } from "../Styles/styles";
import Sche from "../assets/Images1/Sche.png";

const Schedule = () => {
  return (
    <section className="w-full 2xl:max-w-[1280px] mx-auto justify-center items-center text-center">
      
      {/* Banner Section (CLONED) */}
      <div
        className={`${banner_style} w-full mx-auto schedule-banner`}
        style={{
          backgroundImage: `url(${Sche})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold px-4">
   ZEROTRUSTAI- 2026
        </h1>
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-12">
        <EventSchedule
          height={"auto"}
          name={"Download"}
          link={"/pharmaTech_schedule.pdf"}
        />
      </div>

    </section>
  );
};

export default Schedule;
