import { Link } from "react-router-dom";

const productList = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>{" "}
      <div>
        <ul>
          {productList.map((prod) => (
            <li key={prod.id}>
              <Link to={`/products/${prod.id}`}>{prod.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
