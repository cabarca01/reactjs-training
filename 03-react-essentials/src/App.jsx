// assets
import reactImg from "./assets/react-core-concepts.png";

// dependencies
import { CORE_CONCEPTS } from "./data";

function generateRandomInt(max) {
  return Math.floor((max + 1) * Math.random());
}

const descriptionText = ["Fundamental", "Critial", "Core"];

function Header() {
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

function CoreConcepts({ imageSrc, altText, title, description }) {
  return (
    <li>
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((element) => (
              <CoreConcepts
                title={element.title}
                description={element.description}
                imageSrc={element.image}
                altText={element.title}
              />
            ))}
          </ul>
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
