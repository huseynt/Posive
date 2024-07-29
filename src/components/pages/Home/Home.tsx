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



// export type AppContextArrayType = [
//   (value: boolean) => void,  // setToggleMenu
//   (bag: any[]) => void,      // setBag
//   (message: string) => void, // setNotification
//   (path: string) => void,    // setNavigation
//   string,                    // navigation
//   (purpose: string) => void, // setNotifyPurpose
//   (notify: boolean) => void, // setNotify
//   () => void                 // requestNotify
// ];





const Home = () => {

  const [bag, setBag] = useState<boolean>(false);
  const [qrOpen, setQrOpen] = useState<boolean>(false);
  const [table, setTable] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [successOrder, setSuccessOrder] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [notify, setNotify] = useState<boolean>(false);
  const [navigation, setNavigation] = useState<string>((window.location.pathname).split("/home")[1]);

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
    console.log((window.location.pathname).split("/home")[1]);
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

      {/* {navigation==="pos" && (
        <Pos
          bag={bag}
          setBag={setBag}
          setToggleMenu={setToggleMenu}
          setNotification={setNotification}
          notification={notification}
        />
      )} */}
      {/* {navigation==="overview" && <Overview setToggleMenu={setToggleMenu}/>}
      {navigation==="product" && <Product />}
      {navigation==="settings" && <Settings />}
      {navigation==="help" && <HelpCenter />} */}


      {/* <Routes>

              <Route path='/help' element={<HelpCenter />} />
      </Routes> */}

      <Outlet context={
        {
          setToggleMenu: setToggleMenu,
          bag: bag,
          notification: notification,
          setBag: setBag,
          setNotification: setNotification
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
      {qrOpen && <QRCode setQrOpen={setQrOpen} />}
      {table && <Table setTable={setTable} />}
      {successOrder && <SuccessOrder setSuccessOrder={setSuccessOrder} />}
      <Notification setNotification={setNotification} notification={notification} bag={bag} />
      {/* {aboutmeal && <AboutMeal setAboutMeal={setAboutMeal} />} */}
      <Notify notify={notify} purpose={notifyPurpose} />
    </div>
  );
};

export default Home;
