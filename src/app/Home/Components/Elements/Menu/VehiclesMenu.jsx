import Link from "next/link";
import { DataMenuCars } from "@/app/Home/Data/DataMenuCars";



export default function VehiclesMenu() {
   return(
    <menu className="flex gap-2 flex-col w-[20%]" >
       {DataMenuCars.map( DMC => {
        return(<Link key={DMC.id} className="font-semibold text-[15px] pl-9 hover:underline" href={DMC.Link}>{DMC.title}</Link>)
       })} 
    </menu>
   )
}
