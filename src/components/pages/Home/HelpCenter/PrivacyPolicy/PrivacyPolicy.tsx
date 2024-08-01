import style from './privacyPolicy.module.scss'

interface IPrivacyPolicy {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const PrivacyPolicy:  React.FC<IPrivacyPolicy> = (props) => {
  const { setMobileSelect } = props




  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}
    >

    <h2 className={style.parent_head}>Contact & FAQ</h2>


    <div className={style.parent_line}>Privacy</div>


  </div>
  )
}

export default PrivacyPolicy
