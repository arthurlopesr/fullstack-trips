"use client";

import Button from "@/components/button/Button";
import DatePicker from "@/components/datePicker/DatePicker";
import Input from "@/components/input/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip
}

export function TripReservation({ trip }: TripReservationProps) {
  return (
    <div>
      <div className="flex flex-col px-5">

        <div className="flex gap-4">
          <DatePicker
            className="w-full"
            placeholderText="Data Inicial"
            onChange={() => { }}
          />
          <DatePicker
            className="w-full"
            placeholderText="Data Final"
            onChange={() => { }}
          />
        </div>

        <Input className="mt-4" placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} />

        <div className="flex justify-between mt-3">
          <p className="font-medium text-sm text-primaryDarker">Total: </p>
          <p className="font-medium text-sm text-primaryDarker">R$ 2.500 </p>
        </div>

        <Button className="mt-3">
          Reservar agora
        </Button>
      </div>
    </div>
  )
}
