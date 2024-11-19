import style from "./home.module.scss";
import Sidebar from "../features/Sidebar/Sidebar";
import Aside from "../features/Aside/Aside";
import { useEffect, useState } from "react";
import QRCode from "../features/QrCode/Qrcode";
import Table from "../features/Table/Table";
import SuccessOrder from "../features/SuccessOrder/SuccessOrder";
import Notify from "../features/Notify/Notify";
import Notification from "../features/Notification/Notification";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../utils/Hooks/useToken";
import { createGetUser } from "../../utils/API/API";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { IgetUser } from "../../utils/API/types";
import { saveUser } from "../../utils/reUse/user";
import { setCookie } from "../../utils/reUse/cookie";
import { useTranslation } from "react-i18next";

interface ISuccessOrder {
  orderId: number;
  receiptNumber: string[];
  cashier: string;
  menu: string[];
  price: number;
  place: string;
  orderDate: string;
  paymentMethod: string;
  tables: string[];
}
interface IHome {
  setTheme: (theme: string) => void;
}

const Home: React.FC<IHome> = (props) => {
  const { setTheme } = props;
  const [bag, setBag] = useState<boolean>(false);
  const [qrOpen, setQrOpen] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [successOrder, setSuccessOrder] = useState<ISuccessOrder>({
    orderId: 0,
    receiptNumber: [],
    cashier: "",
    menu: [],
    price: 0,
    place: "",
    orderDate: "",
    paymentMethod: "",
    tables: [],
  });
  const [notification, setNotification] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<string>("");
  const navigate = useNavigate();

  // ----------------------------- for token ----------------------------
  const token = useToken();
  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 1700);
    }
  }, [token, navigate]);
  // ----------------------------- for token ----------------------------

  // ----------------- languages -----------------------------------------
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCookie("i18next", lng, 7);
  };
  // ----------------- languages ------------------------------------------

  //  ----------------------------- for notify ----------------------------
  const [notify, setNotify] = useState<boolean>(false);
  const [notifyPurpose, setNotifyPurpose] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const requestNotify = (purpose: string, description: string | undefined) => {
    setNotifyPurpose(purpose);
    setDescription(description ? description : "");
    setNotify(true);
    const timeout = setTimeout(() => {
      setNotify(false);
    }, 1300);
    return () => {
      clearTimeout(timeout);
    };
  };
  //  ----------------------------- for notify ----------------------------

  // ----------------------------- get user ----------------------------
  const queryClient = useQueryClient();
  const { data: userData } = useQuery<IgetUser | undefined>({
    queryKey: ["getUser"],
    queryFn: createGetUser,
  });

  useEffect(() => {
    const handleUserData = async () => {
      if (userData) {
        saveUser(userData);
        setTheme(userData.setting?.theme || "light");
        changeLanguage(
          userData.setting?.language === "Azərbaycan" ? "az" : "en"
        );
      }
    };
    handleUserData();
    queryClient.invalidateQueries({queryKey: ["getNotifications"]});
  }, [userData, setTheme]);
  // ----------------------------- get user ----------------------------

  useEffect(() => {
    setBag(false);
    setQrOpen(false);
    setTable(false);
    setSuccessOrder({
      orderId: 0,
      receiptNumber: [],
      cashier: "",
      menu: [],
      price: 0,
      place: "",
      orderDate: "",
      paymentMethod: "",
      tables: [],
    });
    setNotification(false);
    setNavigation(window.location.pathname.split("/home/")[1]);
  }, [navigation]);

  window.addEventListener("popstate", () => {
    setNavigation(window.location.pathname.split("/home/")[1]);
  });

  if (token === null) {
    return (
      <div
        style={{
          height: "100svh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1>Redirecting to login...</h1>
      </div>
    );
  }

  return (
    <div className={style.home}>
      <Sidebar
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        setNavigation={setNavigation}
        navigation={navigation}
        userData={userData}
      />

      {/* ----------------------------- for mobile bg ---------------------------- */}
      <div
        className={style.mobileBg}
        style={{
          display: toggleMenu ? "block" : "none",
        }}
        onClick={() => setToggleMenu(false)}
      ></div>
      {/* ----------------------------- for mobile bg ---------------------------- */}

      <Outlet
        context={{
          setToggleMenu: setToggleMenu,
          bag: bag,
          notification: notification,
          setBag: setBag,
          setNotification: setNotification,
          requestNotify: requestNotify,
        }}
      />

      <Aside
        bag={bag}
        setQrOpen={setQrOpen}
        setTable={setTable}
        setBag={setBag}
        setSuccessOrder={setSuccessOrder}
        requestNotify={requestNotify}
      />
      {qrOpen && <QRCode setQrOpen={setQrOpen} requestNotify={requestNotify} />}
      {table && <Table setTable={setTable} />}
      {successOrder.cashier && (
        <SuccessOrder
          setSuccessOrder={setSuccessOrder}
          successOrder={successOrder}
        />
      )}
      <Notification
        setNotification={setNotification}
        notification={notification}
        bag={bag}
      />
      {/* {aboutmeal && <AboutMeal setAboutMeal={setAboutMeal} />} */}
      <Notify
        notify={notify}
        purpose={notifyPurpose}
        describtion={description}
      />
    </div>
  );
};

export default Home;
