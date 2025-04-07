import Link from "next/link";
import { DataMenuCars } from "@/app/Home/Data/DataMenuCars";



export default function VehiclesMenu() {
   return(
    <menu className="flex flex-col w-[20%]" >
       {DataMenuCars.map( DMC => {
        return(<Link className="pl-9" href={DMC.Link}>{DMC.title}</Link>)
       })} 
    </menu>
   )
}
