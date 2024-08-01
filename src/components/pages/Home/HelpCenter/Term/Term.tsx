import style from './term.module.scss'

interface ITerm {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const Term: React.FC<ITerm> = (props) => {
  const { setMobileSelect } = props




  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}
    >

    <h2 className={style.parent_head}>Contact & FAQ</h2>


    <div className={style.parent_line}>Term</div>


  </div>
  )
}

export default Term
