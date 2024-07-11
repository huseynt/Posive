import style from './meal.module.scss'
import { IMeal } from '../../../utils/interface/Meal'
import { useState } from 'react'

const Meal = (props: IMeal) => {
  const { id, name, price, description, imageUrl } = props;
  const [count, setCount] = useState(0);


  return (
      <div className={style.meal} id={`${id}`}>
        <div className={style.meal_photo}>
          <img src={imageUrl} alt={description} />
        </div>
        
        <div className={style.meal_information}>
          <h4>{name}</h4>
          <p>${price.toFixed(2)}</p>
        </div>

        <div className={style.meal_count}>
          <button onClick={() => setCount(count>0 ? count-1 : count)}>-</button>
          <p
          style={count !== 0 ? {color: "#EA7E41"} : {color: 'black'}}
          >{count}</p>
          <button onClick={() => setCount(count+1)}>+</button>
        </div>
      </div>
    )
}

export default Meal
