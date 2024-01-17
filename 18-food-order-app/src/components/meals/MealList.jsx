import "./MealList.css";

export default function MealList({ children }) {
  return (
    <section>
      <ul id="meals">{children}</ul>
    </section>
  );
}
