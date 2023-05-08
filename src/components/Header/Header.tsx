import avatar from "../../assets/Avatar.svg";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>REGISTER</h1>
        <h2 className={styles.subtitle}>ONLINE</h2>
        <nav className={styles.navContainer}>
          <button className={`${styles.btn} ${styles.btnLogin}`}>LOGIN</button>

          <button className={`${styles.btn} ${styles.btnRegister}`}>REGISTER</button>
        </nav>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={avatar} alt="Avatar" />
      </div>
    </header>
  );
};

export default Header;
