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

    <h2 className={style.parent_head}>Term & Conditions</h2>


    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      <div className={style.parent_main_block}>
        <p className={style.parent_main_block_text}>Welcome to our POS Dashboard! These terms and conditions outline the rules and regulations for the use of our POS Dashboard.</p>
        <p className={style.parent_main_block_text}>By accessing this dashboard, we assume you accept these terms and conditions in full. Do not continue to use our POS Dashboard if you do not accept all of the terms and conditions stated on this page.</p>
        <p className={style.parent_main_block_text}>The following terminology applies to these Terms and Conditions: "Client", "You" and "Your" refer to you, the person accessing this dashboard and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refer to our company. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Cookies</h2>
        <p className={style.parent_main_block_text}>We employ the use of cookies. By using our POS Dashboard you consent to the use of cookies in accordance with our privacy policy.</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>License</h2>
        <p className={style.parent_main_block_text}>Unless otherwise stated, we own the intellectual property rights for all material on our POS Dashboard. All intellectual property rights are reserved.</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Restrictions</h2>
        <p className={style.parent_main_block_text}>You are specifically restricted from all of the following:</p>
        <ul className={style.parent_main_block_list}>
          <li>Republishing material from our POS Dashboard</li>
          <li>Selling, sublicensing and/or otherwise commercializing any material from our POS Dashboard</li>
          <li>Using our POS Dashboard in any way that is or may be damaging to this dashboard</li>
          <li>Using our POS Dashboard in any way that impacts user access to this dashboard</li>
          <li>Using our POS Dashboard contrary to applicable laws and regulations, or in any way may cause harm to the dashboard, or to any person or business entity</li>
        </ul>
      </div>
    </div>


  </div>
  )
}

export default Term
