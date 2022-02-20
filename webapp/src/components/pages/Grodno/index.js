import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import style from "./style.module.scss";
import img from "../../../assets/img/grodno.png";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner img={img} title={"Лучшие места Гродненской области"} />
      <CardList regionType={"grodno"} />
    </main>
  );
};

export default Main;
