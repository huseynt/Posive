import { useTranslation } from "react-i18next";
import { IGetMeals } from "../../../redux/type";
import style from "./aboutMeal.module.scss";

interface IQRCodeComponentProps {
  setAboutMeal: React.Dispatch<React.SetStateAction<boolean>>;
  name: string | null | undefined;
  price: number;
  description: string;
  imageUrl: string;
  thisMeal: IGetMeals | undefined;
}

const AboutMeal: React.FC<IQRCodeComponentProps> = (props) => {
  const { setAboutMeal, name, price, description, imageUrl, thisMeal } = props;
  const { t } = useTranslation();


  return (
    <div className={style.meal}>
      <div className={style.meal_bg} onClick={() => setAboutMeal(false)}></div>

      <div className={style.meal_block}>

        <h3 className={style.meal_block_head}>{name}</h3>

        <div className={style.meal_block_photo}>
        <div className={style.meal_block_photo_id}>{t("Receipt ID :")} {thisMeal?.receiptNo}</div>
          <div className={style.meal_block_photo_discount}>{thisMeal?.discount}% {t("Discount")}</div>
          <div className={style.meal_block_photo_stock}>{t("Stock :")} {thisMeal?.stock}</div>

          <img
            className={style.meal_block_img}
            src={imageUrl}
            alt={description}
          />
        </div>

        <p className={style.meal_block_desc}>{description}</p>
        <div className={style.meal_block_down}>
          <p className={style.meal_block_down_price}>{t("Price :")} ${price.toFixed(2)}</p>
          <button className={style.meal_block_down_btn}
          onClick={() => setAboutMeal(false)}
          >
            {t("Back to Shopping")}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default AboutMeal;
