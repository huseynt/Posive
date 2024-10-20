import style from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader_ball}></div>
    </div>
  )
}

export default Loader
