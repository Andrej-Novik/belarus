import Banner from "../../organisms/Banner";
import History from "../../organisms/History";
import style from "./style.module.scss";
import image from "../../../assets/img/history.png";
import FAQ from "../../organisms/FAQ";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner />
      <History />
      <div className={style.image}>
        <img src={image} alt="" />
      </div>
      <FAQ />
    </main>
  );
};

export default Main;
