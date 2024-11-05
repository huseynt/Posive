import style from './meal.module.scss'
import { useState } from 'react'

import AboutMeal from "../AboutMeal/AboutMeal";
// import { IMeal } from '../../../utils/interface/Meal';
import { useDispatch, useSelector } from 'react-redux';
import { ascendingOrder, desascendingOrder } from '../../../redux/slice/mealSlice';
import { IGetMeals } from '../../../redux/type';

export interface IMeal { 
  key?: string | undefined;
  id?: string | number | null | undefined;
  name: string | null | undefined;
  category: string | null | undefined;
  imageUrl: string | null | undefined;
  price: number;
  description: string,
  stock: number | null | undefined;
}




const Meal = (props: IMeal) => {
  const { id, name, price, description, imageUrl, stock } = props;
  const [aboutmeal, setAboutMeal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const thisMeal = useSelector((state: { orders: IGetMeals[] }) => state.orders.find((meal) => meal.id === id));




  return (
      <div className={style.meal} id={`${id}`}>
        <div className={style.meal_photo}>
          <div className={style.meal_photo_discount}>{thisMeal?.discount}%</div>
          <img src={imageUrl? imageUrl: ""} alt={description} />
        </div>
        
        <div className={style.meal_information}
        onClick={() => setAboutMeal(!aboutmeal)}
        >
          <h4>{name}</h4>
          <p>${price.toFixed(2)}</p>
        </div>

        <div className={style.meal_count}>
          <button onClick={() => dispatch(desascendingOrder(id))}>-</button>
          <p
          style={thisMeal?.order !== 0 ? {color: "#EA7E41"} : {color: ''}}
          >{thisMeal?.order}</p>
          <button onClick={() => 
            stock && thisMeal?.order !== stock ? dispatch(ascendingOrder(id)) : null}>+</button>
        </div>

        {aboutmeal && <AboutMeal 
        setAboutMeal={setAboutMeal} 
        name={name}
        price={price}
        description={description}
        imageUrl={imageUrl? imageUrl: ""}
        thisMeal={thisMeal}
        />}
        
      </div>
    )
}

export default Meal
