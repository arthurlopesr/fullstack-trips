import { Trip } from "@prisma/client";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";


interface TripItemProps {
  trip: Trip;
}

export function TripItem({ trip }: TripItemProps) {

  return (
    <div className="flex flex-col">
      <div className="relative h-[280px] w-[280px]">
        <Image
          src={trip.coverImage}
          className="rounded-lg shadow-md"
          style={{
            objectFit: "cover",
          }}
          alt={trip.name}
          fill
        />
      </div>

      <h3 className="text-primaryDarker font-medium text-sm mt-2">
        {trip.name}
      </h3>

      <div className="flex items-center gap-1 my-1">
        <ReactCountryFlag countryCode={trip.countryCode} svg />
        <p className="text-xs font-normal text-grayPrimary">
          {trip.location}
        </p>
      </div>

      <p className="text-xs font-normal text-grayPrimary">
        <span className="text-primary font-medium">
          R$ {trip.pricePerDay.toString()}
        </span> por dia
      </p>

    </div>
  );
};
