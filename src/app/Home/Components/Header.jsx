import { LogoTesla } from "../../../../public/Header/Img";
import { BtnGlobal, BtnPerfil, BtnSopport } from "../Btns/Btn_Header";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed w-[100%] p-3 z-50">
        <div className="flex flex-grow basis-0 justify-star text-white  h-3  ">
            <LogoTesla/>
        </div>
        <nav className="flex justify-center items-center text-[16px] font-semibold">
            <ul className="flex justify-center items-center text-white gap-5">
                <li>Vehicles</li>
                <li>Energy</li>
                <li>Charging</li>
                <li>Discover</li>
                <li>Shop</li>
            </ul>
        </nav>
        <div className="flex text-white justify-end gap-2 flex-grow basis-0">
            <BtnSopport/>
            <BtnGlobal/>
            <BtnPerfil/>
        </div>
    </header>
  )
}
