import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>The Products Page</h1>{" "}
      <p>
        Go <Link to="/">Back</Link>
      </p>
    </>
  );
}
