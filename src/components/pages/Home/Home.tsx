import style from "./home.module.scss";
import Sidebar from "../features/Sidebar/Sidebar";
// import Pos from "./Pos/Pos";
import Aside from "../features/Aside/Aside";
import { useEffect, useState } from "react";
import QRCode from "../features/QrCode/Qrcode";
import Table from "../features/Table/Table";
import SuccessOrder from "../features/SuccessOrder/SuccessOrder";
import Notify from "../features/Notify/Notify";
import Notification from "../features/Notification/Notification";
// import Overview from "./Overview/Overview";
// import Product from "./Product/Product";
// import Settings from "./Settings/Settings";
// import HelpCenter from "./HelpCenter/HelpCenter";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../utils/Hooks/useToken";
import { createGetUser } from "../../utils/API/API";
import { useQuery } from "@tanstack/react-query";
import { IgetUser } from "../../utils/API/types";
import { saveUser } from "../../utils/reUse/user";
import { setCookie } from "../../utils/reUse/cookie";
import { useTranslation } from "react-i18next";
// import { createRefreshToken } from "../../utils/API/refreshToken";
// import { createRefreshToken } from "../../utils/API/refreshToken";
// import { createRefreshToken } from "../../utils/API/refreshToken";

// {
//   "orderId": 915696049,
//   "receiptNumber": [
//       "125",
//       "134"
//   ],
//   "cashier": "Huseyn",
//   "menu": [
//       "Health Salad",
//       "Tsunami Beef Egg"
//   ],
//   "price": 25.1,
//   "place": "Take Away",
//   "orderDate": "2024-11-05",
//   "paymentMethod": "Master Card",
//   "tables": []
// }

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
    tables: []
  });
  const [notification, setNotification] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<string>("");
  const navigate = useNavigate()

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

  // ----------------- languages ---------------------
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setCookie("i18next", lng, 7);
  };
  // ----------------- languages ---------------------

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
    }, 1800);
    return () => {
      clearTimeout(timeout);
    };
  };
  //  ----------------------------- for notify ----------------------------

  // ------------------------------ refresh token ------------------------------
  //   const base = import.meta.env.VITE_BASE
  //   const createRefreshToken = async () => {
  //     const token = await getToken();
  //     const refreshToken = token?.refreshToken;
      
  //     const res = await fetch(`${base}/v1/auth/refresh`, {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': `Bearer ${refreshToken}`
  //         },
  //     });
  //     if (res.ok) {
  //         console.log('refresh token', res);
  //         const data = await res.json();
  //         deleteCookie('access_token');
  //         deleteCookie('refresh_token');
  //         sessionStorage.setItem('access_token', data.access_token);
  //         sessionStorage.setItem('refresh_token', data.refresh_token);
  //         console.log(data, "refresh token");
  //         // return "ok";
  //         sessionStorage.setItem('refreshDate', new Date().toISOString());
  //         return res.status;
  //     }
  //     return Promise.reject(res);
  // }
  // ------------------------------ refresh token ------------------------------


  // ----------------------------- get user ----------------------------
  const {
    data: userData,
  } = useQuery<IgetUser | undefined>({
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
      )
    } 
    // else if (userData == "400") {
    //   const resRefresh = await createRefreshToken();
    //   if (resRefresh === 200) {
    //     queryClient.invalidateQueries({queryKey: ["getUser"]});
    //     console.log("refreshed");
    //   }
    // }
    console.log(userData);
  };
  handleUserData();
}, [userData, setTheme]);

  
  // useEffect(() => {
  //   queryClient.invalidateQueries({queryKey: ["getUserSaveUser"]});
  // }, [refreshDate]);
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
      tables: []
    });
    setNotification(false);
    setNavigation((window.location.pathname).split("/home/")[1]);
  }, [navigation]);

  window.addEventListener("popstate", () => {
    setNavigation((window.location.pathname).split("/home/")[1]);
  }
  );
  

  if (token === null) {
    return <div style={{
      height: "100svh",
      display: "grid",
      placeItems: "center",
    }}>
      <h1>Redirecting to login...</h1>
    </div>;
  }

  return (
    <div className={style.home}>

      <Sidebar toggleMenu={toggleMenu} 
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

      <Outlet context={
        {
          setToggleMenu: setToggleMenu,
          bag: bag,
          notification: notification,
          setBag: setBag,
          setNotification: setNotification,
          requestNotify: requestNotify
        }
      }/>

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
      {successOrder.cashier && <SuccessOrder setSuccessOrder={setSuccessOrder} successOrder={successOrder}/>}
      <Notification setNotification={setNotification} notification={notification} bag={bag} />
      {/* {aboutmeal && <AboutMeal setAboutMeal={setAboutMeal} />} */}
      <Notify notify={notify} purpose={notifyPurpose} describtion={description}/>
    </div>
  );
};

export default Home;
