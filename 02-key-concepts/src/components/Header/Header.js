import "./Header.css";

function Header({ image, imageAlt, title, description }) {
  return (
    <header>
      <img src={image} alt={imageAlt} />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

export default Header;
