import "./ExamplesList.css";

import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

export default function ExamplesList() {
  let content = <p>Please select a Concept</p>;
  const [exampleContent, setExampleContent] = useState();

  function clickHandler(selectedTab) {
    setExampleContent(selectedTab);
  }

  const TAB_LIST = [
    { name: "components", action: () => clickHandler("components") },
    { name: "jsx", action: () => clickHandler("jsx") },
    { name: "props", action: () => clickHandler("props") },
    { name: "state", action: () => clickHandler("state") },
  ];

  if (exampleContent) {
    content = <TabContent topic={exampleContent} />;
  }
  
  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {TAB_LIST.map((element) => (
          <TabButton onClick={element.action}>{element.name}</TabButton>
        ))}
      </menu>
      {content}
    </section>
  );
}
