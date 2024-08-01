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

    <h2 className={style.parent_head}>Privacy Policy</h2>


    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Information Collection, Use, and Sharing</h2>
        <p className={style.parent_main_block_text}>We are the sole owners of the information collected on this dashboard. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
        <p className={style.parent_main_block_text}>We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g., to ship an order.</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Security</h2>
        <p className={style.parent_main_block_text}>We take precautions to protect your information. When you submit sensitive information via the dashboard, your information is protected both online and offline</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Updates</h2>
        <p className={style.parent_main_block_text}>Our Privacy Policy may change from time to time, and all updates will be posted on this page.</p>
        <p className={style.parent_main_block_text}>If you feel that we are not abiding by this privacy policy, you should contact us immediately via email.</p>
        <p className={style.parent_main_block_text}>This is a basic example and should be customized to suit the specific needs and legal requirements of your business and jurisdiction. It's recommended to consult with a legal professional to ensure compliance.</p>
      </div>
    </div>


  </div>
  )
}

export default PrivacyPolicy
