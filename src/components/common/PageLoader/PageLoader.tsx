import style from './pageloader.module.scss'

const PageLoader = () => {
  return (
    <div className={style.pageloader}>
      <div className={style.pageloader_block}></div>
    </div>
  )
}

export default PageLoader
