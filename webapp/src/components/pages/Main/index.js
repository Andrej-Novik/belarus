import Banner from "../../organisms/Banner";
import CardList from "../../organisms/CardList";
import History from "../../organisms/History";
import style from "./style.module.scss";

const Main = () => {
  return (
    <main className={style.main}>
			<Banner />
			<History />
      <CardList />
    </main>
  );
};

export default Main;
