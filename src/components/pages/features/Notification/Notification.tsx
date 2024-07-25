import style from "./notification.module.scss";
import NotificationItem from "../NotificationItem/NotificationItem";
import { notifications } from "../../../test/db/notifications";

interface INotification {
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  bag: boolean;
}

const Notification: React.FC<INotification> = (props) => {
  const { setNotification, bag } = props;

  return (
    <div className={style.notification}>
      <div className={style.notification_screen}>
        <div
          className={style.notification_screen_bg}
          onClick={() => setNotification(false)}
        ></div>

        <div
          className={style.notification_screen_block}
          style={{ right: bag ? "350px" : "0" }}
        >
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
