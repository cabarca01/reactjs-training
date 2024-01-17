import "./MealList.css";

import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
import { getMealList } from "../../util/http.js";

export default function MealList() {
  const [availableMeals, setAvailableMeals] = useState([]);
  const [isFetchingMeals, setIsFetchingMeals] = useState(false);
  const [errorFetchingMeals, setErrorFetchingMeals] = useState();

  useEffect(() => {
    async function getMeals() {
      setIsFetchingMeals(true);
      try {
        const meals = await getMealList();
        setAvailableMeals(meals);
      } catch (error) {
        setErrorFetchingMeals(error);
      }
      setIsFetchingMeals(false);
    }
    getMeals();
  }, []);

  return (
    <section>
      <ul id="meals">
        {availableMeals.map((data) => (
          <li key={data.id}>
            <MealItem
              id={data.id}
              name={data.name}
              description={data.description}
              price={parseFloat(data.price)}
              image={data.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
