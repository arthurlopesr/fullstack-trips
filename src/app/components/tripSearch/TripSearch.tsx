'use client'

import Button from "@/components/button/Button";
import CurrencyInput from "@/components/currencyInput/CurrencyInput";
import DatePicker from "@/components/datePicker/DatePicker";
import Input from "@/components/input/Input";


export function TripSearch() {
  return (
    <div className="container mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat">
      <h1 className="font-semibold text-2xl text-primaryDarker text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />

        <div className="flex gap-4">
          <DatePicker
            placeholderText="Data de ida"
            onChange={() => {}}
            className="w-full"
            />
          <CurrencyInput placeholder="Orçamento?"/>
        </div>

        <Button>Buscar</Button>
      </div>
    </div>
  )
}
