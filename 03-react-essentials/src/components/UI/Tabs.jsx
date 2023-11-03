export default function Tabs({ children, menuElements }) {
  return (
    <>
      <menu>{menuElements}</menu>
      {children}
    </>
  );
}
