import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
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
      <CardList />
    </main>
  );
};

export default Main;
