import style from "./style.module.scss";
import image from "../../../assets/img/banner.png";

const Banner = () => {
  return (
    <section className={style.banner}>
      <div className={style.info}>
        <h1 className={style.title}>
          WELCOME TO <br /> BELARUS!
        </h1>
        <h2 className={style.subtitle}>Добро пожаловать в Беларусь!</h2>
      </div>
      <div className={style.image}>
        <img src={image} alt="i,age" />
      </div>
    </section>
  );
};

export default Banner;
