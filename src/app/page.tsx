'use client';

import { QuickSearch } from "./components/quickSearch/QuickSearch";
import { RecommendTrips } from "./components/recommendTrips/RecommendTrips";
import { TripSearch } from "./components/tripSearch/TripSearch"

export default function Home() {

  return (
    <div>
      <TripSearch />
      <QuickSearch />
      <RecommendTrips />
    </div>
  )
}
