import { useEffect, useState } from "react";
import { sortPlacesByDistance } from '../loc.js'
import { getAvailablePlaces } from "../http.js";

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
        const placeList = await getAvailablePlaces();
        navigator.geolocation.getCurrentPosition( (position) => {
          const {longitude, latitude} = position.coords;
          const sortedPlaces = sortPlacesByDistance(placeList, latitude, longitude);
          setPlacesList(sortedPlaces);
          setIsFetching(false);
        });
        
        
      } catch (error) {
        setIsFetching(false);
        setError({
          message:
            error.message || "Something failed while fetching places list!",
        });
      }
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
