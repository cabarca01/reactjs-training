export default function Input({ id, label, error, ...inputProps }) {
  return (
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />

      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
