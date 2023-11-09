export default function CustomInput({ label, invalid, ...inputProps }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 border-red-300 bg-red-100";
  } else {
    labelClasses += " text-stone-400";
    inputClasses += " text-stone-400 bg-stone-400";
  }
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...inputProps} />
    </p>
  );
}
