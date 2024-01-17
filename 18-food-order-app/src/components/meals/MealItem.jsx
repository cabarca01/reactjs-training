import "./MealItem.css";

import { formatter } from "../../util/utils";

export default function MealItem({ name, description, price, image }) {
  return (
    <article className="meal-item">
      <img src={image} alt={description} />
      <h3>{name}</h3>
      <p className="meal-item-price">{formatter.format(price)}</p>
      <p className="meal-item-description">{description}</p>
      <p className="meal-item-actions">
        <button>Add to Cart</button>
      </p>
    </article>
  );
}
