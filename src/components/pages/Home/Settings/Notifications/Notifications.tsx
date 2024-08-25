import style from './notifications.module.scss'
import { useEffect, useState } from 'react'

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const Notifications: React.FC<IGeneral> = (props) => {
  const { setMobileSelect } = props
  const [ emailNotifications, setEmailNotifications ] = useState(false)
  const [ moreActivity, setMoreActivity ] = useState(false)

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

  const [data, setData] = useState({
    news: false,
    tips: false,
    offer: false,
    allReminder: false,
    activity: false,
    important: false,
  });

  const resetData = () => {
    setData({
      news: false,
      tips: false,
      offer: false,
      allReminder: false,
      activity: false,
      important: false,
    });
    setEmailNotifications(false)
    setMoreActivity(false)
  }

  const sendData = () => {
    console.log(data)
  }


  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>

    {/* ----------------- save buttons ------------------------------ */}
    <div className={style.parent_buttons}>
      <button className={style.parent_buttons_cancel}
      onClick={resetData}
      >Cancel</button>
      <button className={style.parent_buttons_save}
      onClick={sendData}
      >Save</button>
    </div>
    {/* ----------------- save buttons ------------------------------ */}


      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>Notifications</h2>
      <h5 className={style.parent_up_info}>Update your business persona</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>

      <div className={style.parent_main_block}>

        <div className={style.parent_main_block_header}>
          <h3 className={style.parent_main_block_header_head}>Email Notifications</h3>
          <p className={style.parent_main_block_header_desc}>Substance can send you email notifications for any new direct messages</p>
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
              {emailNotifications ? "On" : "Off"}
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
              <h3 className={style.parent_main_block_actions_option_info_head}>News and Update Settings</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>The latest news about the latest features and software update settings</p>
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
              <h3 className={style.parent_main_block_actions_option_info_head}>Tips and Tutorials</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>Tips and tricks in order to increase your performance efficiency</p>
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
              <h3 className={style.parent_main_block_actions_option_info_head}>Offer and Promotions</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>Promotions about software package prices and about the latest discounts</p>
            </div>
          </div>

        </div>
      </div>


      <div className={style.parent_line}></div>



      <div className={style.parent_main_block}>

        <div className={style.parent_main_block_header}>
          <h3 className={style.parent_main_block_header_head}>More Activity</h3>
          <p className={style.parent_main_block_header_desc}>More option about email notifcations for any new direct messages</p>
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
              {moreActivity ? "On" : "Off"}
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
              <h3 className={style.parent_main_block_actions_option_info_head}>All Reminders & Activity</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>Notify me all system activities and reminders that have been created</p>
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
              <h3 className={style.parent_main_block_actions_option_info_head}>Activity only</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>Only notify me we have the latest activity updates about increasing or decreasing data</p>
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
              <h3 className={style.parent_main_block_actions_option_info_head}>Important Reminder only</h3>
              <p className={style.parent_main_block_actions_option_info_desc}>Only notify me all the reminders that have been made</p>
            </div>
          </div>

        </div>
      </div>

      


  



    </div>


  </div>
  )
}

export default Notifications;
