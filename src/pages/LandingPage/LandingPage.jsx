import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";
import ReadyToTravel from "../../../components/ReadyToTravel";
import FeatureBar from "../../../components/LandingPage/FeatureBar";
import ScrollToTop from "../../../components/to-top/ScrollToTop";

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
      <ScrollToTop />
    </section>
  );
}

export default LandingPage;
