"use client";

import Button from "@/components/button/Button";
import DatePicker from "@/components/datePicker/DatePicker";
import Input from "@/components/input/Input";
import { Trip } from "@prisma/client";
import { TripDescription } from "../tripDescription/TripDescription";


interface TripReservationProps {
  trip: Trip
}

export function TripReservation({ trip }: TripReservationProps) {
  return (

    <div className="flex flex-col px-5 pb-10">

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

      <div className="pb-10 border-b border-grayLighter w-full">
        <Button className="mt-3 w-full">
          Reservar agora
        </Button>
      </div>

      <TripDescription description={trip.description}/>
    </div>
  )
}
