import Header from "./Home/Components/Header";
import GlobalSections from "./Home/Components/GlobalSections";
import SectionModelY from "./Home/Components/SectionModelY";
import {ElementsMenuCharging, ElementsMenuEnergy, ElementsMenuVehicles }from "./Home/Components/ElementsMenu";

export default function Home() {
  return (
    <body>
      <Header/>
      <ElementsMenuVehicles/>
      <ElementsMenuEnergy/>
      <ElementsMenuCharging/>
      <SectionModelY/>
      <GlobalSections/>
    </body>
  )
}
