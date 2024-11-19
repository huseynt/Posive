import style from "./gloader.module.scss";

const GLoader = () => {
  return (
    <div className={style.loader}>
      <div className={style.loader_ball}></div>
    </div>
  )
}

export default GLoader
