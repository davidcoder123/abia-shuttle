import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPageSectionII";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <Steps />
      <SmarterTransportation />
      <LandingPageSectionII />
    </section>
  );
}

export default LandingPage;
