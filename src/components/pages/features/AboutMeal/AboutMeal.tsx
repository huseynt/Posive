import style from "./aboutMeal.module.scss";

interface IQRCodeComponentProps {
  setAboutMeal: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const AboutMeal: React.FC<IQRCodeComponentProps> = (props) => {
  const { setAboutMeal, name, price, description, imageUrl } = props;

  return (
    <div className={style.meal}>
      <div className={style.meal_bg} onClick={() => setAboutMeal(false)}></div>

      <div className={style.meal_block}>

        <h3 className={style.meal_block_head}>{name}</h3>
        <img
          className={style.meal_block_img}
          src={imageUrl}
          alt={description}
        />
        <p className={style.meal_block_desc}>{description}</p>
        <div className={style.meal_block_down}>
          <p className={style.meal_block_down_price}>Price: ${price.toFixed(2)}</p>
          <button className={style.meal_block_down_btn}
          onClick={() => setAboutMeal(false)}
          >Back to Shopping</button>
        </div>
        
      </div>
    </div>
  );
};

export default AboutMeal;
