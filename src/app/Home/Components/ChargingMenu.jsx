import Link from "next/link";
import { DataMenuCharging } from "../Data/DataMenuCharging";

export default function ChargingMenu() {

  return (
    <menu className="flex flex-col w-[20%]">
        {DataMenuCharging.map(DMC => {
            return(
                <Link className="pl-9" href={DMC.Link}>{DMC.title}</Link>
            )
        })}
    </menu>
  )
};
