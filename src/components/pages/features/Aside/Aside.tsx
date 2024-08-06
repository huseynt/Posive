import style from "./aside.module.scss";
import { useState } from "react";

interface AsideProps {
  bag: boolean;
  setQrOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTable: React.Dispatch<React.SetStateAction<boolean>>;
  setBag: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessOrder: React.Dispatch<React.SetStateAction<boolean>>;
  requestNotify: (purpose: string) => void;
}

const Aside: React.FC<AsideProps> = (props) => {
  const { bag, setQrOpen, setTable, setBag, setSuccessOrder, requestNotify } = props;
  const id: string = "#123456";

  const [data, setData] = useState({
    name: ""
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  const handleOrder = () => {
    if (data.name === "") {
      requestNotify("important");
    } else {
      requestNotify("done");
      setSuccessOrder(true);
    }
  }

  return (
    <div
      className={style.aside}
      style={{
        width: bag ? "450px" : "0",
        opacity: bag ? "1" : "0",
        padding: bag ? "5px 1.5% 7px" : "5px 0 7px",
        transition: "all 0.1s ease-in-out",
        zIndex: bag ? "100" : "-1",
      }}
    >
      {/* ------------ aside_up -------------- */}
      <div
        className={style.aside_up}
        style={{
          display: bag ? "flex" : "none",
          transition: "all 0.1s ease-in-out",
        }}
      >
        <div className={style.aside_up_order}>
          <h4>Current Order</h4>
          <p
            onClick={() => navigator.clipboard.writeText(id)}
            title="Copy Current Order ID"
          >
            {id}
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1663 8.60016V11.4002C11.1663 13.7335 10.233 14.6668 7.89967 14.6668H5.09967C2.76634 14.6668 1.83301 13.7335 1.83301 11.4002V8.60016C1.83301 6.26683 2.76634 5.3335 5.09967 5.3335H7.89967C10.233 5.3335 11.1663 6.26683 11.1663 8.60016Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.1663 4.60016V7.40016C15.1663 9.7335 14.233 10.6668 11.8997 10.6668H11.1663V8.60016C11.1663 6.26683 10.233 5.3335 7.89967 5.3335H5.83301V4.60016C5.83301 2.26683 6.76634 1.3335 9.09967 1.3335H11.8997C14.233 1.3335 15.1663 2.26683 15.1663 4.60016Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>

        {/* ------------------- for mobile ----------------- */}
        <div className={style.aside_up_mobileLeft} onClick={() => setBag(!bag)}>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.57 6.6001L3.5 12.6701L9.57 18.7401"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5 12.6699H3.67"
              stroke="#292D32"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <button className={style.aside_up_settings}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 6.83252V11.16C2.25 12.75 2.25 12.75 3.75 13.7625L7.875 16.1475C8.4975 16.5075 9.51 16.5075 10.125 16.1475L14.25 13.7625C15.75 12.75 15.75 12.75 15.75 11.1675V6.83252C15.75 5.25002 15.75 5.25002 14.25 4.23752L10.125 1.85252C9.51 1.49252 8.4975 1.49252 7.875 1.85252L3.75 4.23752C2.25 5.25002 2.25 5.25002 2.25 6.83252Z"
              stroke="#6C7278"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z"
              stroke="#6C7278"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ------------ customer -------------- */}
      <div
        className={style.aside_customer}
        style={{
          display: bag ? "block" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <input 
          type="text" 
          id="name" 
          onChange={change} 
          value={data.name}
          className={style.aside_customer_name}
        />
        <p className={data.name ? style.label_focus : style.label}>Customer Name</p>
        <svg
          className={style.aside_customer_icon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.00008 8.00016C9.84103 8.00016 11.3334 6.50778 11.3334 4.66683C11.3334 2.82588 9.84103 1.3335 8.00008 1.3335C6.15913 1.3335 4.66675 2.82588 4.66675 4.66683C4.66675 6.50778 6.15913 8.00016 8.00008 8.00016Z"
            stroke="#1A1C1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667"
            stroke="#1A1C1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* ------------ place -------------- */}
      <div
        className={style.aside_place}
        style={{
          display: bag ? "flex" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <h3 className={style.aside_place_head}>Where will you eat :</h3>
        <div className={style.aside_place_selection}>
          <div className={style.aside_place_selection_option}>
            <svg
              className={style.aside_place_selection_option_icon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.06997C15 6.39997 14.67 5.77997 14.11 5.40997L10.11 2.73997C9.44 2.28997 8.56 2.28997 7.89 2.73997L3.89 5.40997C3.34 5.77997 3 6.39997 3 7.06997V12.75C3 13.03 3.22 13.25 3.5 13.25H14.5C14.78 13.25 15 13.03 15 12.75V7.06997ZM9 10.75C8.04 10.75 7.25 9.95997 7.25 8.99997C7.25 8.03997 8.04 7.24997 9 7.24997C9.96 7.24997 10.75 8.03997 10.75 8.99997C10.75 9.95997 9.96 10.75 9 10.75Z"
                fill="#292D32"
              />
              <path
                d="M22 21.25H20.73V18.25C21.68 17.94 22.37 17.05 22.37 16V14C22.37 12.69 21.3 11.62 19.99 11.62C18.68 11.62 17.61 12.69 17.61 14V16C17.61 17.04 18.29 17.92 19.22 18.24V21.25H15V15.25C15 14.97 14.78 14.75 14.5 14.75H3.5C3.22 14.75 3 14.97 3 15.25V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19.93C19.95 22.75 19.96 22.76 19.98 22.76C20 22.76 20.01 22.75 20.03 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25ZM8.25 18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V21.25H8.25V18.25Z"
                fill="#292D32"
              />
            </svg>
            <p className={style.aside_place_selection_option_name}>Dine in</p>
          </div>

          <div className={style.aside_place_selection_option}>
            <svg
              className={style.aside_place_selection_option_icon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
                fill="#292D32"
              />
              <path
                d="M19.09 12H4.90995C4.28995 12 3.81995 12.55 3.91995 13.16L4.75995 18.3C5.03995 20.02 5.78995 22 9.11995 22H14.7299C18.0999 22 18.7 20.31 19.0599 18.42L20.07 13.19C20.19 12.57 19.72 12 19.09 12ZM14.88 16.05L11.63 19.05C11.49 19.18 11.3099 19.25 11.1199 19.25C10.9299 19.25 10.74 19.18 10.59 19.03L9.08995 17.53C8.79995 17.24 8.79995 16.76 9.08995 16.47C9.38995 16.18 9.85995 16.18 10.1599 16.47L11.1499 17.46L13.87 14.95C14.17 14.67 14.65 14.69 14.93 14.99C15.21 15.3 15.19 15.77 14.88 16.05Z"
                fill="#292D32"
              />
            </svg>
            <p className={style.aside_place_selection_option_name}>Take away</p>
          </div>
        </div>
      </div>

      {/* ------------ select table -------------- */}
      <div
        className={style.aside_table}
        style={{
          display: bag ? "flex" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <h3 className={style.aside_table_head}>Table :</h3>
        <div
          className={style.aside_table_select}
          onClick={() => setTable(true)}
        >
          <p className={style.aside_table_select_name}>Select Table</p>
          <svg
            className={style.aside_table_select_icon}
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.025 16.1834C11.8667 16.1834 11.7083 16.1251 11.5833 16.0001C11.3417 15.7584 11.3417 15.3584 11.5833 15.1168L16.2 10.5001L11.5833 5.88343C11.3417 5.64176 11.3417 5.24176 11.5833 5.0001C11.825 4.75843 12.225 4.75843 12.4667 5.0001L17.525 10.0584C17.7667 10.3001 17.7667 10.7001 17.525 10.9418L12.4667 16.0001C12.3417 16.1251 12.1834 16.1834 12.025 16.1834Z"
              fill="#6C7278"
            />
            <path
              d="M16.9417 11.125H2.91675C2.57508 11.125 2.29175 10.8417 2.29175 10.5C2.29175 10.1583 2.57508 9.875 2.91675 9.875H16.9417C17.2834 9.875 17.5667 10.1583 17.5667 10.5C17.5667 10.8417 17.2834 11.125 16.9417 11.125Z"
              fill="#6C7278"
            />
          </svg>
        </div>
      </div>

      {/* ------------ your order -------------- */}
      <div
        className={style.aside_order}
        style={{
          display: bag ? "flex" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <h3 className={style.aside_order_head}>Your Order :</h3>

        <div className={style.aside_order_list}>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
          <div className={style.aside_order_list_select}>
            <div className={style.aside_order_list_select_left}>
              <p className={style.aside_order_list_select_left_number}>1</p>
              <p className={style.aside_order_list_select_left_name}>
                Health Salad (1)
              </p>
            </div>
            <p className={style.aside_order_select_price}>$12.00</p>
          </div>
        </div>
      </div>

      {/* ------------ order detail -------------- */}
      <div
        className={style.aside_detail}
        style={{
          display: bag ? "flex" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <div className={style.aside_detail_orders}>
          <div className={style.aside_detail_orders_subtotal}>
            <p className={style.aside_detail_orders_subtotal_name}>
              Subtotal (2)
            </p>
            <p className={style.aside_detail_orders_subtotal_price}>$96.00</p>
          </div>
          <div className={style.aside_detail_orders_tax}>
            <p className={style.aside_detail_orders_tax_name}>Service Tax</p>
            <p className={style.aside_detail_orders_tax_price}>$7.68</p>
          </div>
        </div>
        <div className={style.aside_detail_total}>
          <p className={style.aside_detail_total_name}>Total Payment</p>
          <p className={style.aside_detail_total_price}>$103.68</p>
        </div>
      </div>

      {/* ------------ payment method -------------- */}
      <div
        className={style.aside_payment}
        style={{
          display: bag ? "flex" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
      >
        <h3 className={style.aside_payment_head}>Payment Method :</h3>
        <div className={style.aside_payment_select}>
          <div className={style.aside_payment_select_option}>
            <div className={style.aside_payment_select_option_icon}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8263 12.5C23.8263 16.3694 20.6958 19.5 16.8263 19.5C15.193 19.5 13.6958 18.9361 12.5097 18.0028C14.143 16.7194 15.1736 14.7361 15.1736 12.5C15.1736 10.2639 14.1236 8.28055 12.5097 6.99722C13.6958 6.06389 15.193 5.5 16.8263 5.5C20.6958 5.5 23.8263 8.64999 23.8263 12.5Z"
                  fill="#F79E1B"
                />
                <path
                  d="M12.5097 6.99722C12.5097 6.99722 12.5097 6.99722 12.5097 6.99722C14.1236 8.28055 15.1736 10.2639 15.1736 12.5C15.1736 14.7361 14.143 16.7194 12.5097 18.0028L12.4902 18.0028C10.8763 16.7389 9.82634 14.7361 9.82634 12.5C9.82634 10.2639 10.8763 8.28059 12.4902 6.99726C12.4902 6.99725 12.4902 6.99728 12.4902 6.99726L12.5097 6.99722Z"
                  fill="#FF5F00"
                />
                <path
                  d="M9.82634 12.5C9.82634 10.2639 10.8763 8.28059 12.4902 6.99726C11.3041 6.06393 9.8069 5.50003 8.17357 5.50003C4.30413 5.50003 1.17358 8.63058 1.17358 12.5C1.17358 16.3695 4.30413 19.5 8.17357 19.5C9.8069 19.5 11.3041 18.9361 12.4902 18.0028C10.8763 16.7389 9.82634 14.7361 9.82634 12.5Z"
                  fill="#EB001B"
                />
              </svg>
            </div>
            <p className={style.aside_payment_select_option_name}>
              Master Card
            </p>
          </div>
          <div className={style.aside_payment_select_option}>
            <div className={style.aside_payment_select_option_icon}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.9179 8.56508C17.9032 8.65998 17.8862 8.75696 17.8673 8.85661C17.2141 12.224 14.9792 13.3873 12.1251 13.3873H10.6718C10.3227 13.3873 10.0285 13.6418 9.97423 13.9875L9.01943 20.0684C8.98408 20.2955 9.15832 20.5 9.38641 20.5H11.964C12.2691 20.5 12.5284 20.2774 12.5765 19.9752L12.6018 19.8437L13.0871 16.7515L13.1183 16.5819C13.1658 16.2786 13.4257 16.0559 13.7308 16.0559H14.1163C16.6136 16.0559 18.5685 15.0379 19.1399 12.092C19.3785 10.8614 19.255 9.83384 18.6234 9.11117C18.4323 8.8933 18.1952 8.71241 17.9179 8.56508Z"
                  fill="#298FC2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2343 8.29156C17.1344 8.2623 17.0315 8.23587 16.9259 8.21196C16.8197 8.18864 16.711 8.168 16.599 8.14988C16.2072 8.08631 15.7778 8.05617 15.3179 8.05617H11.4356C11.3399 8.05617 11.249 8.07785 11.1678 8.11706C10.9887 8.20349 10.8557 8.37369 10.8235 8.58206L9.99752 13.8344L9.97386 13.9875C10.0281 13.6418 10.3223 13.3874 10.6714 13.3874H12.1247C14.9789 13.3874 17.2137 12.2235 17.8669 8.85666C17.8864 8.75701 17.9029 8.66003 17.9175 8.56512C17.7523 8.47706 17.5733 8.40176 17.3806 8.3376C17.3329 8.32171 17.2838 8.30641 17.2343 8.29156Z"
                  fill="#22284F"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8235 8.58206C10.8557 8.37369 10.9889 8.20351 11.168 8.11766C11.2498 8.07831 11.34 8.05663 11.4357 8.05663H15.3181C15.7779 8.05663 16.2073 8.08692 16.5992 8.15049C16.7111 8.16846 16.8199 8.18925 16.9261 8.21257C17.0317 8.23633 17.1346 8.26291 17.2345 8.29202C17.284 8.30687 17.3331 8.32232 17.3812 8.33761C17.5739 8.40177 17.7531 8.47766 17.9183 8.56514C18.1126 7.32074 17.9167 6.47346 17.2466 5.70623C16.5078 4.86148 15.1745 4.5 13.4683 4.5H8.51487C8.16638 4.5 7.86907 4.75441 7.81523 5.10074L5.75211 18.2314C5.71143 18.4911 5.91097 18.7255 6.17189 18.7255H9.22989L10.8235 8.58206Z"
                  fill="#28356A"
                />
              </svg>
            </div>
            <p className={style.aside_payment_select_option_name}>Paypal</p>
          </div>

          <div
            className={style.aside_payment_select_option}
            onClick={() => setQrOpen(true)}
          >
            <div className={style.aside_payment_select_option_icon}>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.16675 8.62484C1.82508 8.62484 1.54175 8.3415 1.54175 7.99984V5.9165C1.54175 3.49984 3.50841 1.5415 5.91675 1.5415H8.00008C8.34175 1.5415 8.62508 1.82484 8.62508 2.1665C8.62508 2.50817 8.34175 2.7915 8.00008 2.7915H5.91675C4.19175 2.7915 2.79175 4.1915 2.79175 5.9165V7.99984C2.79175 8.3415 2.50841 8.62484 2.16675 8.62484Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M18.8333 8.62484C18.4917 8.62484 18.2083 8.3415 18.2083 7.99984V5.9165C18.2083 4.1915 16.8083 2.7915 15.0833 2.7915H13C12.6583 2.7915 12.375 2.50817 12.375 2.1665C12.375 1.82484 12.6583 1.5415 13 1.5415H15.0833C17.4917 1.5415 19.4583 3.49984 19.4583 5.9165V7.99984C19.4583 8.3415 19.175 8.62484 18.8333 8.62484Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M15.0833 19.4585H13.8333C13.4916 19.4585 13.2083 19.1752 13.2083 18.8335C13.2083 18.4918 13.4916 18.2085 13.8333 18.2085H15.0833C16.8083 18.2085 18.2083 16.8085 18.2083 15.0835V13.8335C18.2083 13.4918 18.4916 13.2085 18.8333 13.2085C19.1749 13.2085 19.4583 13.4918 19.4583 13.8335V15.0835C19.4583 17.5002 17.4916 19.4585 15.0833 19.4585Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M8.00008 19.4583H5.91675C3.50841 19.4583 1.54175 17.5 1.54175 15.0833V13C1.54175 12.6583 1.82508 12.375 2.16675 12.375C2.50841 12.375 2.79175 12.6583 2.79175 13V15.0833C2.79175 16.8083 4.19175 18.2083 5.91675 18.2083H8.00008C8.34175 18.2083 8.62508 18.4917 8.62508 18.8333C8.62508 19.175 8.34175 19.4583 8.00008 19.4583Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M8 4.875H6.33333C5.38333 4.875 4.875 5.375 4.875 6.33333V8C4.875 8.95833 5.38333 9.45833 6.33333 9.45833H8C8.95 9.45833 9.45833 8.95833 9.45833 8V6.33333C9.45833 5.375 8.95 4.875 8 4.875Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M14.6667 4.875H13.0001C12.0501 4.875 11.5417 5.375 11.5417 6.33333V8C11.5417 8.95833 12.0501 9.45833 13.0001 9.45833H14.6667C15.6167 9.45833 16.1251 8.95833 16.1251 8V6.33333C16.1251 5.375 15.6167 4.875 14.6667 4.875Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M8 11.5415H6.33333C5.38333 11.5415 4.875 12.0415 4.875 12.9998V14.6665C4.875 15.6248 5.38333 16.1248 6.33333 16.1248H8C8.95 16.1248 9.45833 15.6248 9.45833 14.6665V12.9998C9.45833 12.0415 8.95 11.5415 8 11.5415Z"
                  fill="#1A1C1E"
                />
                <path
                  d="M14.6667 11.5415H13.0001C12.0501 11.5415 11.5417 12.0415 11.5417 12.9998V14.6665C11.5417 15.6248 12.0501 16.1248 13.0001 16.1248H14.6667C15.6167 16.1248 16.1251 15.6248 16.1251 14.6665V12.9998C16.1251 12.0415 15.6167 11.5415 14.6667 11.5415Z"
                  fill="#1A1C1E"
                />
              </svg>
            </div>
            <p className={style.aside_payment_select_option_name}>Scan Code</p>
          </div>
        </div>
      </div>

      <button
        className={style.aside_makeorder}
        style={{
          display: bag ? "block" : "none",
          // height: bag ? 'auto' : '0',
          transition: "all 0.1s ease-in-out",
        }}
        onClick={handleOrder}
      >
        Make Order
      </button>
    </div>
  );
};

export default Aside;
