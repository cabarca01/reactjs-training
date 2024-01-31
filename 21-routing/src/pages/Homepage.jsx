import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <h1>My Homepage</h1>
      <p>
        Go to the <Link to="/products">Products Page</Link>
      </p>
    </>
  );
}
