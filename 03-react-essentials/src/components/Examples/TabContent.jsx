import "./TabContent.css";
import { EXAMPLES } from "../../misc/data";

export default function TabContent({ topic }) {
  return (
    <div id="tab-content">
      <h3>{EXAMPLES[topic].title}</h3>
      <p>{EXAMPLES[topic].description}</p>
      <pre>
        <code>{EXAMPLES[topic].code}</code>
      </pre>
    </div>
  );
}
