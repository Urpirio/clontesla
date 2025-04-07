import Header from "./Home/Components/Sections/Header";
import GlobalSections from "./Home/Components/Sections/GlobalSections";
import SectionModelY from "./Home/Components/Sections/SectionModelY";
import {ElementsMenuCharging, ElementsMenuEnergy, ElementsMenuShop, ElementsMenuVehicles }from "./Home/Components/Elements/BodyMenu/ElementsMenu";

export default function Home() {
  return (
    <body>
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
