import { prisma } from "@/lib/prisma"
import { TripHeader } from "./components/tripHeader/TripHeader";
import { TripReservation } from "./components/tripReservation/TripReservation";
import { TripHighlights } from "./components/tripHighligths/TripHighligths";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });

  return trip;
}

export default async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripDetails(params.tripId);

  if (!trip) {
    return null;
  }

  return (
    <div className="container mx-auto">
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripHighlights highlights={trip.highlights}/>
    </div>
  )
}
