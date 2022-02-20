import { BrowserRouter, Switch, Route } from "react-router-dom";
import './assets/styles/common.scss'
import Main from "./components/pages/Main";
import Minsk from "./components/pages/Minsk";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import style from "./app.module.scss";


function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Switch>
          <div className={style.content}>
						<Route exact path="/" component={Main} />
						<Route exact path="/minsk" component={Minsk} />
          </div>
				</Switch>
				<Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
