import { useEffect, useState } from "react";
import { sortPlacesByDistance } from '../loc.js'

import Places from "./Places.jsx";
import ErrorMessage from "./ErrorMessage.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [placesList, setPlacesList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function getPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const respBody = await response.json();

        navigator.geolocation.getCurrentPosition( (position) => {
          const {longitude, latitude} = position.coords;
          const sortedPlaces = sortPlacesByDistance(respBody.places, latitude, longitude);
          setPlacesList(sortedPlaces);
        });
        
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
      } catch (error) {
        setError({
          message:
            error.message || "Something failed while fetching places list!",
        });
      }

      setIsFetching(false);
    }

    getPlaces();
  }, []);

  if (error) {
    return <ErrorMessage title="Error fetching data" message={error.message} />;
  }

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
