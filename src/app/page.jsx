'use client';
import Header from "./Home/Components/Sections/Header";
import GlobalSections from "./Home/Components/Sections/GlobalSections";
import SectionModelY from "./Home/Components/Sections/SectionModelY";
import {ElementsMenuCharging, ElementsMenuEnergy, ElementsMenuShop, ElementsMenuVehicles }from "./Home/Components/Elements/BodyMenu/ElementsMenu";
import { Scrolling } from "./Home/func/Scrolling";
// import { useEffect } from "react";

export default function Home() {
  // useEffect(()=>{
  //   Scrolling();
  // });
  return (
    <body  className="relative">
      <Header/>
      <ElementsMenuVehicles/>
      <ElementsMenuEnergy/>
      <ElementsMenuCharging/>
      <ElementsMenuShop/>
      <SectionModelY/>
      <GlobalSections/>
    </body>
  )
}
