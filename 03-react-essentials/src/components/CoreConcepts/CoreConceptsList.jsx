import "./CoreConceptsList.css";

import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../misc/data";

export default function CoreConceptsList() {
  return (
    <section id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((element) => (
          <CoreConcepts
            key={element.title}
            title={element.title}
            description={element.description}
            imageSrc={element.image}
            altText={element.title}
          />
        ))}
      </ul>
    </section>
  );
}
