import Link from "next/link";

export const Vehicles = async () => {
    const res = await fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb');
    const Data = await res.json();

    return (
      <div className="flex justify-start items-center flex-wrap border-r-2 border-gray-300 w-[60%]">
        {Data.results[0].Cars.map( DT => {
            return(
                <article className="p-2">
                    <div className="flex flex-col items-center">
                        <img className=" w-50 object-contain" src={DT.Img} alt={DT.Modelo} />
                        <h2 className="text-md font-bold">{DT.Modelo}</h2>
                    </div>
                    <div className="flex justify-center gap-2 items-center 
                    [&div>Link]:cursor-pointer
                    ">
                        <Link className="underline text-gray-500 " href={DT.LinkLearn}>Learn</Link>
                        <Link className="underline text-gray-500 " href={DT.LinkOrder}>Order</Link>
                    </div>
                </article>
            )
        })}
      </div>
    )
};
