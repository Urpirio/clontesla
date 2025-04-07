import { LogoTesla } from "../../../../../public/Header/Img";
import { BtnGlobal, BtnPerfil, BtnSopport } from "@/app/Home/Btns/Btn_Header";

export default function Header() {
    
  return (
    <header className="flex items-center justify-between fixed w-[100%] p-3 z-50 transition-all  duration-300 hover:bg-white text-white hover:text-black ">
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
                <li>Vehicles</li>
                <li>Energy</li>
                <li>Charging</li>
                <li>Discover</li>
                <li>Shop</li>
            </ul>
        </nav>
        <div className="lg:flex hidden  justify-end gap-2 flex-grow basis-0">
            <BtnSopport/>
            <BtnGlobal/>
            <BtnPerfil/>
        </div>
    </header>
  )
}
