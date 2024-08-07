import { useEffect } from "react";
import style from "./overview.module.scss";
import { useState } from "react";
import SearchInput from "../../features/SearchInput/SearchInput";
import { meals } from "../../../test/db/cards";
import { IMeal } from "../../../utils/interface/Meal";
import { useOutletContext } from "react-router-dom";
import OverviewTableItem from "../../features/OverviewTableItem/OverviewTableItem";
import { orders } from "../../../test/db/transactions";
import { Helmet } from "react-helmet";

interface IOverview {
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
}

interface IOrder {
  orderId: string;
  receiptNo: string;
  menu: string[];
  collectedBy: string;
  dateTime: string;
  paymentMethod: string;
  action: string;
  totalPrice: number;
}

const Overview = () => {
  const { setToggleMenu, setNotification, notification } =
    useOutletContext<IOverview>();
  const [date, setDate] = useState("");
  const [mobileSearch, setMobileSearch] = useState<boolean>(false);
  const [mealsFiltered, setMealsFiltered] = useState<IMeal[]>([]);
  const [periodDown, setPeriodDown] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>("All time");
  const [checked, setChecked] = useState<boolean>(false);
  const [multiCheck, setMultiCheck] = useState<number>(1);
  const [ordersFiltered, setOrdersFiltered] = useState<IOrder[]>([]);
  const [ordersSetting, setOrdersSetting] = useState<boolean>(false);
  const [ascend, setAscend] = useState<boolean>(false);

  useEffect(() => {
    if (checked == false) {
      setMultiCheck(0);
    } else {
      setMultiCheck(
        ordersFiltered.length-1
      );
    }
  }, [checked]);

  useEffect(() => { 
    setChecked(false);
    setMultiCheck(0);
  }, [ordersFiltered, period]);

  const ascendingOrderDate = () => {
    const sortedOrders = ordersFiltered.sort((a, b) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);
      return dateA.getTime() - dateB.getTime();
    });
    setOrdersFiltered([...sortedOrders]);
    setAscend(false);
  };

  const descendingOrderDate = () => {
    const sortedOrders = ordersFiltered.sort((a, b) => {
      const dateA = new Date(a.dateTime);
      const dateB = new Date(b.dateTime);
      return dateB.getTime() - dateA.getTime();
    });
    setOrdersFiltered([...sortedOrders]);
    setAscend(true);
  };

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(formattedDate);
    console.log(mealsFiltered);
  }, [mealsFiltered]);
