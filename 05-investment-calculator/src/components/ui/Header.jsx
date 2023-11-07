import "./Header.css";
import logoImg from "../../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img
        src={logoImg}
        alt="Investment Calculator App Logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  );
}
