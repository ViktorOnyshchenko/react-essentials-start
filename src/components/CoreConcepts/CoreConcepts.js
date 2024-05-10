import "./CoreConcepts.css";
import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../../data.js";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concept, i) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
