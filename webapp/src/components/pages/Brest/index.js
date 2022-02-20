import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import style from "./style.module.scss";
import img from "../../../assets/img/brest.png";

const Main = () => {
  return (
    <main className={style.main}>
      <Banner img={img} title={"Лучшие места Брестской области"} />
      <CardList regionType={"brest"} />
    </main>
  );
};

export default Main;
