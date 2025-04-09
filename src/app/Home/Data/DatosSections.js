import { ImgCiber,ImgLogoCiber } from "../../../../public/SectionCiberTruck/Img";
import { ImgModel3 } from "../../../../public/SectionModel3/Img";
import { ImgModelX } from "../../../../public/SectionModelX/Img";
import { BtnModel3_LearMore, BtnModel3_OrderNow } from "../Btns/Btn_SectionModel3";
import { BtnModelCiber_LearMore, BtnModelCiber_OrderNow } from "../Btns/Btn_SectionCiberTruck";
import { BtnModelX_LearMore, BtnModelX_OrderNow } from "../Btns/Btn_SectionModelX";
import { ImgModelS } from "../../../../public/SectionModelS/Img";
import { ImgHouseWithPanel } from "../../../../public/SectionSolarPanel/Img";
import { ImgHousePanel } from "../../../../public/SectionSolarRoof/Img";
import { ImgPower } from "../../../../public/SectionPower/Img";
import { BtnModelS_LearMore, BtnModelS_OrderNow } from "../Btns/Btn_SectionModelS";
import { BtnSolarPanel_LearMore, BtnSolarPanel_OrderNow } from "../Btns/Btn_SectionSolarPanel";
import { BtnSolarRoof_OrderNow } from "../Btns/Btn_SolarRoof";
import { BtnPowerWall_LearMore, BtnPowerWall_OrderNow } from "../Btns/Btn_SectionPower";
import { ImgAccessories } from "../../../../public/SectionAccessories/Img";
import { BtnAccesories } from "../Btns/Btn_SectionAccessories";


export const DatosSection = [
    {
        id: 2,
        Modelo: <h2 className="text-6xl font-bold">Model 3</h2>,
        AboutModel: `$299/mo Leasing With $1,000 Down`,
        LinkAboutModel: ``,
        Btn1: <BtnModel3_OrderNow/> ,
        Btn2: <BtnModel3_LearMore/>,
        ImgModel: <ImgModel3/> ,

    },
    {
        id: 3,
        Modelo: <ImgLogoCiber/>,
        AboutModel: '',
        LinkAboutModel: ``,
        Btn1: <BtnModelCiber_OrderNow/>,
        Btn2: <BtnModelCiber_LearMore/>,
        ImgModel: <ImgCiber/>,

    },
    {
        id: 4,
        Modelo: <h2 className="text-6xl font-bold">Model X</h2>,
        AboutModel: 'Free Supercharging Included',
        LinkAboutModel: ``,
        Btn1: <BtnModelX_OrderNow/>,
        Btn2: <BtnModelX_LearMore/>,
        ImgModel: <ImgModelX/>,

    },
    {
        id: 5,
        Modelo: <h2 className="text-6xl font-bold">Model S</h2>,
        AboutModel: 'Free Supercharging Included',
        LinkAboutModel: ``,
        Btn1: <BtnModelS_OrderNow/>,
        Btn2: <BtnModelS_LearMore/>,
        ImgModel: <ImgModelS/>,

    },
    {
        id: 6,
        Modelo: <h2 className="text-6xl font-bold">Solar Panels</h2>,
        AboutModel: 'Schedule a Virtual Consultation',
        LinkAboutModel: ``,
        Btn1: <BtnSolarPanel_OrderNow/>,
        Btn2: <BtnSolarPanel_LearMore/>,
        ImgModel: <ImgHouseWithPanel/>,

    },
    {
        id: 7,
        Modelo: <h2 className="text-6xl font-bold">Solar Roof</h2>,
        AboutModel: 'Produce Clean Energy From Your Roof',
        LinkAboutModel: ``,
        Btn1: <BtnSolarRoof_OrderNow/>,
        Btn2: <BtnSolarPanel_LearMore/>,
        ImgModel: <ImgHousePanel/>,

    },
    {
        id: 8,
        Modelo: <h2 className="text-6xl font-bold">Powerwall</h2>,
        AboutModel: '',
        LinkAboutModel: ``,
        Btn1: <BtnPowerWall_OrderNow/>,
        Btn2: <BtnPowerWall_LearMore/>,
        ImgModel: <ImgPower/>,

    },
    {
        id: 9,
        Modelo: <h2 className="text-6xl font-bold">Accessories</h2>,
        AboutModel: '',
        LinkAboutModel: ``,
        Btn1: <BtnAccesories/>,
        Btn2: '',
        ImgModel: <ImgAccessories/>,

    },

];
