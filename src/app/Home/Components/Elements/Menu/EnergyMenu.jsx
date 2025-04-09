import Link from "next/link";
import { DataMenuEnergy } from "@/app/Home/Data/DataMenuEnergy";

export default function EnergyMenu() {
  return (
    <menu className="flex gap-2 flex-col w-[20%]" >
        {DataMenuEnergy.map(DME => {
            return(<Link key={DME.id} className="font-semibold text-[14px] pl-9 hover:underline" href={DME.Link}>{DME.title}</Link>)
        })}
    </menu>
  )
}
