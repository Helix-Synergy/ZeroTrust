import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuickLinks from "./components/ui/QuickLinks";
import ScrollToTop from "./components/ScrollToTop";
import EpmTemplate from "./components/epms/EpmTemplate";
import OratorDetails from "./components/orators/OratorsDetails";
import Venue from "./pages/Venue"

// Pages (eagerly loaded)
import Home from "./pages/Home";
import Orators from "./pages/Orators";
import EventSchedule from "./pages/EventSchedule";
import SponsorshipPackages from "./pages/SponsorshipPackages";
import AboutOralMed from "./pages/About";
import ContactForm from "./pages/Contact";
import RotatingLogos from "./pages/RotatingLogos";
import AbstractSubmission from "./pages/AbstractSubmission";
import BrochureDownload from "./pages/BrochureDownload";
import FAQPage from "./pages/FAQPage";
import ExecutiveMembers from "./pages/Executive_members";
import banner from "./assets/banner.jpg"
function App() {
  const [showMiniNavbar, setShowMiniNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowMiniNavbar(window.scrollY < 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>

    <Router>
      <ScrollToTop />
      <QuickLinks />
      <Navbar showMiniNavbar={showMiniNavbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/executive-panel-members/" element={<ExecutiveMembers />} />
        <Route path= "/zerotrustai-orators"  element={<Orators />} />
        <Route path="/about-zerotrustai" element={<AboutOralMed />} />
        <Route path="/zerotrustai-event-schedule"element={<EventSchedule />} />
        <Route path="/venue" element={<Venue/>}/>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/zerotrustai-conference-tracks/"element={<RotatingLogos />} />
        <Route path="/abstract-submission" element={<AbstractSubmission />} />
        {/* <Route path="/brochure-download" element={<BrochureDownload />} /> */}
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/event_partners" element={<SponsorshipPackages />} />
        {/* <Route path="/techmatics-orators/:id" element={<OratorDetails />} /> */}
        {/* <Route path="/executive-panel-members/:id" element={<EpmTemplate />} /> */}
      </Routes>
      <Footer />
    </Router>
       <div
      className="home"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Your content */}
    </div>
    </div>
  );
}

export default App;
