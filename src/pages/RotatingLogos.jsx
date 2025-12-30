import React, { useEffect, useState } from "react";
import { Sparkle } from "lucide-react";
import { Link } from "react-router-dom";
// Images for agri
import img1 from "../assets/tracks/img1.jpg";
import img2 from "../assets/tracks/img2.jpg"
import img3  from "../assets/tracks/img3.jpg";
import img4 from "../assets/tracks/img4.webp";
import img5 from "../assets/tracks/img5.avif";
import img6 from "../assets/tracks/img6.jpg"
import img7 from "../assets/tracks/img7.jpeg";
import img8 from "../assets/tracks/img8.png"
import img9 from "../assets/tracks/img9.jpg";
import img10 from "../assets/tracks/img10.jpeg"
import img11 from "../assets/tracks/img11.webp";
import img12 from "../assets/tracks/img12.webp"
import img13 from "../assets/tracks/img13.jpeg";
import img14 from "../assets/tracks/img14.webp"
import img15 from "../assets/tracks/img15.png";
import img16 from "../assets/tracks/img16.webp"
import img17 from "../assets/tracks/img17.jpg"
import img18 from "../assets/tracks/img18.png";
import img19 from "../assets/tracks/img19.jpeg"
import img20 from "../assets/tracks/img20.jpeg"

