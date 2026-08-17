import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";
import ReadyToTravel from "../../../components/ReadyToTravel";
import FeatureBar from "../../../components/LandingPage/FeatureBar";
import ScrollToTop from "../../../components/to-top/ScrollToTop";
import Call from "../../Components/Call";

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
      <Call />
      <ScrollToTop />
    </section>
  );
}

export default LandingPage;
