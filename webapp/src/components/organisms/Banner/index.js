import style from "./style.module.scss";

const Banner = ({ title, text, img }) => {
  return (
    <section className={style.banner}>
      <div className={style.container}>
        <div className={style.info}>
          <h1 className={style.title}>{title}</h1>
          <h2 className={style.subtitle}>{text}</h2>
        </div>
        <div className={style.image}>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
