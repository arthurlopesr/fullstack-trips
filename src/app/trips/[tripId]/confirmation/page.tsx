'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import { ptBR } from "date-fns/locale";
import { Trip } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import Button from "@/components/button/Button";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Confirmation({ params }: { params: { tripId: string } }) {
  const [trip, setTrip] = useState<Trip | null>();
  const [totalPrice, setTotalPrice] = useState<number>(0)
  const router = useRouter();
  const { status } = useSession();

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchTrip = async () => {
      const response = await fetch(`http://localhost:3000/api/trips/check`, {
        method: 'POST',
        body: JSON.stringify({
          tripId: params.tripId,
          startDate: searchParams.get("startDate"),
          endDate: searchParams.get("endDate"),
        })
      });

      const res = await response.json();

      if (res?.error) {
        router.push("/");
      }

      setTrip(res.trip)
      setTotalPrice(res.totalPrice);
    };

    if (status === 'unauthenticated') {
      router.push("/");
    }

    fetchTrip();
  }, [status, searchParams, params.tripId, router])

  if (!trip) return null;

  const startDate = new Date(searchParams.get("startDate") as string);
  const endDate = new Date(searchParams.get("endDate") as string);
  const guests = searchParams.get("guests")

  return (
    <div className="container mx-auto p-5">
      <h1 className="font-semibold text-xl text-primaryDarker">Sua viagem</h1>
      {/* CARD DA VIAGEM */}
      <div className="flex flex-col p-5 mt-5 border-grayLighter border-solid border shadow-lg rounded-lg">
        <div className="flex items-center gap-3 pb-5 border-b border-grayLighter border-solid">

          <div className="relative h-[106px] w-[124px]">
            <Image className="rounded-lg" src={trip.coverImage} fill style={{ objectFit: "cover" }} alt={trip.name} />
          </div>

          <div className="flex flex-col">
            <h2 className="text-xl text-primaryDarker font-semibold">{trip.name} </h2>
            <div className="flex items-center gap-1">
              <ReactCountryFlag countryCode={trip.countryCode} svg />
              <p className="text-xs text-grayPrimary underline">{trip.location}</p>
            </div>
          </div>

        </div>

        { /* INFORMAÇÕES SOBRE O PREÇO*/}
        <h3 className="font-semibold text-lg text-primaryDarker mt-3">Informações sobre o preço</h3>
        <div className="flex justify-between mt-1">
          <p className="text-primaryDarker">Total:</p>
          <p className="font-medium">R${totalPrice}</p>
        </div>
      </div>

      <div className="flex flex-col mt-5 text-primaryDarker">
        <h3 className="font-semibold">Data</h3>
        <div className="flex items-center gap-1 mt-1">
          <p>{format(startDate, "dd 'de' MMMM", { locale: ptBR })}</p>
          {" - "}
          <p>{format(endDate, "dd 'de' MMMM", { locale: ptBR })}</p>
        </div>

        <h3 className="font-semibold mt-5">Hóspedes</h3>
        <p>{guests} hóspedes</p>

        <Button className="mt-5" >
          Finalizar Compra
        </Button>
      </div>
    </div>
  )
}
