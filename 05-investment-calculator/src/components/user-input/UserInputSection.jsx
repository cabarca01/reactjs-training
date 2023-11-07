import "./UserInputSection.css";

import UserInputItem from "./UserInputItem";

const inputItems = [
  { label: "INITIAL INVESTMENT", max: undefined, min: 0, step: undefined, value: 0 },
  { label: "ANUAL INVESTMENT", max: undefined, min: 0, step: undefined, value: 0 },
  { label: "EXPECTED RETURN", max: 100, min: 0, step: 0.1, value: 0 },
  { label: "DURATION", max: 48, min: 0, step: 1, value: 0 },
];

export default function UserInputSection() {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInputItem
          key={inputItems[0].label}
          itemLabel={inputItems[0].label}
          min={inputItems[0].min}
          max={inputItems[0].max}
          step={inputItems[0].step}
          value={inputItems[0].value}
        />
        <UserInputItem
          key={inputItems[1].label}
          itemLabel={inputItems[1].label}
          min={inputItems[1].min}
          max={inputItems[1].max}
          step={inputItems[1].step}
          value={inputItems[1].value}
        />
      </div>
      <div className="input-group">
        <UserInputItem
          key={inputItems[2].label}
          itemLabel={inputItems[2].label}
          min={inputItems[2].min}
          max={inputItems[2].max}
          step={inputItems[2].step}
          value={inputItems[2].value}
        />
        <UserInputItem
          key={inputItems[3].label}
          itemLabel={inputItems[3].label}
          min={inputItems[3].min}
          max={inputItems[3].max}
          step={inputItems[3].step}
          value={inputItems[3].value}
        />
      </div>
    </section>
  );
}
