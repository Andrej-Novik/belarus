import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import style from "./style.module.scss";
import img from "../../../assets/img/vitebsk.png";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner img={img} title={"Лучшие места Витебской области"} />
      <CardList regionType={"vitebsk"} />
    </main>
  );
};

export default Main;
