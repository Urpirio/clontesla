import { ImgModelY } from "../../../../public/SectionModelY/Img";
import { BtnModelY_LearMore, BtnModelY_OrderNow } from "../Btns/Btn_SectionModelY";
import Header from "./Header";

export default function SectionModelY() {
  return (
    <section className="flex justify-center h-[100vh]  snap-y snap-start items-start relative">
      <article className="flex flex-col gap-5 justify-center items-center mt-20 z-20">
        <div className="lg:text-6xl text-5xl text-white font-bold">
          <h2>Model Y</h2>
        </div>
        <div className="flex flex-col text-center text-xl font-semibold text-white">
          <span>Starting at $41,490</span>
          <span>After $7,500 Federal Tax Credit</span>
        </div>
        <div className="flex gap-5">
        <BtnModelY_OrderNow/>
        <BtnModelY_LearMore/>
        </div>
      </article>
      <ImgModelY/>
    </section>
  )
}
