
export async function RecommendTrips() {

  const data = await fetch("http://localhost:3000/route").then((res) => res.json());

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center">

        <div className="w-full h-[1px] bg-grayLighter" />
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Destinos recomendados
        </h2>
        <div className="w-full h-[1px] bg-grayLighter" />

      </div>

      {data.map((trip) => (
        <img key={trip.id} src={trip.coverImage} alt="imgagens" />
      ))}


    </div>
  )
}
