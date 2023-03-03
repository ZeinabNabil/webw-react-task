import React from "react";
import AccelerationProcess from "./Sections/AccelerationProcess";
import BestBusinessSection from "./Sections/BestBusinessSection";
import BestPlatformSectionFour from "./Sections/BestPlatformSectionFour";
import BestPlatformSectionTwo from "./Sections/BestPlatformSectionTwo";
import LastSection from "./Sections/LastSection";
import PlatformOverview from "./Sections/PlatformOverview";
import StvdyFooter from "./Sections/StvdyFooter";
import StvdyHeader from "./Sections/StvdyHeader";

const Landing = () => {
  return (
    <div className="landing">
      <div>
        <StvdyHeader />
      </div>
      <div className="section">
        <BestBusinessSection />
      </div>
      <div className="section">
        <BestPlatformSectionTwo />
      </div>
      <div className="section">
        <PlatformOverview />
      </div>
      <div className="section">
        <BestPlatformSectionFour />
      </div>
      <div className="section">
        <AccelerationProcess />
      </div>
      <div className="section">
        <LastSection />
      </div>
      <div>
        <StvdyFooter />
      </div>
    </div>
  );
};

export default Landing;
