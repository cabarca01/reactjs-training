export function ControlButton({ children, ...buttonProps }) {
  return (
    <button
      className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500"
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export function ControlTextButton({ children, ...buttonProps }) {
  return (
    <button
      className="px-4 py-2 font-semibold border-none text-amber-300  hover:text-amber-500"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
