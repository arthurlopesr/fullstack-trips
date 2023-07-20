import Button from "@/components/button/Button";
import Image from "next/image";

interface TripLocationProps {
  location: string;
  locationDescription: string | null;
}

export function TripLocation({ location, locationDescription }: TripLocationProps) {
  return (
    <div className="p-5">

      <h2 className="font-semibold text-primaryDarker mb-5">
        Localização
      </h2>

      <div className="relative h-[280px] w-full">
        <Image
          src="/map-mobile.png"
          alt={location}
          fill
          style={{
            objectFit: "cover"
          }}
          className="rounded-lg shadow-md"
        />
      </div>

      <h3 className="text-primaryDarker text-sm font-semibold mt-2">
        {location}
      </h3>

      <p className="text-xs text-primaryDarker mt-1 leading-5">
        {locationDescription}
      </p>

      <Button variant="outlined" className="w-full mt-5">
        Ver no Google Maps
      </Button>
    </div>
  )
}
