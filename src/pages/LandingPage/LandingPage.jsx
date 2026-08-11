import React from "react";
import LandingPageFirstSection from "../../../components/landingPageFirstSection";
import SmarterTransportation from "../../../components/smarterTransportation";
import Steps from "../../../components/Steps";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <SmarterTransportation />
      <Steps/>
    </section>
  );
}

export default LandingPage;
