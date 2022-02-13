import style from "./style.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.links}>
          <a href="#history">История</a>
          <Link to={"/"}>Путешествия</Link>
          <Link to={"/"}>Избранное</Link>
          <a href="#faq">FAQ</a>
        </div>
        <div className={style.places}>
          <Link to={"/"}>Лучшие места Витебской области</Link>
          <Link to={"/"}>Лучшие места брестской области</Link>
          <Link to={"/"}>Лучшие места минской области</Link>
          <Link to={"/"}>Лучшие места гродненской области</Link>
          <Link to={"/"}>Лучшие места могилевской области</Link>
          <Link to={"/"}>Лучшие места Гомельской области</Link>
        </div>
        <div className={style.about}>
          <h3>О проекте</h3>
          <p>
            Проект Welcome to Belarus! реализуется с целью предоставления
            ключевой информации о Республике Беларусь во всемирной сети Интернет
            для тех, кто интересуется нашей страной и ее туристическими
            достопримечательностями.
          </p>
          <p>
            Этот сайт создан и сопровождается учащейся ЧУО “Колледж бизнеса и
            права” Трибуть Елизаветой Николаевной.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
