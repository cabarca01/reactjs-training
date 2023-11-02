import "./CoreConceptsList.css";

import Section from "../UI/Section";
import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../../misc/data";

export default function CoreConceptsList() {
  return (
    <Section id="core-concepts">
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
    </Section>
  );
}
