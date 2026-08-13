import React from "react";
import LandingPageFirstSection from "../../../components/landingPageFirstSection";
import SmarterTransportation from "../../../components/smarterTransportation";
import Steps from "../../../components/Steps";
import MinorFeatures from "../../../components/MinorFeatures";

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
      <MinorFeatures />
      <Steps />
      <SmarterTransportation />
    </section>
  );
}

export default LandingPage;
