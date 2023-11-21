import { useRef, useState, useEffect } from "react";
import { sortPlacesByDistance } from "./loc.js";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";

function storeSelectedPlace(placeId) {
  const selectedPlaceIds =
    JSON.parse(localStorage.getItem("storedPlaceIds")) || [];

  if (selectedPlaceIds.indexOf(placeId) === -1) {
    const placeList = [placeId, ...selectedPlaceIds];
    localStorage.setItem("storedPlaceIds", JSON.stringify(placeList));
  }
}

function removeSelectedPlace(placeId) {
  const selectedPlaceIds =
    JSON.parse(localStorage.getItem("storedPlaceIds")) || [];

  const placeList = selectedPlaceIds.filter((id) => id !== placeId);
  localStorage.setItem("storedPlaceIds", JSON.stringify(placeList));
}

function getSelectedPlaceList() {
  const selectedPlaceIds =
    JSON.parse(localStorage.getItem("storedPlaceIds")) || [];

  return selectedPlaceIds.map((placeId) =>
    AVAILABLE_PLACES.find((place) => place.id === placeId)
  );
}

function App() {
  const selectedPlace = useRef();
  const selectedPlaceList = getSelectedPlaceList();

  const [pickedPlaces, setPickedPlaces] = useState(selectedPlaceList);
  const [sortedPlaces, setSortedPlaces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setSortedPlaces(
        sortPlacesByDistance(AVAILABLE_PLACES, latitude, longitude)
      );
    });
  }, []);

  function handleStartRemovePlace(id) {
    selectedPlace.current = id;
    setIsModalOpen(true);
  }

  function handleStopRemovePlace() {
    setIsModalOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
    storeSelectedPlace(id);
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    removeSelectedPlace(selectedPlace.current);
    setIsModalOpen(false);
  }

  return (
    <>
      <Modal openModal={isModalOpen}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={sortedPlaces}
          fallbackText="Sorting places according to your location..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
