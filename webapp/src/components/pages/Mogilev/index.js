import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import style from "./style.module.scss";
import img from "../../../assets/img/mogilev.png";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner img={img} title={"Лучшие места Могилёвской области"} />
      <CardList regionType={"mogilev"} />
    </main>
  );
};

export default Main;
