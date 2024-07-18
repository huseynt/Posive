import React, { useEffect } from "react";
import style from "./notify.module.scss";
import '../SuccessOrder/forprint.scss'

interface INotify {
  notify: boolean;
  purpose: string;
}
interface InotifyData {
  color: string;
  text: string;
  desc: string;
}

const Notify: React.FC<INotify> = (props) => {
  const { notify, purpose } = props;
  const [data, setData] = React.useState<InotifyData>({
    color: "",
    text: "",
    desc: "",
  });

  useEffect(() => {
    if (purpose === "done") {
      setData({
        color: "#12B3A8",
        text: "SUCCESS !",
        desc: "Your changes have been successfully saved.",
      });
    } else if (purpose === "important") {
      setData({
        color: "#b4ac3a",
        text: "IMPORTANT !",
        desc: "This change is important, please check it again.",
      });
    } else if (purpose === "undone") {
      setData({
        color: "#C65468",
        text: "ERROR !",
        desc: "There was an error saving your changes.",
      });
    }
  }, [purpose]);

  return (
    <div
      className={notify === true ? style.notify : style.notify_out}
      style={{ borderColor: data.color }}
      id="notify"
    >
      <div className={style.notify_icon}>
        {purpose === "done" && (
          <svg
            className={style.notify_icon_done}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              style={{ fill: "#12B3A8" }}
              d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"
            />
          </svg>
        )}

        {purpose === "important" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              style={{ fill: "#b4ac3a" }}
              d="M440-440h80v-200h-80v200Zm40 120q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"
            />
          </svg>
        )}

        {purpose === "undone" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path
              style={{ fill: "#C65468" }}
              d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"
            />
          </svg>
        )}
      </div>

      <div className={style.notify_text}>
        <p className={style.notify_text_head} style={{ color: data.color }}>
          {data.text}
        </p>
        <p className={style.notify_text_desc}>{data.desc}</p>
      </div>
    </div>
  );
};

export default Notify;
