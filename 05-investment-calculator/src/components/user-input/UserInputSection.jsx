import "./UserInputSection.css";

import UserInputItem from "./UserInputItem";

const inputItems = [
  {
    id: "initialInvestment",
    label: "INITIAL INVESTMENT",
    max: undefined,
    min: 0,
    step: undefined,
  },
  {
    id: "annualInvestment",
    label: "ANUAL INVESTMENT",
    max: undefined,
    min: 0,
    step: undefined,
  },
  {
    id: "expectedReturn",
    label: "EXPECTED RETURN",
    max: 100,
    min: 0,
    step: 0.1,
  },
  { id: "duration", label: "DURATION", max: 48, min: 0, step: 1 },
];

export default function UserInputSection({ parameters, onChangeParams }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInputItem
          key={inputItems[0].id}
          paramId={inputItems[0].id}
          itemLabel={inputItems[0].label}
          min={inputItems[0].min}
          max={inputItems[0].max}
          step={inputItems[0].step}
          value={parameters[inputItems[0].id]}
          onChange={onChangeParams}
        />
        <UserInputItem
          key={inputItems[1].id}
          paramId={inputItems[1].id}
          itemLabel={inputItems[1].label}
          min={inputItems[1].min}
          max={inputItems[1].max}
          step={inputItems[1].step}
          value={parameters[inputItems[1].id]}
          onChange={onChangeParams}
        />
      </div>
      <div className="input-group">
        <UserInputItem
          key={inputItems[2].id}
          paramId={inputItems[2].id}
          itemLabel={inputItems[2].label}
          min={inputItems[2].min}
          max={inputItems[2].max}
          step={inputItems[2].step}
          value={parameters[inputItems[2].id]}
          onChange={onChangeParams}
        />
        <UserInputItem
          key={inputItems[3].id}
          paramId={inputItems[3].id}
          itemLabel={inputItems[3].label}
          min={inputItems[3].min}
          max={inputItems[3].max}
          step={inputItems[3].step}
          value={parameters[inputItems[3].id]}
          onChange={onChangeParams}
        />
      </div>
    </section>
  );
}
