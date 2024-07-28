import style from "./notFound.module.scss";
import { useNavigate } from "react-router-dom";

const NotFound = () => {

  const navigate = useNavigate();


  return (
    <div className={style.not}>
      <p>Page Not Found</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default NotFound
