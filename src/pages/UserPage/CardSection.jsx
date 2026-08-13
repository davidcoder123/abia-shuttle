import React from "react";
import MyCardHeader from "../../../components/CardComp/CardHeader";
import CardBalancePanel from "../../../components/CardComp/CardBalance";
import CardTransactions from "../../../components/CardComp/CardTrans";
import TrustBadges from "../../../components/CardComp/TrustBadges";
import ReadyToTravel from "../../../components/ReadyToTravel";

function CardSection() {
  return (
    <div>
      <MyCardHeader />
      <CardBalancePanel />
      <CardTransactions />
      <TrustBadges />
      <ReadyToTravel />
    </div>
  );
}

export default CardSection;
