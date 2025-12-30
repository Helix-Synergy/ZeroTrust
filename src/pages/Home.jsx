import React from "react";
import HomeTemplate from "../components/HomeTemplate";
import FlipClock from "../components/ui/FlipClock";

const Home = () => {
  return (
    <>
      <div className="scroll-smooth relative h-[86vh] home flex flex-col md:flex-row py-12 scroll-x-hidden w-full">
        
        {/* Overlay - PURPLE themed */}
        <div className="absolute inset-0 bg-primary bg-opacity-60 z-0"></div>

        {/* Content */}
        <div className="relative z-2 flex flex-col items-start px-1 md:px-8 mt-4 justify-center h-full text-lightGreen text-2xl md:text-3xl font-bold">
          
          <div className="flex flex-row items-end gap-4">
            <h1 className="text-accent text-shadow-md font-bold text-5xl md:text-6xl">
          Sep
            </h1>

            <div className="flex flex-col justify-center items-start leading-tight">
              <p className="text-base md:text-lg font-bold text-one">
                24-25 | 2026
              </p>
              <p className="text-base md:text-lg font-bold text-one">
                Osaka | Japan 
              </p>
            </div>
          </div>

          <h1 className="text-3xl md:text-6xl my-4 w-full md:w-[90vw] text-white">
Zero-Trust Security & AI Defense Forum
          </h1>

          <p className="text-2xl md:text-5xl text-accent">
        ZEROTRUSTAI-2026
   
          </p>

          <div className="float-end mt-4">
            <FlipClock />
          </div>
        </div>

        <div className="fixed bottom-6 right-6 space-y-3 z-50">
          {/* Floating action buttons if needed */}
        </div>
      </div>

      <HomeTemplate />
    </>
  );
};

export default Home;
