import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import style from './billings.module.scss'
import { useEffect, useState } from 'react'
import { createGetPlans, createPostPlans } from '../../../../utils/API/API';
import { IGetPlan } from '../../../../utils/API/types';
import { useTranslation } from 'react-i18next';

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  requestNotify: (purpose: string) => void;
}

const Billings: React.FC<IGeneral> = (props) => {
  const { setMobileSelect, requestNotify } = props
  const [plan, setPlan] = useState(
    "Basic"
  )
  const { t } = useTranslation();
  // ----------------- get data --------------------------
  const {
    data: getSubscriptionData,
  } = useQuery<IGetPlan[] | undefined>({
    queryKey: ["getSubscriptions"],
    queryFn: createGetPlans,
  });
  useEffect(() => {
    if (getSubscriptionData && Array.isArray(getSubscriptionData)) {
    const lastSubscription = getSubscriptionData.reduce((prev, current) => (prev.subscriptionId > current.subscriptionId) ? prev : current);
    if (lastSubscription) {
      setPlan(lastSubscription.planName);
      console.log(lastSubscription);
      }
    }
  }, [getSubscriptionData]);
  //------------------ get data ---------------------------



  // ------------------- save user ------------------------
  const queryClient = useQueryClient()
  const {
    mutate: SavePlans,
  } = useMutation({
    mutationFn: createPostPlans,
    onSuccess: (data) => {
      console.log('Success', data);
      if (data === 201) {
        requestNotify('success')
        queryClient.invalidateQueries({queryKey: ["getSubscriptions"]})
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });
  // ------------------- save user ------------------------


  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>{t("Billings")}</h2>
      <h5 className={style.parent_up_info}>{t("Pick a billing plan that suits you")}</h5>
    </div>

    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      

      {/* -------------------------- plans ------------------------------ */}
      <div className={style.parent_main_plans}>

        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Basic Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>{t("Basic Plan")}</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$99.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/{t("year")}</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>{t("Suitable plan for starter business")}</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Customers Segmentations")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Google Integrations")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Activity Reminde")}</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => SavePlans({plan: {name: "Basic Plan"}})}>
            {plan==='Basic Plan' ? t("Active Plan") : t("Choose Plan")}
          </button>
        </div>

        
        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Enterprise Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>{t("Enterprise Plan")}</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$119.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/{t("year")}</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>{t("Best plan for mid-sized businesses")}</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Get a Basic Plans")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Access All Feature")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Get 1 TB Cloud Storage")}</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => SavePlans({plan: {name: "Enterprise Plan"}})}>
            {plan==='Enterprise Plan' ? t("Active Plan") : t("Choose Plan")}
          </button>
        </div>

        
        {/* ---------------- option ------------------------ */}
        <div className={`${style.parent_main_plans_option} ${plan==='Professional Plan' && style.active_option}`}>
          <h5 className={style.parent_main_plans_option_name}>{t("Professional Plan")}</h5>

          <div className={style.parent_main_plans_option_price}>

            <p className={style.parent_main_plans_option_price_number}>
              <span className={style.parent_main_plans_option_price_number_integer}>$159.</span>
              <span className={style.parent_main_plans_option_price_number_reminder}>99</span>
            </p>

            <p className={style.parent_main_plans_option_price_period}>/{t("year")}</p>
          </div>

          <p className={style.parent_main_plans_option_desc}>{t("Suitable for big company")}</p>

          <div className={style.parent_main_plans_option_advantages}>
            
            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Get a Enterprise Plans")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Access All Feature")}</span>
            </div>

            <div className={style.parent_main_plans_option_advantages_feature}>
              <svg className={style.parent_main_plans_option_advantages_feature_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#12B3A8"/>
              </svg>
              <span className={style.parent_main_plans_option_advantages_feature_name}>{t("Get 2 TB Cloud Storage")}</span>
            </div>

          </div>

          <button className={style.parent_main_plans_option_btn}
          onClick={() => SavePlans({plan: {name: "Professional Plan"}})}>
            {plan==='Professional Plan' ? t("Active Plan") : t("Choose Plan")}
          </button>
        </div>

      </div>


      {/* -------------------------- transactions ------------------------------ */}
      <div className={style.parent_main_transactions}>

        <h5 className={style.parent_main_transactions_head}>{t("Billing History")}</h5>

        <div className={style.parent_main_transactions_main}>
          <table className={style.parent_main_transactions_main_table}>
            <thead className={style.parent_main_transactions_main_table_head}>
              <tr>
                <th className={style.parent_main_transactions_main_table_head_date}>{t("Invoices")}</th>
                <th className={style.parent_main_transactions_main_table_head_desc}>{t("Created Date")}</th>
                <th className={style.parent_main_transactions_main_table_head_price}>{t("Amount")}</th>
                <th className={style.parent_main_transactions_main_table_head_plan}>{t("Selected Plan")}</th>
              </tr>
            </thead> 
            <tbody className={style.parent_main_transactions_main_table_body}>
              {
                getSubscriptionData && 
                getSubscriptionData
                  .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
                  .slice(0, 5)
                  .map((item, index) => (
                    <tr key={index} className={style.parent_main_transactions_main_table_body_item}>
                      <td className={style.parent_main_transactions_main_table_body_item_date}>{item.subscriptionId}</td>
                      <td className={style.parent_main_transactions_main_table_body_item_desc}>{item.startDate}</td>
                      <td className={style.parent_main_transactions_main_table_body_item_price}>${item.amount}</td>
                      <td className={style.parent_main_transactions_main_table_body_item_plan}>{
                      item.planName === "Basic Plan" ? t("Basic Plan") : item.planName === "Enterprise Plan" ? t("Enterprise Plan") : t("Professional Plan")
                      }</td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>

      </div>
      

    </div>

  </div>
  )
}

export default Billings;
