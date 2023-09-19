import ConceptCard from "./ConceptCard";

import "./ConceptList.css";

function ConceptList(props) {
  return (
    <ul id="concepts">
      {props.concepts.map((concept) => (
        <ConceptCard
          title={concept.title}
          description={concept.description}
          image={concept.image}
        />
      ))}
    </ul>
  );
}

export default ConceptList;
