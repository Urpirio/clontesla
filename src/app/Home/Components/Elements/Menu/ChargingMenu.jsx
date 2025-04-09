import Link from "next/link";
import { DataMenuCharging } from "@/app/Home/Data/DataMenuCharging";

export default function ChargingMenu() {

  return (
    <menu className="flex gap-2 flex-col w-[20%]">
        {DataMenuCharging.map(DMC => {
            return(
                <Link key={DMC.id} className="font-semibold text-[14px] pl-9 hover:underline" href={DMC.Link}>{DMC.title}</Link>
            )
        })}
    </menu>
  )
};
