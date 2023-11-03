export default function Tabs({
  children,
  MenuContainer = "menu",
  menuElements,
}) {
  return (
    <>
      <MenuContainer>{menuElements}</MenuContainer>
      {children}
    </>
  );
}
