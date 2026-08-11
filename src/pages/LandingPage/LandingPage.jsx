import React from "react";
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <Steps />
      <SmarterTransportation />
    </section>
  );
}

export default LandingPage;
