import style from "./notFound.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();


  return (
    <div className={style.not}>
      <p>{t("Page Not Found")}</p>
      <button onClick={() => navigate("/")}>{t("Home")}</button>
    </div>
  )
}

export default NotFound
