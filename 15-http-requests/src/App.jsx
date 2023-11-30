import { useRef, useState, useCallback, useEffect } from "react";
import { getSelectedPlaces, updateSelectedPlaces } from "./http.js";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorFetchingPlaces, setErrorFetchingPlaces] = useState();
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [isFetchingPlaces, setIsFetchingPlaces] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function getPlaces() {
      setIsFetchingPlaces(true);
      try {
        const placeList = await getSelectedPlaces();
        setUserPlaces(placeList.places);
      } catch (error) {
        setErrorFetchingPlaces({
          message: error.message || "Something went wrong getting user places!",
        });
      }
      setIsFetchingPlaces(false);
    }
    getPlaces();
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateSelectedPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message:
          error.message || "Something went wrong updating selected place list!",
      });
    }
  }

  function handleErrorModal() {
    setErrorUpdatingPlaces(null);
  }
  
  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try {
      await updateSelectedPlaces(
        userPlaces.filter((place) => place.id !== selectedPlace.current.id)
      );
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message:
          error.message ||
          "Something went wrong updating selected place list after deleting!",
      });
    }

    setModalIsOpen(false);
  }, [userPlaces]);

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <Modal open={errorUpdatingPlaces} onClose={handleErrorModal}>
        {errorUpdatingPlaces && (
          <ErrorMessage
            title="Error updating selected places"
            message={errorUpdatingPlaces.message}
            onConfirm={handleErrorModal}
          />
        )}
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
        {errorFetchingPlaces ? (
          <ErrorMessage
            title="Error fetching user places"
            message={errorFetchingPlaces.message}
          />
        ) : (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
            isLoading={isFetchingPlaces}
            loadingText="Retrieving user-selected places..."
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
