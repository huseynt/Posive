import { useTranslation } from 'react-i18next';
import style from './information.module.scss'

interface IInformation {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}


const Information: React.FC<IInformation> = (props) => {
  const { setMobileSelect } = props
  const { t } = useTranslation();



  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}
    >

    <h2 className={style.parent_head}>{t("App Information")}</h2>



    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      <div className={style.parent_main_block}>
        <p className={style.parent_main_block_text}>
          {t("Welcome to our POS (Point of Sale) Dashboard, a powerful tool designed to revolutionize the way you manage your business transactions. Our intuitive interface provides real-time insights, customizable reports, and seamless integration with your existing POS system, empowering you to make informed decisions and drive business growth. Whether you're a small business owner or a large enterprise, our POS Dashboard is tailored to meet your unique needs.")}
        </p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>{t("Key Features :")}</h2>

        <ul className={style.parent_main_block_down}>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Real-Time Transaction Monitoring :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("View live updates of sales transactions as they occur, allowing you to track sales performance and identify trends instantly.")}</li>
              <li>{t("Monitor transaction volumes, average order value, and top-selling items in real-time to optimize sales strategies.")}</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Customizable Reports :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("Generate detailed reports on sales, inventory, and customer behavior with customizable parameters and filters.")}</li>
              <li>{t("Analyze sales by product category, time period, location, and more to gain actionable insights into your business operations.")}</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Inventory Management :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("Keep track of stock levels and inventory turnover to prevent stockouts and minimize overstocking.")}</li>
              <li>{t("Set up automatic alerts for low inventory levels and receive notifications when it's time to reorder products.")}</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Customer Insights :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("Gain valuable insights into customer preferences and purchasing behavior to personalize marketing campaigns and enhance customer satisfaction.")}</li>
              <li>{t("Segment customers based on demographics, purchase history, and loyalty to target promotions effectively.")}</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Multi-Store Management :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("Manage multiple store locations from a single dashboard, providing centralized control and visibility across your entire business.")}</li>
              <li>{t("Compare performance metrics between stores and identify areas for improvement to optimize profitability.")}</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>{t("Secure Access and Data Protection :")}</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>{t("Ensure data security and compliance with industry standards through robust encryption and access controls.")}</li>
            </ul>
          </li>

        </ul>

      </div>



    </div>

  </div>
  )
}

export default Information
