// assets
import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

function generateRandomInt(max) {
  return Math.floor((max + 1) * Math.random());
}

const descriptionText = ["Fundamental", "Critial", "Core"];

export default function Header() {
  const word = descriptionText[generateRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}
