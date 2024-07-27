import style from "./home.module.scss";
import Sidebar from "../features/Sidebar/Sidebar";
import Pos from "./Pos/Pos";
import Aside from "../features/Aside/Aside";
import { useEffect, useState } from "react";
import QRCode from "../features/QrCode/Qrcode";
import Table from "../features/Table/Table";
import SuccessOrder from "../features/SuccessOrder/SuccessOrder";
import Notify from "../features/Notify/Notify";
import Notification from "../features/Notification/Notification";
import Overview from "./Overview/Overview";
import Product from "./Product/Product";
import Settings from "./Settings/Settings";
import HelpCenter from "./HelpCenter/HelpCenter";
// import AboutMeal from "../features/AboutMeal/AboutMeal";

const Home = () => {
  const [bag, setBag] = useState<boolean>(false);
  const [qrOpen, setQrOpen] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [successOrder, setSuccessOrder] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  // const [aboutmeal, setAboutMeal] = useState<boolean>(true);
  const [navigation, setNavigation] = useState<string>("pos");

  const [notifyPurpose, setNotifyPurpose] = useState<string>("");
  const requestNotify = (purpose: string) => {
    setNotifyPurpose(purpose);
    setNotify(true);
    const timeout = setTimeout(() => {
      setNotify(false);
    }, 1800);
    return () => {
      clearTimeout(timeout);
    };
  };

  useEffect(() => {
    setBag(false);
    setQrOpen(false);
    setTable(false);
    setSuccessOrder(false);
    setNotification(false);
  }, [navigation]);

  return (
    <div className={style.home}>
      <Sidebar toggleMenu={toggleMenu} 
      setToggleMenu={setToggleMenu} 
      setNavigation={setNavigation}
      navigation={navigation}
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

      {navigation==="pos" && (
        <Pos
          bag={bag}
          setBag={setBag}
          setToggleMenu={setToggleMenu}
          setNotification={setNotification}
          notification={notification}
        />
      )}

      {navigation==="overview" && <Overview setToggleMenu={setToggleMenu}/>}
      {navigation==="product" && <Product />}
      {navigation==="settings" && <Settings />}
      {navigation==="help" && <HelpCenter />}


      <Aside
        bag={bag}
        setQrOpen={setQrOpen}
        setTable={setTable}
        setBag={setBag}
        setSuccessOrder={setSuccessOrder}
        requestNotify={requestNotify}
      />
      {qrOpen && <QRCode setQrOpen={setQrOpen} />}
      {table && <Table setTable={setTable} />}
      {successOrder && <SuccessOrder setSuccessOrder={setSuccessOrder} />}
      {notification && <Notification setNotification={setNotification} bag={bag} />}
      {/* {aboutmeal && <AboutMeal setAboutMeal={setAboutMeal} />} */}
      <Notify notify={notify} purpose={notifyPurpose} />
    </div>
  );
};

export default Home;
