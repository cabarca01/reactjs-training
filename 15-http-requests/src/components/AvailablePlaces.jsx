import { useEffect, useState } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    async function getPlaces () {
      const response = await fetch("http://localhost:3000/places");
      const respBody = await response.json();
      setPlacesList(respBody.places);
    }

    getPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={placesList}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