export const tracks = [
  {
    image: img1,
    title: "Future of AI & Security",
    description: (
      <>
This track explores the convergence of {" "}
        <Link
          to="/"
          className="
             hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
      artificial intelligence and cybersecurity,
        </Link> highlighting emerging technologies, predictive threat modeling, and automated defense strategies. Participants gain insights into AI-driven security architectures, proactive threat prevention, and the evolving landscape of cyber defense, enabling organizations to anticipate, detect, and neutralize sophisticated digital threats efficiently.
   
      </>
    ),
  },

  {
    image: img2,
    title: "Cybersecurity",
    description: (
      <>
{" "}
        <Link
          to="/about-zerotrustai" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     Cybersecurity 
        </Link>{" "} focuses on safeguarding digital assets, networks, and information systems from unauthorized access, cyberattacks, and data breaches. This track covers defensive strategies, vulnerability management, incident response, and emerging technologies. Attendees learn best practices to strengthen organizational security, mitigate risks, and ensure resilience against evolving cyber threats in complex environments.
      </>
    ),
  },

  {
    image: img3,
    title: "Zero-Trust Focused",
    description: (
      <>
{" "}
        <Link
          to="/zerotrustai-event-schedule" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  Zero-trust security
        </Link> eliminates implicit trust, enforcing strict verification for all users, devices, and applications. This track examines implementation strategies, identity and access management, micro-segmentation, and policy frameworks. Participants gain practical insights into building resilient, secure networks that minimize attack surfaces while ensuring seamless, secure access across distributed systems.
      </>
    ),
  },

  {
    image: img4,
    title: "Aerospace",
    description: (
      <>
     The   {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Aerospace 
        </Link>{" "} track explores cybersecurity challenges in aviation, satellites, and space systems. Topics include secure communications, threat detection, AI-enhanced defense, and regulatory compliance. Participants learn strategies to protect critical aerospace infrastructure, mitigate cyber risks, and integrate AI-based monitoring for resilient, secure operations in both civil and defense aerospace sectors.

      </>
    ),
  },

  {
    image: img5 ,
    title: "Threat Detection & Response",
    description: (
      <>
This track emphasizes proactive strategies for identifying and mitigating cyber threats. Topics include intrusion detection, real-time monitoring, incident response, and AI-enhanced detection systems. Participants gain insights into designing effective threat response workflows, improving detection accuracy, and reducing response times to safeguard critical infrastructure against{" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    sophisticated cyberattacks.
        </Link>{" "}
   
      </>
    ),
  },

  {
    image: img6,
    title: "Data Protection",
    description: (
      <>

        <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   Data protection
        </Link>{" "}  focuses on securing sensitive information across organizations. This track covers encryption, secure storage, access control, and regulatory compliance. Attendees learn best practices for safeguarding data integrity, confidentiality, and availability, ensuring compliance with global standards while mitigating risks of breaches, leaks, and ransomware attacks in digital ecosystems.
     
      </>
    ),
  },

  {
    image: img7,
    title: "AI Forensics",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
     AI forensics
        </Link>{" "}  combines artificial intelligence with digital investigation techniques to analyze cyber incidents. This track covers threat attribution, anomaly detection, evidence preservation, and AI-assisted forensic tools. Participants gain expertise in leveraging AI to uncover attack vectors, trace malicious activity, and enhance cybersecurity investigations with speed, accuracy, and reliability.
      </>
    ),
  },

  {
    image:  img8,
    title: "Defense Technology",
    description: (
      <>
      Defense technology explores advanced tools and systems for national security and cyber defense. Topics include AI-enhanced cybersecurity platforms, secure communications, autonomous defense systems, and threat mitigation. Attendees gain insights into integrating cutting-edge technology to strengthen cyber defenses, protect critical infrastructure, and support strategic security operations worldwide. {" "}
        <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  
        </Link>{" "} 
      
      </>
    ),
  },

  {
    image: img9,
    title: "Risk Management",
    description: (
      <>
Risk management focuses on identifying, assessing, and mitigating cybersecurity threats and vulnerabilities. This track covers risk assessment frameworks, AI-assisted threat modeling, compliance, and incident response planning. Participants learn strategies to prioritize threats, allocate resources efficiently, and implement proactive measures that enhance organizational resilience and{" "}
        <Link
          to="/about-zerotrustai" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
  digital security. 
        </Link>{" "}

      </>
    ),
  },

  {
    image: img10,
    title: "Intelligence & Innovation",
    description: (
      <>
 This track examines how intelligence-driven approaches and{" "}
        <Link
          to="/event_partners"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
innovative technologies 
        </Link>{" "} transform cybersecurity. Topics include AI-based threat intelligence, predictive analytics, and emerging defensive solutions. Participants explore strategies to anticipate cyber threats, accelerate innovation in security practices, and leverage AI to gain a strategic advantage in both defense and enterprise cybersecurity operations.

      </>
    ),
  },

  {
    image: img11,
    title: "AI Encryption",
    description: (
      <>
     {" "}
        <Link
          to="/"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
AI encryption 
        </Link>  explores leveraging artificial intelligence to strengthen cryptographic techniques and secure communications. This track covers quantum-resistant encryption, automated key management, secure data transmission, and AI-enhanced protocols. Participants learn to implement adaptive, intelligent encryption solutions that protect sensitive information against evolving cyber threats and sophisticated attacks.
      </>

    ),
  },

  {
    image: img12,
    title: "Digital Forensics",
    description: (
      <>
Digital forensics focuses on investigating cyber incidents, preserving evidence, and analyzing malicious activity. This track covers forensic tools, AI-assisted investigations, malware analysis, and regulatory compliance. Participants gain insights into systematically uncovering cyberattacks, tracing threat actors, and supporting legal and organizational responses to digital security breaches. {" "}
        <Link
          to="/event_partners" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
   
        </Link>{" "}    
      
      </>
    ),
  },

  {
    image: img13,
    title: "API Security",
    description: (
      <>
{" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       API security
        </Link> ensures safe interactions between software applications and services. This track covers threat detection, authentication, encryption, and vulnerability mitigation for APIs. Participants learn strategies to prevent data breaches, ensure secure integrations, and maintain the integrity of modern cloud-native and AI-driven systems critical for organizational operations.

        
      </>
    ),
  },

  {
    image:img14,
    title: "Future & Innovation",
    description: (
      <>
This track explores emerging technologies, trends, and innovations shaping the future of cybersecurity. Topics include AI-driven defense, zero-trust frameworks, autonomous monitoring, and predictive analytics. Participants gain insights into forward-looking strategies, anticipate next-generation threats, and design resilient security infrastructures for rapidly evolving {" "}
        <Link
          to="/about-zerotrustai"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       digital environments.
        </Link>  
        
      </>
    ),
  },

  {
    image: img15,
    title: "Biomedical sciences",
    description: (
      <>
      {" "}
        <Link
          to="/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       AI monitoring
        </Link>  focuses on real-time surveillance of systems using artificial intelligence. This track covers anomaly detection, behavioral analytics, threat prediction, and automated alerts. Participants learn to implement intelligent monitoring solutions that enhance situational awareness, improve threat response times, and strengthen proactive cybersecurity defenses across enterprise networks.
     
      </>
    ),
  },

  {
    image: img16,
    title: "Network Detection",
    description: (
      <>
Network detection involves identifying malicious activity within digital networks. This track covers intrusion detection systems, AI-based traffic analysis, anomaly detection, and threat intelligence. Participants gain practical knowledge to detect and mitigate network threats, ensuring secure connectivity, uninterrupted operations, and proactive protection against evolving cyberattack strategies. {" "}
        <Link
          to= "/zerotrustai-orators"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
        
        </Link> 
</>
    ),
  },

  {
    image:img17,
    title: "Cognitive Defense",
    description: (
      <>
 Cognitive defense leverages AI and machine learning to simulate human reasoning in cybersecurity. This track explores autonomous threat analysis, predictive defense models, and decision-making algorithms. Participants learn to deploy intelligent systems that anticipate attacks, adapt to emerging threats, and provide scalable, dynamic protection across complex {" "}
        <Link
          to="/contact"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       digital infrastructures.
        </Link>  
  
      </>
    ),
  },
// Ethical

  {
    image: img18,
    title: "Zero-Trust Cloud",
    description: (
      <>
   {" "}
        <Link
          to="https://helixconferences.com/buy-a-ticket"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
       Zero-trust cloud
        </Link>  focuses on securing cloud environments through strict access verification and continuous monitoring. This track covers cloud-native security frameworks, identity management, segmentation, and AI-enhanced threat detection. Participants explore strategies to protect cloud infrastructure, data, and applications while enabling secure, scalable, and resilient cloud adoption.

      </>
    ),
  },
  // Microbiome Engineering
  
  {
    image: img19,
    title: " Cyber Resilience",
    description: (
      <>
  {" "}
        <Link
          to="/venue"
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
Cyber resilience 
        </Link> emphasizes an organization’s ability to withstand, respond to, and recover from cyber incidents. This track covers risk assessment, incident response, business continuity planning, and AI-assisted recovery strategies. Participants gain insights into creating robust, adaptive defenses that minimize downtime, protect critical assets, and ensure operational continuity.
      </>
    ),
  },
  {
    image:img20,
    title: "AI Radar",
    description: (
      <>
     I Radar explores advanced AI-based threat detection and situational {" "}
        <Link
          to="/about-zerotrustai" 
          className="hover:text-accent hover:decoration-accent
             transition-colors duration-300"
        >
    awareness systems. 
        </Link>{" "} This track covers predictive monitoring, anomaly detection, automated threat intelligence, and response coordination. Participants learn to leverage AI radar technologies to detect emerging cyber threats early, enhance decision-making, and improve the overall security posture of organizations and critical infrastructure
       
      </>
    ),
  },
];

const StaticTracks = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* <style>{`
        @keyframes pulseShadow {
          0%, 100% {
            box-shadow: 0 0 0px rgba(44, 211, 35, 0.2);
          }
          50% {
            box-shadow: 0 0 18px 6px rgb(122,179,38);
          }
        }

        .animate-pulseShadow {
          animation: pulseShadow 3s ease-in-out infinite;
        }

        .transition-custom {
          transition: all 0.8s ease-in-out;
        }
      `}</style> */}

      <div className="relative mt-14">
        {/* Fixed Top-Right Button */}
        <div className="fixed top-[22%] right-[1%] z-50 transition-custom">
          <a
            href="/abstract-submission"
            aria-label="Submit abstract"
            className="bg-one rounded-full text-white text-sm font-medium px-3 py-3 select-none transition-transform hover:scale-110 animate-pulseShadow"
          >
            Submit Abstract
          </a>
        </div>

        {/* Track Content */}
        <div className="container mx-auto px-4 py-10 space-y-20 flex flex-col items-center">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="relative w-[80%] flex flex-col md:flex-row items-stretch md:space-x-6"
            >
              <div className="flex-shrink-0 bg-white border shadow-xl rounded-2xl p-2 w-full md:w-1/3">
                <img
                  src={track.image}
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="bg-white border shadow-xl rounded-2xl p-6 w-full md:w-2/3 mt-12 md:mt-0 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-1 text-one flex items-center gap-2">
                  <Sparkle className="fill-one" />
                  {track.title}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold mb-3">
                  {track.subtitle}
                </h3>
                <p className="text-md text-gray-800 leading-relaxed">
                  {track.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StaticTracks;
