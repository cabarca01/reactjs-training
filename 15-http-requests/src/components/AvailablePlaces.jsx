import { useEffect, useState } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [placesList, setPlacesList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function getPlaces () {
      setIsFetching (true);
      const response = await fetch("http://localhost:3000/places");
      const respBody = await response.json();
      setPlacesList(respBody.places);
      setIsFetching (false);
    }

    getPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={placesList}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      isLoading={isFetching}
      loadingText="Fetching list of places..."
    />
  );
}
