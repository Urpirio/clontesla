import { Charging } from "./Charging";
import ChargingMenu from "./ChargingMenu";
import { Energy } from "./Energy";
import EnergyMenu from "./EnergyMenu";
import { Vehicles } from "./Vehicles";
import VehiclesMenu from "./VehiclesMenu";

export function ElementsMenuVehicles() {

  return (
    <section className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]">
        <div className="flex items-center justify-center py-15 w-[100%] bg-white ">
            <Vehicles/>
            <VehiclesMenu/>
        </div>
    </section>
  )
};

export function ElementsMenuEnergy() {

    return (
      <section className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]">
          <div className="flex items-center justify-center py-15 w-[100%] bg-white ">
              <Energy/>
              <EnergyMenu/>
          </div>
      </section>
    )
  };


export function ElementsMenuCharging() {

    return (
      <section className="hidden justify-center fixed backdrop-blur-2xl z-30 items-start shadow-2xl h-screen w-[100%]">
          <div className="flex items-center justify-center py-15 w-[100%] bg-white ">
            <Charging/> 
            <ChargingMenu/>
          </div>
      </section>
    )
  };
