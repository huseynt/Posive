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

    <h2 className={style.parent_head}>App Information</h2>



    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      <div className={style.parent_main_block}>
        <p className={style.parent_main_block_text}>Welcome to our POS (Point of Sale) Dashboard, a powerful tool designed to revolutionize the way you manage your business transactions. Our intuitive interface provides real-time insights, customizable reports, and seamless integration with your existing POS system, empowering you to make informed decisions and drive business growth. Whether you're a small business owner or a large enterprise, our POS Dashboard is tailored to meet your unique needs.</p>
      </div>

      <div className={style.parent_main_block}>
        <h2 className={style.parent_main_block_head}>Key Features:</h2>

        <ul className={style.parent_main_block_down}>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Real-Time Transaction Monitoring:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>View live updates of sales transactions as they occur, allowing you to track sales performance and identify trends instantly.</li>
              <li>Monitor transaction volumes, average order value, and top-selling items in real-time to optimize sales strategies.</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Customizable Reports:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>Generate detailed reports on sales, inventory, and customer behavior with customizable parameters and filters.</li>
              <li>Analyze sales by product category, time period, location, and more to gain actionable insights into your business operations.</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Inventory Management:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>Keep track of stock levels and inventory turnover to prevent stockouts and minimize overstocking.</li>
              <li>Set up automatic alerts for low inventory levels and receive notifications when it's time to reorder products.</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Customer Insights:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>Gain valuable insights into customer preferences and purchasing behavior to personalize marketing campaigns and enhance customer satisfaction.</li>
              <li>Segment customers based on demographics, purchase history, and loyalty to target promotions effectively.</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Multi-Store Management:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>Manage multiple store locations from a single dashboard, providing centralized control and visibility across your entire business.</li>
              <li>Compare performance metrics between stores and identify areas for improvement to optimize profitability.</li>
            </ul>
          </li>

          <li className={style.parent_main_block_down_item}>
            <h3 className={style.parent_main_block_down_item_head}>Secure Access and Data Protection:</h3>
            <ul className={style.parent_main_block_down_item_list}>
              <li>Ensure data security and compliance with industry standards through robust encryption and access controls.</li>
            </ul>
          </li>

        </ul>

      </div>



    </div>

  </div>
  )
}

export default Information
