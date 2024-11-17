import { useTranslation } from "react-i18next";
import style from "./productitemview.module.scss";

interface IProductViewComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;

  id: number;
  name: string;
  receiptNo: string;
  orderofDay: number;
  category: string;
  imageUrl: string;
  price: number;
  stock: number;
  tax: number;
  discount: number;
  description: string;
}

const ProductItemView: React.FC<IProductViewComponentProps> = (props) => {
  const { setViewOpen, receiptNo, discount, tax, category, name, price, stock, imageUrl } = props;
  const {t} = useTranslation();

  const handlePrint = () => {
    window.print();
  }


  return (
    <div className={`${style.view} ${style.printable_modal}`}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>{t("Details Product")}</h3>
          <div className={style.view_block_head_exit}
          onClick={() => setViewOpen("")}
          >
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.750488 1.25L11.2498 11.7493" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.750218 11.7493L11.2495 1.25" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className={style.view_block_main}>

          <div className={style.view_block_main_information}>
            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Product Name")}</div>
              <div className={style.view_block_main_information_item_value}>{name}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Category")}</div>
              <div className={style.view_block_main_information_item_value}>{category}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Receipt Number")}</div>
              <div className={style.view_block_main_information_item_value}>{receiptNo}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Input Tax")}</div>
              <div className={style.view_block_main_information_item_value}>{tax}%</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Discount")}</div>
              <div className={style.view_block_main_information_item_value}>{discount}%</div>
            </div>
          </div>


          <div className={style.view_block_main_menu}>


            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Price")}</div>
              <div className={style.view_block_main_information_item_value}>${price}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Stock")}</div>
              <div className={style.view_block_main_information_item_value}>{stock}</div>
            </div>

            <div className={style.view_block_main_menu_head}>{t("Product Image")}</div>

            { imageUrl &&
              <div className={style.view_block_main_menu_image}>
              <div className={style.view_block_main_menu_image_img}>
                <img src={imageUrl} alt={name} />
              </div>
              <div className={style.view_block_main_menu_image_name}>{name}</div>
              <div className={style.view_block_main_menu_image_size}>
                {imageUrl.length}KB
              </div>
            </div>}


          </div>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_print}`}
          onClick={handlePrint}
          >
            <span>{t("Print")}</span>
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.8335 5.16634H11.1668V3.83301C11.1668 2.49967 10.6668 1.83301 9.16683 1.83301H6.8335C5.3335 1.83301 4.8335 2.49967 4.8335 3.83301V5.16634Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.6668 10.5V13.1667C10.6668 14.5 10.0002 15.1667 8.66683 15.1667H7.3335C6.00016 15.1667 5.3335 14.5 5.3335 13.1667V10.5H10.6668Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 7.16699V10.5003C14 11.8337 13.3333 12.5003 12 12.5003H10.6667V10.5003H5.33333V12.5003H4C2.66667 12.5003 2 11.8337 2 10.5003V7.16699C2 5.83366 2.66667 5.16699 4 5.16699H12C13.3333 5.16699 14 5.83366 14 7.16699Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.3332 10.5H10.5265H4.6665" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4.6665 7.83301H6.6665" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className={style.view_block_actions_option}
          style={{width: "120px"}}
          onClick={() => setViewOpen("change")}
          >
            <svg className={style.view_block_actions_option_edit} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.34006 2.89982L3.86673 8.69315C3.66006 8.91315 3.46006 9.34649 3.42006 9.64649L3.1734 11.8065C3.08673 12.5865 3.64673 13.1198 4.42006 12.9865L6.56673 12.6198C6.86673 12.5665 7.28673 12.3465 7.4934 12.1198L12.9667 6.32649C13.9134 5.32649 14.3401 4.18649 12.8667 2.79315C11.4001 1.41315 10.2867 1.89982 9.34006 2.89982Z" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.42676 3.86621C8.71342 5.70621 10.2068 7.11288 12.0601 7.29954" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.5 15.167H14.5" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t("Edit")}</span>
            </div>

          <div className={style.view_block_actions_option}
          onClick={() => setViewOpen("delete")}
          style={{width: "100px"}}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.5 4.48665C12.28 4.26665 10.0467 4.15332 7.82 4.15332C6.5 4.15332 5.18 4.21999 3.86 4.35332L2.5 4.48665" stroke="#AA3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.1665 3.81301L6.31317 2.93967C6.41984 2.30634 6.49984 1.83301 7.6265 1.83301H9.37317C10.4998 1.83301 10.5865 2.33301 10.6865 2.94634L10.8332 3.81301" stroke="#AA3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.0664 6.59375L12.6331 13.3071C12.5598 14.3537 12.4998 15.1671 10.6398 15.1671H6.35977C4.49977 15.1671 4.43977 14.3537 4.36644 13.3071L3.93311 6.59375" stroke="#AA3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.38672 11.5H9.60672" stroke="#AA3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.8335 8.83301H10.1668" stroke="#AA3D5A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{t("Delete")}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductItemView;
