import { prisma } from "@/lib/prisma"
import { TripHeader } from "./components/tripHeader/TripHeader";
import { TripReservation } from "./components/tripReservation/TripReservation";
import { TripHighlights } from "./components/tripHighligths/TripHighligths";
import { TripLocation } from "./components/tripLocation/TripLocation";

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
    <div className="container mx-auto lg:px-40">
      <TripHeader trip={trip} />
      <div className="flex flex-col lg:flex-row lg:mt-5">

        <div className="lg:order-2">
          <TripReservation
            tripId={trip.id}
            maxGuests={trip.maxGuests}
            tripStartDate={trip.startDate}
            tripEndDate={trip.endDate}
            description={trip.description}
            pricePerDay={trip.pricePerDay as any}
          />
        </div>

        <div className="lg:order-1">
          <TripHighlights highlights={trip.highlights} />
        </div>

      </div>
      <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
    </div>
  )
}
