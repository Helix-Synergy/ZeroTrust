import React, { useState, useEffect } from "react";
import ScheduleData from "./ScheduleData";
import { Link } from "react-router-dom";

const EventSchedule = ({ height, name, link }) => {
  const [plan1, setPlan1] = useState([]);
  const [plan2, setPlan2] = useState([]);
  const [plan3, setPlan3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    const loadSchedules = async () => {
      setLoading(true);
      try {
        const [plan1Module, plan2Module, plan3Module] = await Promise.all([
          import("../utils/Schedule Plans/schedule_plan1"),
          import("../utils/Schedule Plans/schedule_plan2"),
          import("../utils/Schedule Plans/schedule_plan3"),
        ]);
        setPlan1(plan1Module.default);
        setPlan2(plan2Module.default);
        setPlan3(plan3Module.default);
      } catch (err) {
        console.error("Failed to load schedules:", err);
        setPlan1([]);
        setPlan2([]);
        setPlan3([]);
      } finally {
        setLoading(false);
      }
    };
    loadSchedules();
  }, []);

  const renderSchedule = () => {
    switch (selectedDay) {
      case 1:
        return plan1;
      case 2:
        return plan2;
      case 3:
        return plan3;
      default:
        return [];
    }
  };

  return (
    <div className="w-full bg-one/20 rounded-2xl mx-auto px-4 md:px-12 py-8 flex flex-col items-center">
      <p className="text-3xl font-semibold text-black">Event Schedule</p>

      {/* Day selection buttons */}
    <div className="flex flex-wrap justify-center gap-4 my-6  bg-one/20 h-auto p-4 rounded-2xl shadow-lg backdrop-blur-sm">

        {[1, 2].map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`flex items-center gap-3 px-4 py-2 rounded-full border border-accent/40 text-xs md:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
              selectedDay === day
                ? "bg-one text-white"
                : "bg-transparent text-accent hover:scale-105 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
            }`}
          >
            <h1 className="bg-white text-black px-3 py-1 rounded-md font-semibold shadow-sm">
              Day {day}
            </h1>
            <p className="text-base md:text-lg font-semibold text-white drop-shadow-sm">
              {day === 1 ? (
                <>
                  24<sup></sup> Sep 2026
                </>
              ) : (
                <>
                  25<sup></sup> Sep 2026
                </>
              )}
            </p>
          </button>
        ))}
      </div>

      <div className="w-full rounded-3xl bg-one/20">
        {loading ? (
          <p className="text-center text-lightGreen/70">Loading schedule...</p>
        ) : renderSchedule().length > 0 ? (
          <ScheduleData scheduleList={renderSchedule()} height={height} />
        ) : (
          <p className="text-center text-lightGreen/70">
            No schedule available.
          </p>
        )}
      </div>

      {/* {link &&
        (name === "DDownload" ? (
          <a
            // href=link{link}
            download
            className="bg-one text-white px-10 md:px-10 py-2 rounded-full mt-10 text-sm md:text-base inline-block text-center hover:bg-accent transition"
          >
            {name}
          </a>
        ) : (
          <Link>
          {/* // <Link to={link}> */}
            <button className="bg-one text-white px-10 md:px-10 py-2 rounded-full mt-10 text-sm md:text-base hover:bg-accent transition">
              Download
            </button>
          {/* </Link> */}
       {/* ))} } */}
    </div>
  );
};

export default EventSchedule;


// // For Conferences use the above code ( for single schedule.)

// // For Webinars use below code ( for three schedules)

// import React, { useState, useEffect } from "react";
// import ScheduleData from "./ScheduleData";
// import { Link } from "react-router-dom";

// const EventSchedule = ({ height, name, link }) => {
//   const [plan1, setPlan1] = useState([]);
//   const [plan2, setPlan2] = useState([]);
//   const [plan3, setPlan3] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [selectedZone, setSelectedZone] = useState("us"); // Default: United States

//   useEffect(() => {
//     const loadSchedules = async () => {
//       setLoading(true);
//       try {
//         const [plan1Module, plan2Module, plan3Module] = await Promise.all([
//           import("../utils/Schedule Plans/schedule_plan1"),
//           import("../utils/Schedule Plans/schedule_plan2"),
//           import("../utils/Schedule Plans/schedule_plan3"),
//         ]);
//         setPlan1(plan1Module.default);
//         setPlan2(plan2Module.default);
//         setPlan3(plan3Module.default);
//       } catch (err) {
//         console.error("Failed to load schedules:", err);
//         setPlan1([]);
//         setPlan2([]);
//         setPlan3([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     loadSchedules();
//   }, []);

//   const renderSchedule = () => {
//     switch (selectedZone) {
//       case "us":
//         return plan1;
//       case "eu":
//         return plan2;
//       case "apac":
//         return plan3;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div className="w-full bg-secondary rounded-2xl mx-auto px-4 md:px-12 py-8 flex flex-col items-center">
//       <p className="text-3xl font-semibold text-one">Event Schedule</p>

//       {/* Timezone Selection Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 my-6 bg-one/20 p-4 rounded-2xl shadow-lg backdrop-blur-sm">
//         {[
//           { key: "us", label: "United States", dateRange: "27th June 2025" },
//           { key: "eu", label: "Europe", dateRange: "27th June 2025" },
//           { key: "apac", label: "APAC", dateRange: "27th June 2025" },
//         ].map((zone) => (
//           <button
//             key={zone.key}
//             onClick={() => setSelectedZone(zone.key)}
//             className={`flex items-center gap-3 px-4 py-2 rounded-full border border-white/30 text-xs md:text-sm font-medium shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
//               selectedZone === zone.key
//                 ? "bg-one text-white"
//                 : "bg-transparent text-one hover:scale-105 hover:shadow-[0_6px_24px_rgba(0,0,0,0.15)]"
//             }`}
//           >
//             <h1 className="bg-white text-black px-3 py-1 rounded-md font-semibold shadow-sm">
//               {zone.label}
//             </h1>
//             <p className="text-base md:text-lg font-semibold drop-shadow-sm">
//               TimeZone
//             </p>
//           </button>
//         ))}
//       </div>

//       {/* Schedule Display */}
//       <div className="w-full rounded-3xl bg-white">
//         {loading ? (
//           <p className="text-center text-slate-500">Loading schedule...</p>
//         ) : renderSchedule().length > 0 ? (
//           <ScheduleData scheduleList={renderSchedule()} height={height} />
//         ) : (
//           <p className="text-center text-slate-500">No schedule available.</p>
//         )}
//       </div>

//       {/* Optional Button */}
//       {/* {link && (
//         <Link to={link} target={`${name === 'Download'?'blank':''}`}>
//           <button className="bg-one text-white px-10 md:px-10 py-2 rounded-full mt-10 text-sm md:text-base">
//             {name}
//           </button>
//         </Link>
//       )} */}
//       {link && (
//         <a href={link} download target="_blank" rel="noopener noreferrer">
//           <button className="bg-one text-white px-10 md:px-10 py-2 rounded-full mt-10 text-sm md:text-base">
//             {name}
//           </button>
//         </a>
//       )}
//     </div>
//   );
// };

// export default EventSchedule;
