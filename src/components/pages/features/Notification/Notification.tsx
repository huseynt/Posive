import style from "./notification.module.scss";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { createNotifications } from "../../../utils/API/API";
import NotificationItem from "../NotificationItem/NotificationItem";



interface INotification {
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
  bag: boolean;
}

const Notification: React.FC<INotification> = ({ setNotification, notification, bag }) => {
  const queryClient = useQueryClient();
  const socket = import.meta.env.VITE_SOCKET;

  const fetchNotifications = async () => {
    try {
      const response = await createNotifications(); 
      return response; 
    } catch (error) {
      throw new Error("Bildirişlər yüklənmədi");
    }
  };

  // TanStack Query ilə bildirişlər
  const { data: notifications, isLoading: isLoadingNotifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
    refetchOnWindowFocus: false,
    staleTime: 20000,
  });

  
  useEffect(() => {
    const ws = new WebSocket(`${socket}/ws`);

    ws.onopen = () => {
      console.log("WebSocket açıldı!");
    };

    ws.onmessage = (event) => {
      const newNotification = JSON.parse(event.data);
      queryClient.setQueryData(["notifications"], (oldData: {text: string, description: string}[]) => [
              ...(oldData || []),
              newNotification,
            ]);
    };

    ws.onerror = (error) => {
      console.error("WebSocket xətası:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket əlaqəsi kəsildi");
    };

    return () => {
      ws.close(); 
    };
  }, [queryClient]);

  return (
    <div
      className={`${style.notification} ${
        notification ? style.mobileIn : style.mobileOut
      }`}
    >
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
            {isLoadingNotifications ? (
              <p>Bildirişlər yüklənir...</p>
            ) : (
              notifications?.map((notification: {text: string, description: string}, index: number) => (
                <NotificationItem key={index} id={index} name={notification.text} description={notification.description} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
