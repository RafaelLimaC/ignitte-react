import ignitteLogo from "../assets/ignitte-logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={ignitteLogo} alt="Logotipo do Ignitte" />
    </header>
  );
}
