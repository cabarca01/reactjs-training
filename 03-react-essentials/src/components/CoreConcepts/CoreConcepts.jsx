import "./CoreConcepts.css";

export default function CoreConcepts({
  imageSrc,
  altText,
  title,
  description,
}) {
  return (
    <li>
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
