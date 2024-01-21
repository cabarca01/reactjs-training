import "./Input.css";

export default function Input({ id, label, error, ...inputProps }) {
  return (
    <p className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />

      {error && <span className="control-error">{error}</span>}
    </p>
  );
}
