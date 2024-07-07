import style from "./triangle.module.scss";
import { Triangle } from "react-loader-spinner";

function TriangleLoader() {
  return (
    <div className={style.triangle}>
      <Triangle
        height="100px"
        width="100px"
        color="white"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass={style.triangle_triangleWrapper}
        visible={true}
      />
    </div>
  );
}

export default TriangleLoader;
