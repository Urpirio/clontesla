'use client';
import { LogoTesla } from "../../../../../public/Header/Img";
import { BtnGlobal, BtnPerfil, BtnSopport } from "@/app/Home/Btns/Btn_Header";
import { DeployCharging, DeployDiscover, DeployEnergy, DeployShop, DeployVehicles } from "../../func/DeployMenu";
import { HoverHeader_MouseEnter, HoverHeader_MouseLeave } from "../../func/HoverHeader";

export default function Header() {
    
  return (
    <header onMouseEnter={HoverHeader_MouseEnter}
    onMouseLeave={HoverHeader_MouseLeave} className="flex items-center justify-between absolute w-[100%] p-3 z-50 transition-all  duration-300 hover:bg-white text-white hover:text-black " >
        <div className="flex flex-grow basis-0 justify-star   h-3">
            <LogoTesla/>
        </div>
        <nav className="lg:flex hidden justify-center items-center text-[16px] font-semibold ">
            <ul className="flex justify-center items-center
            [&ul>li]:hover:bg-gray-200
              [&ul>li]:py-1
              [&ul>li]:px-3
              [&ul>li]:rounded-[5px]
              [&ul>li]:transition-all
              [&ul>li]:duration-300
              [&ul>li]:cursor-pointer
            ">
                <li onMouseEnter={DeployVehicles} className="Option1">Vehicles</li>
                <li onMouseEnter={DeployEnergy} className="Option2">Energy</li>
                <li onMouseEnter={DeployCharging} className="Option3">Charging</li>
                {/* <li onMouseEnter={DeployDiscover} className="Option4">Discover</li> */}
                <li onMouseEnter={DeployShop} className="Option4">Shop</li>
            </ul>
        </nav>
        <div className="lg:flex hidden  justify-end gap-2 flex-grow basis-0 " >
            <BtnSopport/>
            <BtnGlobal/>
            <BtnPerfil/>
        </div>
    </header>
  )
}
