import "./ExamplesList.css";

import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "../UI/Section";
import Tabs from "../UI/Tabs";

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
    content = <TabContent key={exampleContent} topic={exampleContent} />;
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        menuElements={
          <>
            {TAB_LIST.map((element) => (
              <TabButton
                key={element.name}
                isSelected={element.name === exampleContent}
                onClick={element.action}
              >
                {element.name}
              </TabButton>
            ))}
          </>
        }
      >
        {content}
      </Tabs>
    </Section>
  );
}
