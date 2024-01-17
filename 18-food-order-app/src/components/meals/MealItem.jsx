import "./MealItem.css";

import { formatter } from "../../util/utils";

export default function MealItem({ id, name, description, price, image }) {
  const imgSrc = "http://localhost:3000/" + image;
  return (
    <article className="meal-item">
      <img src={imgSrc} alt={description} />
      <h3>{name}</h3>
      <p className="meal-item-price">{formatter.format(price)}</p>
      <p className="meal-item-description">{description}</p>
      <p className="meal-item-actions">
        <button>Add to Cart</button>
      </p>
    </article>
  );
}
