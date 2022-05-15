import React from "react";
import CarouselImageSlider from "../components/CarouselImageSlider";
import NewProductsSection from "../components/NewProductsSection";
import MostVisitedCathegories from "../components/MostVisitedCathegories";
import PcprodzInformationLabel from "../components/PcprodzInformationLabel";
import NewNewProductSection from "../components/NewNewProductSection";

export default function HomePage() {
  return (
    <div>
      <CarouselImageSlider />
      <div style={{ margin: "auto", maxWidth: "1920px" }}>
        <NewNewProductSection />
        <MostVisitedCathegories />
        <PcprodzInformationLabel />
      </div>
    </div>
  );
}
