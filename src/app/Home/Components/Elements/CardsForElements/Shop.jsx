
export async function Shop() {
    const res = await fetch('https://randomapi.com/api/afa7c82c45b09c35c94b81a2c02561cb');
    const Data = await res.json();

    return (
      <div className="flex justify-center items-center flex-wrap w-[60%]">
        {Data.results[0].Shop.map( DT => {
            return(
                <article className="p-2">
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
