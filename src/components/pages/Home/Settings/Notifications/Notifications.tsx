import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createGetNotifications, createSaveNotifications } from '../../../../../utils/API/API';
import style from './notifications.module.scss'
import { useEffect, useState } from 'react'
import { IGetNotifications } from '../../../../../utils/API/types';
import { useTranslation } from 'react-i18next';
import PageLoader from '../../../../common/PageLoader/PageLoader';
import Loader from '../../../../common/Loader/Loader';

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  requestNotify: (purpose: string) => void;
}

const Notifications: React.FC<IGeneral> = (props) => {
  const { setMobileSelect, requestNotify } = props
  const { t } = useTranslation();
  
  // ----------------- get data --------------------------
  const {
    data: getNotifications,
    isPending: isNotificationsLoading,
  } = useQuery<IGetNotifications | undefined>({
    queryKey: ["getNotification"],
    queryFn: createGetNotifications,
  });
  useEffect(() => {
    if (!isNotificationsLoading && getNotifications) {
      setData({
        news: getNotifications?.emailNotDTO.nots.includes("NEWS") ? true : false,
        tips: getNotifications?.emailNotDTO.nots.includes("TIPS") ? true : false,
        offer: getNotifications?.emailNotDTO.nots.includes("OFFER") ? true : false,
        allReminder: getNotifications?.moreActivityDTO.activity.includes("ALLREMINDERS") ? true : false,
        activity: getNotifications?.moreActivityDTO.activity.includes("ACTIVITY") ? true : false,
        important: getNotifications?.moreActivityDTO.activity.includes("IMPORTANT") ? true : false,
      });
      setEmailNotifications(
        getNotifications?.emailNotDTO.nots ? getNotifications?.emailNotDTO.nots.length > 0 ? true : false : false
      )
      setMoreActivity(
        getNotifications?.moreActivityDTO.activity ? getNotifications?.moreActivityDTO.activity.length > 0 ? true : false : false
      )
    }
  }, [isNotificationsLoading, getNotifications]);
  //------------------ get data ---------------------------

  const [data, setData] = useState({
    news: getNotifications?.emailNotDTO.nots.includes("NEWS") ? true : false,
    tips: getNotifications?.emailNotDTO.nots.includes("TIPS") ? true : false,
    offer: getNotifications?.emailNotDTO.nots.includes("OFFER") ? true : false,
    allReminder: getNotifications?.moreActivityDTO.activity.includes("ALLREMINDERS") ? true : false,
    activity: getNotifications?.moreActivityDTO.activity.includes("ACTIVITY") ? true : false,
    important: getNotifications?.moreActivityDTO.activity.includes("IMPORTANT") ? true : false,
  });
  const [ emailNotifications, setEmailNotifications ] = useState(
    getNotifications?.emailNotDTO.nots ? getNotifications?.emailNotDTO.nots.length > 0 ? true : false : false)
  const [ moreActivity, setMoreActivity ] = useState(
    getNotifications?.moreActivityDTO.activity ? getNotifications?.moreActivityDTO.activity.length > 0 ? true : false : false)


  // ------------------- save user ------------------------
  const queryClient = useQueryClient()
  const {
    mutate: SaveNotifications,
    isPending: isSavePending,
  } = useMutation({
    mutationFn: createSaveNotifications,
    onSuccess: (data) => {
      if (data == 200) {
        queryClient.invalidateQueries({queryKey: ["getNotification"]})
      }
    },
    onError: (error) => {
      console.log('Login error:', error);
    },
  });
  // ------------------- save user ------------------------




  useEffect(() => {
    if(!emailNotifications) {
      setData({
        ...data,
        news: false,
        tips: false,
        offer: false
      });
    }
  }, [emailNotifications])

  useEffect(() => {
    if(!moreActivity) {
      setData({
        ...data,
        allReminder: false,
        activity: false,
        important: false,
      });
    }
  }, [moreActivity])

  const resetData = () => {
    setData({
      news: getNotifications?.emailNotDTO.nots.includes("NEWS") ? true : false,
      tips: getNotifications?.emailNotDTO.nots.includes("TIPS") ? true : false,
      offer: getNotifications?.emailNotDTO.nots.includes("OFFER") ? true : false,
      allReminder: getNotifications?.moreActivityDTO.activity.includes("ALLREMINDERS") ? true : false,
      activity: getNotifications?.moreActivityDTO.activity.includes("ACTIVITY") ? true : false,
      important: getNotifications?.moreActivityDTO.activity.includes("IMPORTANT") ? true : false,
    });
  }

  const sendData = () => {
    requestNotify("done")
    const params = {
      nlist: `${data.news ? "NEWS" : ""}${data.tips ? ",TIPS" : ""}${data.offer ? ",OFFER" : ""}`.replace(/^,|,$/g, ""),
      mlist: `${data.allReminder ? "ALLREMINDERS" : ""}${data.activity ? ",ACTIVITY" : ""}${data.important ? ",IMPORTANT" : ""}`.replace(/^,|,$/g, ""),
    }
    SaveNotifications(params)
  }

  useEffect(() => {
    if(!data.news && !data.tips && !data.offer) {
      setEmailNotifications(false)
    }
    if(!data.allReminder && !data.activity && !data.important) {
      setMoreActivity(false)
    }
  }, [data])

  return (
    <>

    {isNotificationsLoading && <PageLoader /> }
  
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>

    {/* ----------------- save buttons ------------------------------ */}
    <div className={style.parent_buttons}>
      <button className={style.parent_buttons_cancel}
      onClick={resetData}
      >{t("cancel")}</button>
      <button className={style.parent_buttons_save}
      onClick={sendData}
      >{ isSavePending ?
          <Loader/>
          :
          t("save")
      }</button>
    </div>
    {/* ----------------- save buttons ------------------------------ */}


      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>{t("Notifications")}</h2>
      <h5 className={style.parent_up_info}>{t("Update your business persona")}</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>

      <div className={style.parent_main_block}>

        <div className={style.parent_main_block_header}>
          <h3 className={style.parent_main_block_header_head}>{t("Email Notifications")}</h3>
          <p className={style.parent_main_block_header_desc}>{t("Substance can send you email notifications for any new direct messages")}</p>
        </div>

        <div className={style.parent_main_block_actions}>
          <div className={style.parent_main_block_actions_turn}>
            <div className={style.parent_main_block_actions_turn_icon}
            onClick={() => setEmailNotifications(!emailNotifications)}
            >
              <div className={style.parent_main_block_actions_turn_icon_ball}
              style={{left: emailNotifications ? "19px" : "0px"}}
              ></div>
            </div>
            <span className={style.parent_main_block_actions_turn_span}>
              {emailNotifications ? t("On") : t("Off")}
            </span>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: emailNotifications ? "1" : "0.5"}}
          onClick={() => emailNotifications && setData({...data, news: !data.news})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.news ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("News and Update Settings")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("The latest news about the latest features and software update settings")}</p>
            </div>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: emailNotifications ? "1" : "0.5"}}
          onClick={() => emailNotifications && setData({...data, tips: !data.tips})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.tips ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("Tips and Tutorials")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("Tips and tricks in order to increase your performance efficiency")}</p>
            </div>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: emailNotifications ? "1" : "0.5"}}
          onClick={() => emailNotifications && setData({...data, offer: !data.offer})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.offer ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("Offer and Promotions")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("Promotions about software package prices and about the latest discounts")}</p>
            </div>
          </div>

        </div>
      </div>


      <div className={style.parent_line}></div>



      <div className={style.parent_main_block}>

        <div className={style.parent_main_block_header}>
          <h3 className={style.parent_main_block_header_head}>{t("More Activity")}</h3>
          <p className={style.parent_main_block_header_desc}>{t("More option about email notifcations for any new direct messages")}</p>
        </div>

        <div className={style.parent_main_block_actions}>
          <div className={style.parent_main_block_actions_turn}>
            <div className={style.parent_main_block_actions_turn_icon}
            onClick={() => setMoreActivity(!moreActivity)}
            >
              <div className={style.parent_main_block_actions_turn_icon_ball}
              style={{left: moreActivity ? "19px" : "0px"}}
              ></div>
            </div>
            <span className={style.parent_main_block_actions_turn_span}>
              {moreActivity ? t("On") : t("Off")}
            </span>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: moreActivity ? "1" : "0.5"}}
          onClick={() => moreActivity && setData({...data, allReminder: !data.allReminder})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.allReminder ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("All Reminders & Activity")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("Notify me all system activities and reminders that have been created")}</p>
            </div>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: moreActivity ? "1" : "0.5"}}
          onClick={() => moreActivity && setData({...data, activity: !data.activity})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.activity ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("Activity only")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("Only notify me we have the latest activity updates about increasing or decreasing data")}</p>
            </div>
          </div>

          <div className={style.parent_main_block_actions_option}
          style={{opacity: moreActivity ? "1" : "0.5"}}
          onClick={() => moreActivity && setData({...data, important: !data.important})}
          >
            <div className={style.parent_main_block_actions_option_select}>
              <svg className={style.parent_main_block_actions_option_select_icon} viewBox="2 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{display: data.important ? "" : "none"}}
              >
                <path d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z" fill="#4D81E7"/>
              </svg>
            </div>

            <div className={style.parent_main_block_actions_option_info}>
              <h3 className={style.parent_main_block_actions_option_info_head}>{t("Important Reminder only")}</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>{t("Only notify me all the reminders that have been made")}</p>
            </div>
          </div>

        </div>
      </div>

      


  



    </div>


  </div>
  </>
  )
}

export default Notifications;
