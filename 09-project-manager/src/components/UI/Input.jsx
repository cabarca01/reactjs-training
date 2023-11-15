import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ label, type, ...inputProps }, ref) {
  const inputRef = useRef();
  const inputClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  useImperativeHandle(ref, () => {
    return {
      value() {
        return inputRef.current.value;
      },
      clear() {
        inputRef.current.value = "";
      }
    };
  });
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          className= {inputClasses}
          ref={inputRef}
          {...inputProps}
        />
      ) : (
        <input
          className={inputClasses}
          type={type}
          ref={inputRef}
          {...inputProps}
        />
      )}
    </p>
  );
});

export default Input;
