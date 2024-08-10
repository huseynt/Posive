import style from './account.module.scss'

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const Account: React.FC<IGeneral> = (props) => {
  const { setMobileSelect } = props




  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>General</h2>
      <h5 className={style.parent_up_info}>Update your business persona</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      loading...
    </div>


  </div>
  )
}

export default Account;
