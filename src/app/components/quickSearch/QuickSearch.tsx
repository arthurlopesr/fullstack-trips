import Image from "next/image";

interface QuickSearchProps {

}
export function QuickSearch() {
  return (
    <div className="container mx-auto p-5">

      <div className="flex items-center">

        <div className="w-full h-[1px] bg-grayLighter" />
        <h2 className="px-5 font-medium text-grayPrimary whitespace-nowrap">
          Tente pesquisar por
        </h2>
        <div className="w-full h-[1px] bg-grayLighter" />

      </div>

      <div className="flex w-full justify-between mt-5">

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/hotel-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">
            Hotel
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/farm-icon.png" alt="Fazenda" />
          <p className="text-sm text-grayPrimary">
            Fazenda
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/cottage-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">
            Chalé
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image width={35} height={35} src="/inn-icon.png" alt="Hotel" />
          <p className="text-sm text-grayPrimary">
            Pousada
          </p>
        </div>

      </div>
    </div>
  )
}
