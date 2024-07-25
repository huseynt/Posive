import style from "./home.module.scss";
import Sidebar from "../features/Sidebar/Sidebar";
import Main from "./Main/Main";
import Aside from "./Aside/Aside";
import { useState } from "react";
import QRCode from "../features/QrCode/Qrcode";
import Table from "../features/Table/Table";
import SuccessOrder from "../features/SuccessOrder/SuccessOrder";
import Notify from "../features/Notify/Notify";
import Notification from "../features/Notification/Notification";

const Home = () => {
  const [bag, setBag] = useState<boolean>(false);
  const [qrOpen, setQrOpen] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [successOrder, setSuccessOrder] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
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
          display: toggleMenu ? "none" : "block",
        }}
        onClick={() => setToggleMenu(true)}
      ></div>
      {/* ----------------------------- for mobile bg ---------------------------- */}

      {navigation==="pos" && (
        <Main
          bag={bag}
          setBag={setBag}
          setToggleMenu={setToggleMenu}
          setNotification={setNotification}
          notification={notification}
        />
      )}

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
      {notification && (
        <Notification setNotification={setNotification} bag={bag} />
      )}
      <Notify notify={notify} purpose={notifyPurpose} />
    </div>
  );
};

export default Home;
