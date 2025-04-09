import Link from "next/link";
import { DatosSection } from "../../Data/DatosSections";

export default function GlobalSections() {


    const List = DatosSection.map( DS =>{
    return(
        <section key={DS.id} className="flex justify-center items-center relative h-[100vh] w-[100%]">
        <article className="flex flex-col items-center justify-between h-[100%] w-[100%] z-20">
            <div className="flex flex-col gap-2 text-center mt-20 text-white">
                {DS.Modelo}
                <Link href={DS.LinkAboutModel} className="text-xl">{DS.AboutModel}</Link>
            </div>
            <div className="flex gap-5 mb-10">
                {DS.Btn1}
                {DS.Btn2}
            </div>
        </article>
        {DS.ImgModel}
    </section>
    )
    } )

  return (List)
};
