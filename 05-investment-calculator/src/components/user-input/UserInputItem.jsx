export default function UserInputItem({ itemLabel, paramId, onChange,  ...inputTypeProps }) {
    function changeParameterHandler(event) {
        const value = event.target.value;
        onChange(paramId, value);
    }

  return (
    <p>
      <label>{itemLabel}</label>
      <input type="number" required {...inputTypeProps} onChange={changeParameterHandler} />
    </p>
  );
}
