'use client';

import { QuickSearch } from "./components/quickSearch/QuickSearch";
import { TripSearch } from "./components/tripSearch/TripSearch"

export default function Home() {

  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  )
}
