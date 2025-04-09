'use client';
import { useState } from "react";
import { useEffect } from "react";

export function Shop() {

    const [Data, setData] = useState([]);
    const [HaveData, setHaveData] = useState(false);

    useEffect(()=>{
        fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb')
        .then( res => res.json())
        .then((Data)=>{
            setData(Data);
            setHaveData(true);
        }).catch((err)=>{
            console.error(err)
        });
    });

    if(HaveData === false){
        return(
            <span>Cargando...</span>
        )
    }

    return (
      <div className="flex justify-center items-center flex-wrap w-[60%]">
        {Data.results[0].Shop.map( DT => {
            return(
                <article key={DT.id} className="p-2">
                    <div className="flex flex-col items-center">
                        <img className=" w-50 object-contain" src={DT.Img} alt={DT.Modelo} />
                        <h2 className="text-md font-bold">{DT.Modelo}</h2>
                    </div>
                </article>
            )
        })}
      </div>
    )
}
