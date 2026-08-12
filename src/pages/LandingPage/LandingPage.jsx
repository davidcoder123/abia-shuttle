import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <Steps />
      <SmarterTransportation />
      <LandingPageSectionII />
      <ImpactSection />
    </section>
  );
}

export default LandingPage;
