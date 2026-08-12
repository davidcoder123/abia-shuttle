import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";
import ReadyToTravel from "../../../components/ReadyToTravel";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <Steps />
      <SmarterTransportation />
      <LandingPageSectionII />
      <ImpactSection />
      <ReadyToTravel />
    </section>
  );
}

export default LandingPage;
