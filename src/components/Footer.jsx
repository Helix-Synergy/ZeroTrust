import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { socialLinks, WhatsAppIcon } from "../utils/Quick Links/Links";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const nav_links = [
    { name: "About", link:"/about-zerotrustai"},
    { name: "Executive Panel", link: "/executive-panel-members/" },
    { name: "Tracks", link: "/zerotrustai-conference-tracks/" },
    { name: "Orators", link:"/zerotrustai-orators" },
    { name: "Schedule", link: "/zerotrustai-event-schedule"},
    { name: "Venue", link: "/venue" },
    { name: "Event Partners", link: "/event_partners" },
    { name: "Contact", link: "/Contact" },
  ];

  return (
    <div className="flex flex-col rounded-t-2xl md:flex-row md:justify-between bg-accent/80 px-4 sm:px-6 md:px-12 py-8 md:py-10 text-white gap-10 md:gap-6 items-start md:items-stretch">

      {/* Grid 1 */}
      <div className="w-full md:w-1/4 flex flex-col mt-[10px] items-center md:items-start text-center md:text-left gap-4">
        <div className=" pt-10 p-4 rounded-xl">
          <img
            src={logo}
            alt="FoodMeet Logo"
            className="h-32 md:h-56 rounded-lg"
            loading="lazy"

          />
          <br />
        <p style={{}}>
   “Securing the Future with Zero-Trust Architecture and AI-Driven Defense”
        </p>
       
        </div>
      </div>

      {/* Grid 2 */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-accent w-full pb-1">
          Quick Links
        </h1>
        <div className="flex flex-col justify-evenly mt-6 gap-[10px] w-full">
          {nav_links.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-row gap-1 justify-center md:justify-start items-center text-sm sm:text-base text-white"
            >
              <ChevronRight size={16} />
              <Link to={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 3 */}
      <div className="w-full md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-accent w-full pb-1">
          Social Media
        </h1>
        <div className="flex flex-col mt-4 gap-2 w-full">
          {socialLinks.map(({ id, name, url, icon }) => (
            <div key={id} className="flex flex-row items-center justify-center md:justify-start">
              <Link
                to={url}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="text-white p-2 rounded-full text-md cursor-pointer flex flex-row items-center gap-2"
              >
                {icon}
                <p className="text-white">{name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Grid 4 */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 items-center md:items-start text-center md:text-left">
        <h1 className="text-one font-semibold text-2xl sm:text-3xl border-b border-accent w-full pb-1">
          Get In Touch
        </h1>
        <div className="flex flex-col gap-6 w-full">

          <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
            <WhatsAppIcon className="h-5 w-5 fill-orange" />
            <p>+1-305-239-8055</p>
          </div>

          <div className="flex flex-row gap-2 items-center justify-center md:justify-start text-sm sm:text-base">
            <Mail size="18" />
            <p>hello@helixconferences.com</p>
          </div>

          <div className="flex flex-row gap-2 items-start justify-center md:justify-start px-4 md:px-0 text-sm sm:text-base">
            <MapPin size="44" />
            <p className="text-left">
              Helix Conferences LLC,<br />
              45573 Shepard Drive, Suit#101,<br />
              Sterling, Virginia-20164, USA
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <Link
            to="https://helixconferences.com/buy-a-ticket"
            target="blank"
            className="bg-one px-8 sm:px-12 py-2 rounded-full mt-1 text-sm sm:text-base text-white hover:bg-accent transition"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
