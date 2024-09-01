import style from './billings.module.scss'
import { useState } from 'react'

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const Billings: React.FC<IGeneral> = (props) => {
  const { setMobileSelect } = props
  const [plan, setPlan] = useState('Professional Plan')



  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>Billings</h2>
      <h5 className={style.parent_up_info}>Pick a billing plan that suits you</h5>
    </div>

    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      

      {/* -------------------------- plans ------------------------------ */}
      <div className={style.parent_main_plans}>

        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Basic Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>Basic Plan</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$99.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/year</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>Suitable plan for starter business</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Customers Segmentations</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Google Integrations</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Activity Reminder</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => setPlan('Basic Plan')}>
            {plan==='Basic Plan' ? "Active Plan" : "Choose Plan"}
          </button>
        </div>

        
        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Enterprise Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>Enterprise Plan</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$119.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/year</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>Best plan for mid-sized businesses</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Get a Basic Plans</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Access All Feature</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Get 1 TB Cloud Storage</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => setPlan('Enterprise Plan')}>
            {plan==='Enterprise Plan' ? "Active Plan" : "Choose Plan"}
          </button>
        </div>

        
        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Professional Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>Professional Plan</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$159.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/year</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>Suitable for big company</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Get a Enterprise Plans</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Access All Feature</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>Get 2 TB Cloud Storage</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => setPlan('Professional Plan')}>
            {plan==='Professional Plan' ? "Active Plan" : "Choose Plan"}
          </button>
        </div>

      </div>


    </div>

  </div>
  )
}

export default Billings;
