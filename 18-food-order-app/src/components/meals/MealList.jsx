import "./MealList.css";

import MealItem from "./MealItem.jsx";
import useHttp from "../../hooks/useHttp.js";


export default function MealList() {
  const {isFetching, response, error} = useHttp("http://localhost:3000/meals");

  return (
    <section>
      <ul id="meals">
        {isFetching && <h2>Fetching available meals...</h2>}
        {error && <h2>{error}</h2>}
        {!isFetching && response &&
          response.map((data) => (
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
