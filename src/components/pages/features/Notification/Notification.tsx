import style from "./notification.module.scss";
import NotificationItem from "../NotificationItem/NotificationItem";
import { notifications } from "../../../test/db/notifications";

interface INotification {
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
  bag: boolean;
}

const Notification: React.FC<INotification> = (props) => {
  const { setNotification, notification, bag } = props;

  return (
    <div className={`${style.notification} ${ notification ? style.mobileIn : style.mobileOut}`}>
      <div className={style.notification_screen}>
        <div
          className={style.notification_screen_bg}
          onClick={() => setNotification(false)}
        ></div>

        <div
          className={style.notification_screen_block}
          style={{ right: bag ? "328px" : "0" }}
        >
          <div className={style.notification_screen_block_back}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setNotification(false)}
            >
              <path
                d="M9.57 6.6001L3.5 12.6701L9.57 18.7401"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 12.6699H3.67"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>


          <div className={style.notification_screen_block_list}>
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
