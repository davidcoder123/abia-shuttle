import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";
import ReadyToTravel from "../../../components/ReadyToTravel";
import FeatureBar from "../../../components/LandingPage/FeatureBar";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <FeatureBar />
      <Steps />
      <SmarterTransportation />
      <LandingPageSectionII />
      <ImpactSection />
      <ReadyToTravel />
    </section>
  );
}

export default LandingPage;
