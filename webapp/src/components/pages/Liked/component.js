import Card from "../../molecules/Card";
import style from "./style.module.scss";
import img from "../../../assets/img/liked.png";

const Liked = ({ liked, likedData, setLiked }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.banner}>
        <div className={style.image}>
          <img src={img} />
        </div>

        <div className={style.bannerContainer}>
          <h2>Избранное</h2>
          <p>
            Избранное — это ваша личная записная книжка, которая будет доступна
            только вам. Откройте карточку места или достопримечательности и
            нажмите «Добавить в избранное». Выбранное место сохранится в
            настройках браузера, и вы легко отыщете его при следующем посещении
            сайта в разделе «Избранное».
          </p>
        </div>
      </div>

      {liked.length ? (
        <div className={style.container}>
          {liked.map((card) => {
            return (
              <Card
                key={card.img}
                img={card.img}
                title={card.title}
                rate={card.rate}
                id={card.id}
                likedData={likedData}
                setLiked={setLiked}
              />
            );
          })}
				</div>
				
      ) : (
        <div className={style.container}>
          <h3>Нет добавленных объктов</h3>
        </div>
      )}
    </div>
  );
};

export default Liked;
