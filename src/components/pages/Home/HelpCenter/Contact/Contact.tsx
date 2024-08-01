import style from "./contact.module.scss";
// import SearcInput from "../../../features/SearchInput/SearchInput";

interface IContact {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const Contact: React.FC<IContact> = (props) => {
  const {setMobileSelect} = props;


  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}
    >
      <h2 className={style.parent_head}>Contact & FAQ</h2>

      <div className={style.parent_frame}>
        <div className={style.parent_frame_element}>
          <div className={style.parent_frame_element_icon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.28 24.6524V20.7591C7.28 19.4658 8.29334 18.3058 9.73334 18.3058C11.0267 18.3058 12.1867 19.3191 12.1867 20.7591V24.5058C12.1867 27.1058 10.0267 29.2658 7.42667 29.2658C4.82667 29.2658 2.66667 27.0924 2.66667 24.5058V16.2924C2.52 8.79909 8.44 2.73242 15.9333 2.73242C23.4267 2.73242 29.3333 8.79909 29.3333 16.1458V24.3591C29.3333 26.9591 27.1733 29.1191 24.5733 29.1191C21.9733 29.1191 19.8133 26.9591 19.8133 24.3591V20.6124C19.8133 19.3191 20.8267 18.1591 22.2667 18.1591C23.56 18.1591 24.72 19.1724 24.72 20.6124V24.6524"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={style.parent_frame_element_text}>
            Speak to our Customer service team
          </p>
        </div>

        <div className={style.parent_frame_element}>
          <div className={style.parent_frame_element_icon}>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 25.3327H11.0001C5.66673 25.3327 3.00006 23.9993 3.00006 17.3327V10.666C3.00006 5.33268 5.66673 2.66602 11.0001 2.66602H21.6667C27.0001 2.66602 29.6667 5.33268 29.6667 10.666V17.3327C29.6667 22.666 27.0001 25.3327 21.6667 25.3327H21.0001C20.5867 25.3327 20.1867 25.5327 19.9334 25.866L17.9334 28.5327C17.0534 29.706 15.6134 29.706 14.7334 28.5327L12.7334 25.866C12.5201 25.5727 12.0267 25.3327 11.6667 25.3327Z"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.662 14.6667H21.6739"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3274 14.6667H16.3393"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.9927 14.6667H11.0047"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={style.parent_frame_element_text}>
            Send messages and we’ll get back asap
          </p>
        </div>

        <div className={style.parent_frame_element}>
          <div className={style.parent_frame_element_icon}>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 13.3327V19.9993C30 26.666 27.3333 29.3327 20.6666 29.3327H12.6666C5.99998 29.3327 3.33331 26.666 3.33331 19.9993V11.9993C3.33331 5.33268 5.99998 2.66602 12.6666 2.66602H19.3333"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M30 13.3327H24.6666C20.6666 13.3327 19.3333 11.9993 19.3333 7.99935V2.66602L30 13.3327Z"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99994 17.334H17.9999"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.99994 22.666H15.3333"
                stroke="#1A1C1E"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={style.parent_frame_element_text}>
            Help support with Documentation
          </p>
        </div>
      </div>

      <div className={style.parent_line}></div>

      <div className={style.parent_main}>

        <div className={style.parent_main_up}>
          <div className={style.parent_main_up_head}>Frequently Asked Questions</div>

          <div className={style.parent_main_up_search}>
            {/* <SearcInput /> */}
          </div>
        </div>


        <details className={style.parent_main_details}>
          <summary className={style.parent_main_details_summary}>Can a new user integrate the POS Dashboard with other business systems ?</summary>
          <p className={style.parent_main_details_text}>
            Yes, many POS Dashboards offer integration capabilities with accounting software, inventory management systems, customer relationship management (CRM) tools, and other business applications. Integration can streamline operations and improve data accuracy.
          </p>
        </details>

        <details className={style.parent_main_details}>
          <summary className={style.parent_main_details_summary}>What features do event organizer websites typically offer ?</summary>
          <p className={style.parent_main_details_text}>
            Yes, many POS Dashboards offer integration capabilities with accounting software, inventory management systems, customer relationship management (CRM) tools, and other business applications. Integration can streamline operations and improve data accuracy.
          </p>
        </details>

        <details className={style.parent_main_details}>
          <summary className={style.parent_main_details_summary}>How does a POS Dashboard help in improving customer service for new users ?</summary>
          <p className={style.parent_main_details_text}>
            Yes, many POS Dashboards offer integration capabilities with accounting software, inventory management systems, customer relationship management (CRM) tools, and other business applications. Integration can streamline operations and improve data accuracy.
          </p>
        </details>

        <details className={style.parent_main_details}>
          <summary className={style.parent_main_details_summary}>What kind of support and training are available for new users of a POS Dashboard?</summary>
          <p className={style.parent_main_details_text}>
            Yes, many POS Dashboards offer integration capabilities with accounting software, inventory management systems, customer relationship management (CRM) tools, and other business applications. Integration can streamline operations and improve data accuracy.
          </p>
        </details>

        <details className={style.parent_main_details}>
          <summary className={style.parent_main_details_summary}>Why is a POS Dashboard beneficial for new users?</summary>
          <p className={style.parent_main_details_text}>
            Yes, many POS Dashboards offer integration capabilities with accounting software, inventory management systems, customer relationship management (CRM) tools, and other business applications. Integration can streamline operations and improve data accuracy.
          </p>
        </details>



      </div>
    </div>
  );
};

export default Contact;
