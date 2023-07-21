"use client";
import React from "react";
import Button from "@/components/button/Button";
import DatePicker from "@/components/datePicker/DatePicker";
import Input from "@/components/input/Input";
import { Trip } from "@prisma/client";
import { TripDescription } from "../tripDescription/TripDescription";
import { Controller, useForm } from "react-hook-form";


interface TripReservationProps {
  trip: Trip;
}

interface TripReservartionForm {
  guests: number;
  startDate: Date | null;
  endDate: Date | null;
}

export function TripReservation({ trip }: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<TripReservartionForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
            placeholderText="Data Final"
            onChange={field.onChange}
            selected={field.value}
            error={!!errors?.endDate}
            errorMessage={errors?.endDate?.message}
          />
          )}
        />

      </div>

      <Input
        className="mt-4"
        placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        {...register('guests', {
          required: {
            value: true,
            message: "Número de hóspedes obrigatório."
          }
        })}
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-3">
        <p className="font-medium text-sm text-primaryDarker">Total: </p>
        <p className="font-medium text-sm text-primaryDarker">R$ 2.500 </p>
      </div>

      <div className="pb-10 border-b border-grayLighter w-full">

        <Button className="mt-3 w-full" onClick={() => handleSubmit(onSubmit)()}>
          Reservar agora
        </Button>

      </div>

      <TripDescription description={trip.description} />

    </div>
  )
}
