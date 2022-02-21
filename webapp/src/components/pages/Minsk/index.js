import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import style from "./style.module.scss";
import img from "../../../assets/img/minsk.png";
import History from "../../organisms/History";
import FAQ from "../../organisms/FAQ";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner img={img} title={"Лучшие места Минской области"} />
			<CardList regionType={"minsk"} />
			<History />
      <FAQ />
    </main>
  );
};

export default Main;
