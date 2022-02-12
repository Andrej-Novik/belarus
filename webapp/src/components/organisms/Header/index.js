import { Link, useLocation } from "react-router-dom";
import style from "./styles.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.links}>
          <Link to={"/"}>Главная</Link>
          <Link to={"/"}>История</Link>
          <Link to={"/"}>Путешествия</Link>
          <Link to={"/"}>Избранное</Link>
          <Link to={"/"}>FAQ</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
