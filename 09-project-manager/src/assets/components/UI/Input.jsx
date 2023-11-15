import { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef(function Input({ type, ...inputProps }, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => {
    return {
        value() {
            return inputRef.current.value;
        }
    }
  })
  return (
    <p>
      {type === "textarea" ? (
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={inputRef}
          {...inputProps}
        />
      ) : (
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          ref={inputRef}
          {...inputProps}
        />
      )}
    </p>
  );
});

export default Input;
