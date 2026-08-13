import React from "react";
<<<<<<< HEAD
import LandingPageFirstSection from "../../../components/landingPageFirstSection";
import SmarterTransportation from "../../../components/smarterTransportation";
import Steps from "../../../components/Steps";
import MinorFeatures from "../../../components/MinorFeatures";
=======
import LandingPageFirstSection from "../../../components/LandingPage/landingPageFirstSection";
import SmarterTransportation from "../../../components/LandingPage/smarterTransportation";
import Steps from "../../../components/LandingPage/Steps";
import LandingPageSectionII from "../../../components/LandingPage/LandingPageSectionII";
import ImpactSection from "../../../components/LandingPage/ImpactSection";
import ReadyToTravel from "../../../components/ReadyToTravel";
import FeatureBar from "../../../components/LandingPage/FeatureBar";
>>>>>>> dada42f068235c73bfdc4b5598e43272cb27e619

function LandingPage() {
  return (
    <section>
      <LandingPageFirstSection />
<<<<<<< HEAD
      <MinorFeatures />
      <Steps />
      <SmarterTransportation />
=======
      <FeatureBar />
      <Steps />
      <SmarterTransportation />
      <LandingPageSectionII />
      <ImpactSection />
      <ReadyToTravel />
>>>>>>> dada42f068235c73bfdc4b5598e43272cb27e619
    </section>
  );
}

export default LandingPage;
