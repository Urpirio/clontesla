'use client';
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";

export const Charging = () => {
    const [Data, setData] = useState([]);
    const [HaveData,setHaveData] = useState(false);

    useEffect(()=>{
        fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb')
        .then( res => res.json())
        .then((Data)=>{
            setData(Data)
            setHaveData(true)
        }).catch((err)=>{
            console.log(err)
        })
    });

    if(HaveData === false){
        return(
            <span>Cargando...</span>
        )
    }


  return (
    <div className="flex justify-end flex-wrap border-r-2 py-5 border-gray-300 w-[50%]">
        {Data.results[0].Charging.map( Cg => {
            return(
                <article key={Cg.id} className="p-2">
                    <div className="flex flex-col items-center">
                        <img className=" w-50 object-contain" src={Cg.Img} alt={Cg.Modelo} />
                        <h2 className="text-md font-bold">{Cg.Modelo}</h2>
                    </div>
                    <div className="flex justify-center gap-2 items-center 
                    [&div>Link]:cursor-pointer
                    ">
                        <Link className="underline text-gray-500 " href={Cg.LinkLearn}>Learn</Link>
                        <Link className="underline text-gray-500 " href={Cg.LinkOrder}>Order</Link>
                    </div>
                </article>
            )
        })}
      </div>
  )
}
