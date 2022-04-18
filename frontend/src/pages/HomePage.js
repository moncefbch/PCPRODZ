import React from "react";
import CarouselImageSlider from "../components/CarouselImageSlider";
import NewProductsSection from "../components/NewProductsSection";
import MostVisitedCathegories from "../components/MostVisitedCathegories";
import PcprodzInformationLabel from "../components/PcprodzInformationLabel";

export default function HomePage() {
  return (
    <div>
      <CarouselImageSlider />

      <div className="contentDiv">
        <NewProductsSection />
        <MostVisitedCathegories />
        <PcprodzInformationLabel />
      </div>
    </div>
  );
}
