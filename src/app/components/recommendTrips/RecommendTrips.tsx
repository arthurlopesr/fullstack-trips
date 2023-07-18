import { TripItem } from "@/components/tripItem/TripItem";
import { Trip } from "@prisma/client";

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

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>

    </div>
  )
}
