import "./Examples.css";
import { useState } from "react";
import ExampleTab from "./ExampleTab";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";
import { CORE_CONCEPTS, EXAMPLES } from "../../data.js";

function Examples() {
  let [selectedExample, setExample] = useState();
  let exampleContent = <p>Please select an example</p>;

  if (selectedExample) {
    exampleContent = (
      <div id="example-content">
        <h3>{EXAMPLES[selectedExample].title}</h3>
        <p>{EXAMPLES[selectedExample].description}</p>
        <pre>
          <code>{EXAMPLES[selectedExample].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setExample(selectedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            {CORE_CONCEPTS.map((concept, i) => (
              <ExampleTab
                key={concept.title}
                isSelected={
                  selectedExample === concept.title.toLocaleLowerCase()
                }
                onClick={() => handleSelect(concept.title.toLocaleLowerCase())}
              >
                {concept.title}
              </ExampleTab>
            ))}
          </>
        }
      >
        {exampleContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
