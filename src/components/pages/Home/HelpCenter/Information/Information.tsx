import style from './information.module.scss'

interface IInformation {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}


const Information: React.FC<IInformation> = (props) => {
  const { setMobileSelect } = props




  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}
    >

    <h2 className={style.parent_head}>Contact & FAQ</h2>



    <div className={style.parent_line}>information</div>


  </div>
  )
}

export default Information
