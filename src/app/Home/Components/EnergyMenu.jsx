import Link from "next/link";
import { DataMenuEnergy } from "../Data/DataMenuEnergy";

export default function EnergyMenu() {
  return (
    <menu className="flex flex-col w-[20%]" >
        {DataMenuEnergy.map(DME => {
            return(<Link className="pl-9" href={DME.Link}>{DME.title}</Link>)
        })}
    </menu>
  )
}
