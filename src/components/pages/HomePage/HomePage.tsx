import style from "./homePage.module.scss";
import pos from "/public/pos.png";
import overview from "/public/overview.png";
import login from "/public/login.png";

const HomePage = () => {
  return (
    <div className={style.home}>
      <div className={style.home_bg}>
        <div className={style.home_bg_circle}></div>
      </div>


      <div className={style.home_head}>
        <h1>Get Started With Posive</h1>
        <h1>Organic & Food Store Admin Dashboard</h1>
        <div className={style.home_head_content}></div>
      </div>

      <div className={style.home_preview}>

        <div className={style.home_preview_overview}>
          <img src={overview} alt="preview" />
        </div>

        <div className={style.home_preview_pos}>
          <img src={pos} alt="preview" />
        </div>

        <div className={style.home_preview_login}>
          <img src={login} alt="preview" />
        </div>

      </div>



    </div>
  );
};

export default HomePage;
