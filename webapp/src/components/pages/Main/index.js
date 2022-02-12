import Banner from "../../organisms/Banner";
import History from "../../organisms/History";
import style from "./style.module.scss";

const Main = () => {
  return (
    <main className={style.main}>
			<Banner />
			<History />
    </main>
  );
};

export default Main;
