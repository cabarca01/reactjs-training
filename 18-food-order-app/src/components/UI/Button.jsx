import "./Button.css";

export default function Button({ children, isTextOnly, ...buttonProps }) {
  const cssClass = isTextOnly ? "text-button" : "button";
  return (
    <button className={cssClass} {...buttonProps}>
      {children}
    </button>
  );
}