``
  useEffect(() => {
    if (period!=="All time") {
    const filteredOrders = orders.filter((order) => {
      if (period === "This week") {
        const today = new Date();
        const date = new Date(order.dateTime);
        const startOfWeek = new Date(
          today.setDate(today.getDate() - today.getDay())
        );
        const endOfWeek = new Date(
          today.setDate(today.getDate() - today.getDay() + 6)
        );
        return date >= startOfWeek && date <= endOfWeek;
      } else if (period === "This month") {
        const today = new Date();
        const date = new Date(order.dateTime);
        return (
          date.getMonth() === today.getMonth() &&
          date.getFullYear() === today.getFullYear()
        );
      } else if (period === "This year") {
        const today = new Date();
        const date = new Date(order.dateTime);
        return date.getFullYear() === today.getFullYear();
      } else {
        return order;
      }
    });
    setOrdersFiltered(filteredOrders);
    setOrdersSetting(false)
    console.log(period);
    } else {
      const sortedOrders = orders.sort((a, b) => {
        const dateA = new Date(a.dateTime);
        const dateB = new Date(b.dateTime);
        return dateB.getTime() - dateA.getTime();
      });
      setOrdersFiltered([...sortedOrders]);
      setAscend(true)
    }
  }, [period]);



  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Overview</title>
        <meta name="description" content="Overview" />
        <meta name="keywords" content="Posive" />
      </Helmet>

      <div className={style.main}>
        {/* ----------------------------- mobile up ---------------------------------- */}
        <div className={style.main_mobileUp}>
          <div className={style.main_mobileUp_actions}>
            <div
              className={style.main_mobileUp_actions_menu}
              onClick={() => setToggleMenu(true)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4.6665H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 8H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M2 11.3335H14"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className={style.main_mobileUp_actions_right}>
              <div
                className={style.main_mobileUp_actions_right_search}
                onClick={() => setMobileSearch(!mobileSearch)}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.66659 14.0002C11.1644 14.0002 13.9999 11.1646 13.9999 7.66683C13.9999 4.16903 11.1644 1.3335 7.66659 1.3335C4.16878 1.3335 1.33325 4.16903 1.33325 7.66683C1.33325 11.1646 4.16878 14.0002 7.66659 14.0002Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6666 14.6668L13.3333 13.3335"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className={style.main_mobileUp_actions_right_setting}
                onClick={() => setNotification(!notification)}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.01494 2.18262C6.53244 2.18262 4.51494 4.20012 4.51494 6.68262V8.85012C4.51494 9.30762 4.31994 10.0051 4.08744 10.3951L3.22494 11.8276C2.69244 12.7126 3.05994 13.6951 4.03494 14.0251C7.26744 15.1051 10.7549 15.1051 13.9874 14.0251C14.8949 13.7251 15.2924 12.6526 14.7974 11.8276L13.9349 10.3951C13.7099 10.0051 13.5149 9.30762 13.5149 8.85012V6.68262C13.5149 4.20762 11.4899 2.18262 9.01494 2.18262Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.4024 2.40008C10.1699 2.33258 9.92994 2.28008 9.68244 2.25008C8.96244 2.16008 8.27244 2.21258 7.62744 2.40008C7.84494 1.84508 8.38494 1.45508 9.01494 1.45508C9.64494 1.45508 10.1849 1.84508 10.4024 2.40008Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.2649 14.2949C11.2649 15.5324 10.2524 16.5449 9.01489 16.5449C8.39989 16.5449 7.82989 16.2899 7.42489 15.8849C7.01989 15.4799 6.76489 14.9099 6.76489 14.2949"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div
            className={style.main_mobileUp_down}
            style={{ display: mobileSearch ? "flex" : "none" }}
          >
            <SearchInput meals={meals} setMealsFiltered={setMealsFiltered} />
          </div>
        </div>

        {/* ------------------------------ up ----------------------------------------- */}
        <div className={style.main_up}>
          <div className={style.main_up_overview}>
            <h3 className={style.main_up_overview_head}>Overview</h3>
            <p className={style.main_up_overview_date}>{date ? date : "Jan 01,2024" }</p>
          </div>

          <div className={style.main_up_actions}>
            <div className={style.main_up_actions_export}>
              <p>Export</p>
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.71338 4.83362L8.42005 3.12695L10.1267 4.83362"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.42004 9.95285V3.17285"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.16663 8.5C3.16663 11.4467 5.16663 13.8333 8.49996 13.8333C11.8333 13.8333 13.8333 11.4467 13.8333 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className={style.main_up_actions_period}>
              <p
                className={style.main_up_actions_period_text}
                onClick={() => setPeriodDown(!periodDown)}
              >
                {period}
              </p>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setPeriodDown(!periodDown)}
              >
                <path
                  d="M13.28 6.4668L8.9333 10.8135C8.41997 11.3268 7.57997 11.3268 7.06664 10.8135L2.71997 6.4668"
                  stroke="#1A1C1E"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* <div
                className={style.main_up_actions_period_bg}
                onClick={() => setPeriodDown(false)}
                style={{ display: periodDown ? "block" : "none" }}
              ></div> */}

              <div
                className={style.main_up_actions_period_down}
                // style={{ display: periodDown ? "block" : "none" }}
              >
                <div
                  className={style.main_up_actions_period_down_option}
                  onClick={() => {
                    setPeriod("This week");
                    setPeriodDown(false);
                  }}
                >
                  This week
                </div>
                <div
                  className={style.main_up_actions_period_down_option}
                  onClick={() => {
                    setPeriod("This month");
                    setPeriodDown(false);
                  }}
                >
                  This month
                </div>
                <div
                  className={style.main_up_actions_period_down_option}
                  onClick={() => {
                    setPeriod("This year");
                    setPeriodDown(false);
                  }}
                >
                  This year
                </div>
                <div
                  className={style.main_up_actions_period_down_option}
                  onClick={() => {
                    setPeriod("All time");
                    setPeriodDown(false);
                  }}
                >
                  All time
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------- total review -------------------------------- */}
        <div className={style.main_total}
        onClick={() => setPeriodDown(false)}
        >
          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.5s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Total Sales</p>
              <h3 className={style.main_total_option_text_head}>
                ${ordersFiltered ? 
                 Number(ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3)) > 10000 ?
                  Math.floor(Number(ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3))/1000) + "K": 
                  ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3)
                : "0"}
              </h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#FDEFD9" }}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.17 7.13953C18.74 4.96953 17.13 4.01953 14.89 4.01953H6.10999C3.46999 4.01953 1.70999 5.33953 1.70999 8.41953V13.5695C1.70999 15.7895 2.61999 17.0895 4.11999 17.6495C4.33999 17.7295 4.57999 17.7995 4.82999 17.8395C5.22999 17.9295 5.65999 17.9695 6.10999 17.9695H14.9C17.54 17.9695 19.3 16.6495 19.3 13.5695V8.41953C19.3 7.94953 19.26 7.52953 19.17 7.13953ZM5.52999 12.4995C5.52999 12.9095 5.18999 13.2495 4.77999 13.2495C4.36999 13.2495 4.02999 12.9095 4.02999 12.4995V9.49953C4.02999 9.08953 4.36999 8.74953 4.77999 8.74953C5.18999 8.74953 5.52999 9.08953 5.52999 9.49953V12.4995ZM10.5 13.6395C9.03999 13.6395 7.85999 12.4595 7.85999 10.9995C7.85999 9.53953 9.03999 8.35953 10.5 8.35953C11.96 8.35953 13.14 9.53953 13.14 10.9995C13.14 12.4595 11.96 13.6395 10.5 13.6395ZM16.96 12.4995C16.96 12.9095 16.62 13.2495 16.21 13.2495C15.8 13.2495 15.46 12.9095 15.46 12.4995V9.49953C15.46 9.08953 15.8 8.74953 16.21 8.74953C16.62 8.74953 16.96 9.08953 16.96 9.49953V12.4995Z"
                  fill="#EA7E41"
                />
                <path
                  d="M22.3 11.4203V16.5703C22.3 19.6503 20.54 20.9803 17.89 20.9803H9.11001C8.36001 20.9803 7.69001 20.8703 7.11001 20.6503C6.64001 20.4803 6.23001 20.2303 5.90001 19.9103C5.72001 19.7403 5.86001 19.4703 6.11001 19.4703H14.89C18.59 19.4703 20.79 17.2703 20.79 13.5803V8.42028C20.79 8.18028 21.06 8.03028 21.23 8.21028C21.91 8.93028 22.3 9.98028 22.3 11.4203Z"
                  fill="#EA7E41"
                />
              </svg>
            </div>
          </div>

          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.55s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Total Customers</p>
              <h3 className={style.main_total_option_text_head}>{ordersFiltered ? ordersFiltered.length: "0"}</h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#DBECFD" }}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.53 8.27C17.46 8.26 17.39 8.26 17.32 8.27C15.77 8.22 14.54 6.95 14.54 5.39C14.54 3.8 15.83 2.5 17.43 2.5C19.02 2.5 20.32 3.79 20.32 5.39C20.31 6.95 19.08 8.22 17.53 8.27Z"
                  fill="#4D81E7"
                />
                <path
                  d="M20.79 15.2004C19.67 15.9504 18.1 16.2304 16.65 16.0404C17.03 15.2204 17.23 14.3104 17.24 13.3504C17.24 12.3504 17.02 11.4004 16.6 10.5704C18.08 10.3704 19.65 10.6504 20.78 11.4004C22.36 12.4404 22.36 14.1504 20.79 15.2004Z"
                  fill="#4D81E7"
                />
                <path
                  d="M6.43997 8.27C6.50997 8.26 6.57997 8.26 6.64997 8.27C8.19997 8.22 9.42997 6.95 9.42997 5.39C9.42997 3.79 8.13997 2.5 6.53997 2.5C4.94997 2.5 3.65997 3.79 3.65997 5.39C3.65997 6.95 4.88997 8.22 6.43997 8.27Z"
                  fill="#4D81E7"
                />
                <path
                  d="M6.55 13.3496C6.55 14.3196 6.75999 15.2396 7.14 16.0696C5.73 16.2196 4.26 15.9196 3.18 15.2096C1.6 14.1596 1.6 12.4496 3.18 11.3996C4.25 10.6796 5.75999 10.3896 7.18 10.5496C6.77 11.3896 6.55 12.3396 6.55 13.3496Z"
                  fill="#4D81E7"
                />
                <path
                  d="M12.12 16.37C12.04 16.36 11.95 16.36 11.86 16.37C10.02 16.31 8.54999 14.8 8.54999 12.94C8.55999 11.04 10.09 9.5 12 9.5C13.9 9.5 15.44 11.04 15.44 12.94C15.43 14.8 13.97 16.31 12.12 16.37Z"
                  fill="#4D81E7"
                />
                <path
                  d="M8.86999 18.4396C7.35999 19.4496 7.35999 21.1096 8.86999 22.1096C10.59 23.2596 13.41 23.2596 15.13 22.1096C16.64 21.0996 16.64 19.4396 15.13 18.4396C13.42 17.2896 10.6 17.2896 8.86999 18.4396Z"
                  fill="#4D81E7"
                />
              </svg>
            </div>
          </div>

          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.6s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Total Order</p>
              <h3 className={style.main_total_option_text_head}>{ordersFiltered ? ordersFiltered.length: "0"}</h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#FCE4DF" }}
            >
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.75 11.0621H21.8999C21.6958 8.84287 20.6698 6.77995 19.0234 5.27797C17.3769 3.776 15.2286 2.94336 13 2.94336C10.7714 2.94336 8.62313 3.776 6.97664 5.27797C5.33016 6.77995 4.30423 8.84287 4.10008 11.0621H3.25C3.03451 11.0621 2.82785 11.1477 2.67548 11.3001C2.5231 11.4525 2.4375 11.6592 2.4375 11.8746C2.44107 13.8069 2.97283 15.7014 3.97527 17.3533C4.97771 19.0051 6.41268 20.3515 8.125 21.2468V21.6246C8.125 22.0556 8.29621 22.4689 8.60095 22.7737C8.9057 23.0784 9.31902 23.2496 9.75 23.2496H16.25C16.681 23.2496 17.0943 23.0784 17.399 22.7737C17.7038 22.4689 17.875 22.0556 17.875 21.6246V21.2468C19.5873 20.3515 21.0223 19.0051 22.0247 17.3533C23.0272 15.7014 23.5589 13.8069 23.5625 11.8746C23.5625 11.6592 23.4769 11.4525 23.3245 11.3001C23.1722 11.1477 22.9655 11.0621 22.75 11.0621ZM17.6191 6.2105C17.8053 6.36285 17.9837 6.52365 18.1543 6.69292C15.9914 7.45378 14.204 9.01749 13.1625 11.0601H10.1664C10.6742 9.63664 11.6091 8.40466 12.8434 7.53249C14.0777 6.66031 15.5512 6.19046 17.0625 6.18714C17.2484 6.18714 17.4342 6.19628 17.6191 6.2105ZM15.0434 11.0621C16.0285 9.58429 17.5188 8.51649 19.2349 8.05894C19.796 8.97163 20.1481 9.99725 20.2658 11.0621H15.0434ZM13 4.56214C13.652 4.56257 14.301 4.65036 14.9297 4.82316C13.3986 5.20297 11.9946 5.97969 10.8593 7.07502C9.72407 8.17036 8.89759 9.5456 8.4632 11.0621H5.73422C5.93576 9.27552 6.78775 7.62554 8.12775 6.42677C9.46775 5.228 11.202 4.56428 13 4.56214Z"
                  fill="#C65468"
                />
              </svg>
            </div>
          </div>

          <div
            className={style.main_total_option}
            style={{ animationDuration: "0.65s" }}
          >
            <div className={style.main_total_option_text}>
              <p className={style.main_total_option_text_up}>Total Tip</p>
              <h3 className={style.main_total_option_text_head}>
                ${ordersFiltered ? 
                 Number(ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3)) > 10000 ?
                  Math.floor(Number(ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3))/1000) + "K": 
                  ordersFiltered.reduce((acc, order) => acc + order.totalPrice, 0).toFixed(3)
                : "0"}
              </h3>
            </div>

            <div
              className={style.main_total_option_icon}
              style={{ backgroundColor: "#CEFBE7" }}
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 4.5H7C4 4.5 2 6 2 9.5V13.06C2 13.43 2.38 13.66 2.71 13.51C3.69 13.06 4.82 12.89 6.01 13.1C8.64 13.57 10.57 16.01 10.5 18.68C10.49 19.1 10.43 19.51 10.32 19.91C10.24 20.22 10.49 20.51 10.81 20.51H17C20 20.51 22 19.01 22 15.51V9.5C22 6 20 4.5 17 4.5ZM12 15C10.62 15 9.5 13.88 9.5 12.5C9.5 11.12 10.62 10 12 10C13.38 10 14.5 11.12 14.5 12.5C14.5 13.88 13.38 15 12 15ZM19.25 14.5C19.25 14.91 18.91 15.25 18.5 15.25C18.09 15.25 17.75 14.91 17.75 14.5V10.5C17.75 10.09 18.09 9.75 18.5 9.75C18.91 9.75 19.25 10.09 19.25 10.5V14.5Z"
                  fill="#12B3A8"
                />
                <path
                  d="M5 14.5C2.79 14.5 1 16.29 1 18.5C1 19.25 1.21 19.96 1.58 20.56C2.27 21.72 3.54 22.5 5 22.5C6.46 22.5 7.73 21.72 8.42 20.56C8.79 19.96 9 19.25 9 18.5C9 16.29 7.21 14.5 5 14.5ZM6.97 18.17L4.84 20.14C4.7 20.27 4.51 20.34 4.33 20.34C4.14 20.34 3.95 20.27 3.8 20.12L2.81 19.13C2.52 18.84 2.52 18.36 2.81 18.07C3.1 17.78 3.58 17.78 3.87 18.07L4.35 18.55L5.95 17.07C6.25 16.79 6.73 16.81 7.01 17.11C7.29 17.41 7.27 17.89 6.97 18.17Z"
                  fill="#12B3A8"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* -------------------------- Transactions -------------------------------- */}
        <div className={style.main_down}
        onClick={() => setPeriodDown(false)}
        >
          {/* -------------------------- Transactions up -------------------------------- */}
          <div className={style.main_down_up}>
            <p className={style.main_down_up_head}>Recent Transaction</p>
            <div className={style.main_down_up_actions}>
              <div className={style.main_down_up_actions_search}>
                <SearchInput
                  meals={meals}
                  setMealsFiltered={setMealsFiltered}
                />
              </div>

              {/* --------------------- delete multiselect ----------------------------------- */}
              <div
                className={style.main_down_up_actions_delete}
                style={{
                  backgroundColor: "#C65468",
                  display: multiCheck > 0 ? "block" : "none",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023"
                    fill="white"
                  />
                  <path
                    d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.42495 4.57031L9.09995 9.60531C9.04495 10.3903 8.99995 11.0003 7.60495 11.0003H4.39495C2.99995 11.0003 2.95495 10.3903 2.89995 9.60531L2.57495 4.57031"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.16504 8.25H6.83004"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.75 6.25H7.25"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className={style.main_down_up_actions_delete_count}>
                  {multiCheck}
                </div>
              </div>

              <div className={style.main_down_up_actions_setting}
              title="Sorting Date"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => setOrdersSetting(!ordersSetting)}
                >
                  <path
                    d="M16.5 4.875H12"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 4.875H1.5"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.5 7.5C8.94975 7.5 10.125 6.32475 10.125 4.875C10.125 3.42525 8.94975 2.25 7.5 2.25C6.05025 2.25 4.875 3.42525 4.875 4.875C4.875 6.32475 6.05025 7.5 7.5 7.5Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5 13.125H13.5"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 13.125H1.5"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 15.75C11.9497 15.75 13.125 14.5747 13.125 13.125C13.125 11.6753 11.9497 10.5 10.5 10.5C9.05025 10.5 7.875 11.6753 7.875 13.125C7.875 14.5747 9.05025 15.75 10.5 15.75Z"
                    stroke="#1A1C1E"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className={style.main_down_up_actions_setting_down}
                // style={{display: ordersSetting ? "flex" : "none"}}
                >
                  <button className={style.main_down_up_actions_setting_down_btn}
                  onClick={() => ascendingOrderDate()}
                  style={{backgroundColor: !ascend ? "#fdefd9" : ""}}
                  title="Ascending Date"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#6c7278"
                    >
                      <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                    </svg>
                  </button>

                  <button className={style.main_down_up_actions_setting_down_btn}
                  onClick={() => descendingOrderDate()} 
                  style={{backgroundColor: ascend ? "#fdefd9" : ""}}
                  title="Descending Date"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#6c7278"
                        style={{rotate: "180deg"}}
                      >
                        <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
                      </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------- Transactions main -------------------------------- */}
          <div className={style.main_down_transactions}
          onClick={() => setOrdersSetting(false)}
          >
            <table className={style.main_down_transactions_table}>
              <thead className={style.main_down_transactions_table_head}>
                <tr className={style.main_down_transactions_table_head_th}>
                  <th style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      checked={checked}
                    />
                  </th>
                  <th>Order ID</th>
                  <th
                    className={
                      style.main_down_transactions_table_head_th_desktop
                    }
                  >
                    Receipt No
                  </th>
                  <th
                    className={
                      style.main_down_transactions_table_head_th_desktop
                    }
                  >
                    Menu
                  </th>
                  <th
                    className={
                      style.main_down_transactions_table_head_th_desktop
                    }
                  >
                    Collected/Cashier
                  </th>
                  <th className={style.main_down_transactions_table_head_th_mobileDate}>Date & Time</th>
                  <th
                    className={
                      style.main_down_transactions_table_head_th_desktop
                    }
                  >
                    Payment method
                  </th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody className={style.main_down_transactions_table_tbody}>
                {ordersFiltered.map((order, index) => (
                  <OverviewTableItem
                    key={index}
                    checked={checked}
                    {...order}
                    setMultiCheck={setMultiCheck}
                    multiCheck={multiCheck}
                    period={period}
                    ascend={ascend}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
