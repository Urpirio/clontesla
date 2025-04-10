'use client'
import { Charging } from "../CardsForElements/Charging";
import ChargingMenu from "../Menu/ChargingMenu";
import { Energy } from "../CardsForElements/Energy";
import EnergyMenu from "../Menu/EnergyMenu";
import { Shop } from "../CardsForElements/Shop";
import { Vehicles } from "../CardsForElements/Vehicles";
import VehiclesMenu from "../Menu/VehiclesMenu";
import { OffDeployMenu } from "@/app/Home/func/OffDeployMenu";

export function ElementsMenuVehicles() {



  return (
    <section className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]" id="Option1">
        <div onMouseLeave={OffDeployMenu} className="flex items-center justify-center py-15 w-[100%] bg-white ">
            <Vehicles/>
            <VehiclesMenu/>
        </div>
    </section>
  )
};

export function ElementsMenuEnergy() {

    return (
      <section className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]" id="Option2">
          <div  onMouseLeave={OffDeployMenu} className="flex items-center justify-center py-15 w-[100%] bg-white ">
              <Energy/>
              <EnergyMenu/>
          </div>
      </section>
    )
  };


export function ElementsMenuCharging() {

    return (
      <section  className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]" id="Option3">
          <div onMouseLeave={OffDeployMenu} className="flex items-center justify-center py-15 w-[100%] bg-white ">
            <Charging/> 
            <ChargingMenu/>
          </div>
      </section>
    )
  };

  export function ElementsMenuShop() {

    return (
      <section  className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]" id="Option4">
          <div onMouseLeave={OffDeployMenu} className="flex items-center justify-center py-15 w-[100%] bg-white ">
            <Shop/>
          </div>
      </section>
    )
  };
