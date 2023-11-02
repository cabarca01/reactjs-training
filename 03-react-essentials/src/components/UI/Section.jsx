export default function Section({ title, children, ...sectionProps }) {
  let titleText;
  if (title) {
    titleText = <h2>{title}</h2>;
  }
  return (
    <section {...sectionProps}>
      {titleText}
      {children}
    </section>
  );
}
