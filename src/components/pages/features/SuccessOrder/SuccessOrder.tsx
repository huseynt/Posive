import style from "./successorder.module.scss";
import { useTranslation } from "react-i18next";

interface ISuccessOrder {
  orderId: number;
  receiptNumber: string[];
  cashier: string;
  menu: string[];
  price: number;
  place: string;
  orderDate: string;
  paymentMethod: string;  
  tables: string[];
}
interface IQRCodeComponentProps {
  setSuccessOrder: React.Dispatch<React.SetStateAction<ISuccessOrder>>;
  successOrder: ISuccessOrder;
}

const SuccessOrder: React.FC<IQRCodeComponentProps> = (props) => {
  const { setSuccessOrder, successOrder } = props;
  const { t } = useTranslation();
  const handlePrint = () => {
    window.print();
  }

  return (
    <div className={style.success}>
      <div
        className={style.success_bg}
        onClick={() => setSuccessOrder({
          orderId: 0,
          receiptNumber: [],
          cashier: "",
          menu: [],
          price: 0,
          place: "",
          orderDate: "",
          paymentMethod: "",
          tables: []
        })}
      ></div>
      <div className={style.success_block} id="content">
        <div className={style.success_block_head}>
          <svg
            className={style.success_block_head_icon}
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5002 58.6668C47.1668 58.6668 59.1668 46.6668 59.1668 32.0002C59.1668 17.3335 47.1668 5.3335 32.5002 5.3335C17.8335 5.3335 5.8335 17.3335 5.8335 32.0002C5.8335 46.6668 17.8335 58.6668 32.5002 58.6668Z"
              stroke="#12B3A8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.1665 31.9998L28.7132 39.5465L43.8332 24.4531"
              stroke="#12B3A8"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className={style.success_block_head_text}>
            {t("Successfully placed an order")}
          </p>
          <p className={style.success_block_head_price}>{successOrder.price.toFixed(2)} AZN</p>
        </div>

        <div className={style.success_block_detail}>
          <div className={style.success_block_detail_item}>
            <p className={style.success_block_detail_item_name}>
              {t("Order ID")}
            </p>
            <p className={style.success_block_detail_item_value}>{successOrder.orderId}</p>
          </div>

          <div className={style.success_block_detail_item}>
            <p className={style.success_block_detail_item_name}>
              {t("Receipt Number")}
            </p>
            <p className={style.success_block_detail_item_value}>{successOrder.receiptNumber.join("").slice(1,8)}</p>
          </div>

          <div className={style.success_block_detail_item}>
            <p className={style.success_block_detail_item_name}>
              {t("Date & Time")}
            </p>
            <p className={style.success_block_detail_item_value}>
              {new Date(successOrder.orderDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
            </p>
          </div>

          <div className={style.success_block_detail_item}>
            <p className={style.success_block_detail_item_name}>
              {t("Payment method")}
            </p>
            <p className={style.success_block_detail_item_value}>
              {successOrder.paymentMethod}
            </p>
          </div>

          <div className={style.success_block_detail_item}>
            <p className={style.success_block_detail_item_name}>
              {t("Collected by")}
            </p>
            <p className={style.success_block_detail_item_value}>
              {successOrder.cashier}
            </p>
          </div>
        </div>

        <div className={style.success_block_actions}>
          <button className={style.success_block_actions_new}
          onClick={() => setSuccessOrder(
            {
              orderId: 0,
              receiptNumber: [],
              cashier: "",
              menu: [],
              price: 0,
              place: "",
              orderDate: "",
              paymentMethod: "",
              tables: []
            }
          )}
          >
            {t("New Order")}
          </button>

          <div className={style.success_block_actions_print}
          onClick={handlePrint}
          >
            <svg
              className={style.success_block_actions_print_icon}
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.3335 4.66683H11.6668V3.3335C11.6668 2.00016 11.1668 1.3335 9.66683 1.3335H7.3335C5.8335 1.3335 5.3335 2.00016 5.3335 3.3335V4.66683Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.1668 10V12.6667C11.1668 14 10.5002 14.6667 9.16683 14.6667H7.8335C6.50016 14.6667 5.8335 14 5.8335 12.6667V10H11.1668Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 6.6665V9.99984C14.5 11.3332 13.8333 11.9998 12.5 11.9998H11.1667V9.99984H5.83333V11.9998H4.5C3.16667 11.9998 2.5 11.3332 2.5 9.99984V6.6665C2.5 5.33317 3.16667 4.6665 4.5 4.6665H12.5C13.8333 4.6665 14.5 5.33317 14.5 6.6665Z"
                stroke="#1A1C1E"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.8332 10H11.0265H5.1665"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.1665 7.3335H7.1665"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className={style.success_block_actions_print_name}>
              {t("Print Receipt")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessOrder;
