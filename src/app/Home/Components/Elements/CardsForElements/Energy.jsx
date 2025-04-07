import Link from "next/link";

export async function Energy() {
    const res = await fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb');
    const Data = await res.json();
    

  return (
    <div className="flex justify-start items-center flex-wrap border-r-2 border-gray-300 w-[60%]">
        {Data.results[0].Energy.map( E => {
            return(
                <article className="p-2">
                    <div className="flex flex-col items-center">
                        <img className=" w-50 object-contain" src={E.Img} alt={E.Modelo} />
                        <h2 className="text-md font-bold">{E.Modelo}</h2>
                    </div>
                    <div className="flex justify-center gap-2 items-center 
                    [&div>Link]:cursor-pointer
                    ">
                        <Link className="underline text-gray-500 " href={E.LinkLearn}>Learn</Link>
                        <Link className="underline text-gray-500 " href={E.LinkOrder}>Order</Link>
                    </div>
                </article>
            )
        })
        }
    </div>
  )
}
