"use client";
import React from "react";
import Button from "@/components/button/Button";
import DatePicker from "@/components/datePicker/DatePicker";
import Input from "@/components/input/Input";
import { TripDescription } from "../tripDescription/TripDescription";
import { Controller, useForm, useWatch } from "react-hook-form";
import { differenceInDays } from "date-fns";
import { useRouter } from "next/navigation";


interface TripReservationProps {
  tripId: string;
  tripStartDate: Date;
  tripEndDate: Date;
  maxGuests: number;
  description: string;
  pricePerDay: number;
}

interface TripReservartionForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

export function TripReservation({ tripId, tripEndDate, tripStartDate, maxGuests, description, pricePerDay }: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservartionForm>();

  const router = useRouter();

  const onSubmit = async (data: TripReservartionForm) => {
    const response = await fetch('http://localhost:3000/api/trips/check', {
      method: 'POST',
      body: Buffer.from(JSON.stringify({
        startDate: data.startDate,
        endDate: data.endDate,
        tripId,
      })),
    });

    const res = await response.json();

    if (res?.error?.code === "TRIP_ALREADY_RESERVED") {
      setError("startDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });

      return setError("endDate", {
        type: "manual",
        message: "Esta data já está reservada.",
      });
    }

    if (res?.error?.code === "INVALID_START_DATE") {
      return setError("startDate", {
        type: "manual",
        message: "Data inválida",
      });
    }


    if (res?.error?.code === "INVALID_START_DATE") {
      return setError("endDate", {
        type: "manual",
        message: "Data inválida",
      });
    }

    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${data.guests}`
    );
  };

  const startDate = watch("startDate");
  const endDate = watch("endDate");

  return (

    <div className="flex flex-col px-5 pb-10">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Data inicial é obrigatória"
            }
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              className="w-full"
              placeholderText="Data Inicial"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              minDate={tripStartDate}
            />
          )}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Data final é obrigatória"
            }
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              className="w-full"
              dateFormat="dd/MM/yyyy"
              locale="ptBR"
              placeholderText="Data Final"
              onChange={field.onChange}
              selected={field.value}
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />

      </div>

      <Input
        className="mt-4"
        type="number"
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        {...register('guests', {
          required: {
            value: true,
            message: "Número de hóspedes obrigatório."
          },
          max: {
            value: maxGuests,
            message: `Número de hóspedes não pode ser maior que ${maxGuests}.`,
          },
        })}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">
          {startDate && endDate
            ? `R$ ${differenceInDays(endDate, startDate) * pricePerDay}`
            : 'R$ 0'
          }
        </p>

      </div>

      <div className="pb-10 border-b border-grayLighter w-full">

        <Button className="mt-3 w-full" onClick={() => handleSubmit(onSubmit)()}>
          Reservar agora
        </Button>

      </div>

      <TripDescription description={description} />

    </div>
  )
}
