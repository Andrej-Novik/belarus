import style from './style.module.scss'

const Card = ({
  img,
  title,
  rate,
  text,
  setLiked,
  likedData,
  deleteObg
}) => {
  let temp = []
  if (rate) {
    for (let i = 0; i < rate; i++) {
      temp.push(i)
    }
  }
  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={img} alt="img" />
      </div>
      <div className={style.text}>
        <p className={style.title}>{title.toUpperCase()}</p>
        <p className={style.rate}>
          {' '}
          {temp.map((i) => {
            return (
              <svg
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.623 1.62399L19.9485 11.9007L20.0605 12.2467H20.4242L31.1916 12.2467L22.4789 18.6026L22.1863 18.816L22.2978 19.1605L25.6247 29.4413L16.9176 23.0895L16.623 22.8745L16.3283 23.0895L7.62122 29.4413L10.9481 19.1605L11.0596 18.816L10.7671 18.6026L2.05435 12.2467L12.8217 12.2467H13.1854L13.2974 11.9007L16.623 1.62399Z"
                  fill="white"
                  stroke="white"
                />
              </svg>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default Card
