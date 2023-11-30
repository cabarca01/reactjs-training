import { useEffect, useState } from "react";

import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((respBody) => {
        setPlacesList(respBody.places);
      });
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
