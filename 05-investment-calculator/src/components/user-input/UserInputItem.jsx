export default function UserInputItem({ itemLabel, ...inputTypeProps }) {
  return (
    <p>
      <label>{itemLabel}</label>
      <input type="number" {...inputTypeProps} />
    </p>
  );
}
