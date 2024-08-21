import style from './account.module.scss'
import { useState } from 'react'
import arrowdown from '/public/assets/arrow-down.png'

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

interface IData {
  imgFile: string | null,
  fullName: string,
  emailAddress: string,
  phoneNumber: string,
  gender: string,
  birthOfDate: string,
  password: string,
}





const General: React.FC<IGeneral> = (props) => {
  const { setMobileSelect } = props
  const [visibility, setVisibility] = useState<boolean>(false);
  const [data, setData] = useState<IData>({
    imgFile: "",
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    gender: "Male",
    birthOfDate: "",
    password: "",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  // const changeData = (e: React.ChangeEvent<HTMLInputElement>) => { 
  //   setData({
  //     ...data,
  //     [e.target.id]: e.target.value,
  //   });
  // }

  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { id, value, files } = e.target;

    if (id === "imgFile" && files && files.length > 0) {
        const file = files[0];
        const reader = new FileReader();
        
        reader.onloadend = () => {
            setImagePreview(reader.result as string);

            setData({
                ...data,
                [id]: reader.result as string,
            });
        };
        reader.readAsDataURL(file);
        e.target.value = "";
    } else {
        setData({
            ...data,
            [id]: value,
        });
    }
  };

  const deletePhoto = () => {
    setImagePreview(null);
    setData({
        ...data,
        imgFile: null,
    });
  };

  const resetData = () => {
    setData({
      imgFile: null,
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      gender: "Male",
      birthOfDate: "",
      password: "",
    });
    setImagePreview(null);
  }

  const sendData = () => {
    console.log(data)
    resetData()
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
    
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>Your Account </h2>
      <h5 className={style.parent_up_info}>Manage who has access in your system</h5>
    </div>

    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      
      {/* ------------------------ profile ---------------------------- */}
      <div className={style.parent_main_business}>
        <h3 className={style.parent_main_business_head}>Profile</h3>

        <div className={style.parent_main_business_block}>

          <div className={style.parent_main_business_block_photo}>
            <div className={style.parent_main_business_block_photo_icon}>
            {
              imagePreview ?
              <img 
                src={imagePreview} 
                alt="Uploaded Preview" 
                className={style.parent_main_business_block_photo_icon_image}
              /> :
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4 30.033C6.86666 30.033 3.98666 27.1663 3.98666 23.6197V19.833C3.98666 18.9397 4.86666 18.3397 5.70666 18.633C6.05333 18.753 6.4 18.833 6.76 18.8863C6.92 18.913 7.08 18.9397 7.24 18.9397C7.44 18.9663 7.65333 18.9797 7.85333 18.9797C9.33333 18.9797 10.8 18.433 11.96 17.4863C13.0667 18.433 14.4933 18.9797 16.0133 18.9797C17.5333 18.9797 18.9467 18.4597 20.0533 17.4997C21.2 18.433 22.64 18.9797 24.1067 18.9797C24.3333 18.9797 24.5733 18.9663 24.7867 18.9397C24.9467 18.9263 25.08 18.913 25.2267 18.8863C25.6267 18.833 25.9867 18.7263 26.3467 18.6063C27.1733 18.3263 28.04 18.9397 28.04 19.8063V23.6197C28.04 27.153 25.1733 30.033 21.6267 30.033H10.4Z" fill="#1A1C1E"/>
                <path d="M29.3067 11.9535L28.9333 8.4068C28.4 4.54013 26.64 2.9668 22.88 2.9668H19.8667H17.9733H14.08H12.1733H9.09334C5.33334 2.9668 3.58667 4.54013 3.04001 8.4468L2.69334 11.9668C2.56001 13.3401 2.93334 14.6735 3.74667 15.7135C4.72001 16.9801 6.21334 17.7001 7.88001 17.7001C9.49334 17.7001 11.04 16.8868 12.0133 15.5935C12.88 16.8868 14.3733 17.7001 16.0267 17.7001C17.68 17.7001 19.1333 16.9268 20.0133 15.6468C21 16.9135 22.52 17.7001 24.12 17.7001C25.8267 17.7001 27.36 16.9401 28.32 15.6068C29.0933 14.5801 29.44 13.2868 29.3067 11.9535ZM18 10.8068H17V11.8468C17 12.4068 16.5467 12.8468 16 12.8468C15.4533 12.8468 15 12.4068 15 11.8468V10.8068H14C13.4533 10.8068 13 10.3668 13 9.8068C13 9.26013 13.4533 8.8068 14 8.8068H15V7.86013C15 7.31346 15.4533 6.86013 16 6.86013C16.5467 6.86013 17 7.31346 17 7.86013V8.8068H18C18.5467 8.8068 19 9.26013 19 9.8068C19 10.3668 18.5467 10.8068 18 10.8068Z" fill="#EA7E41"/>
              </svg>
            }
            </div>

            <div className={style.parent_main_business_block_photo_upload}>
              <label htmlFor="imgFile" className={style.parent_main_business_block_photo_upload_label}>
                {data.imgFile ? "Selected" : "Upload New"}
              </label>
              <input type="file" 
              accept="image/png, image/jpeg"
              multiple = {false}
              id="imgFile" 
              className={style.parent_main_business_block_photo_upload_input} 
              onChange={changeData}/>
            </div>

            <button className={style.parent_main_business_block_photo_delete}
            onClick={deletePhoto}>Delete</button>
          </div>

          <div className={style.parent_main_business_block_form}>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="fullName" 
              onChange={changeData} 
              value={data.fullName}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.fullName ? style.label_focus: style.label}>Full Name</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="emailAddress" 
              onChange={changeData} 
              value={data.emailAddress}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.emailAddress ? style.label_focus: style.label}>Email Address</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="phoneNumber" 
              onChange={changeData} 
              value={data.phoneNumber}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.phoneNumber ? style.label_focus: style.label}>Phone Number</p>
            </div>


            <div className={style.parent_main_business_block_form_select}>
              <div className={style.parent_main_business_block_form_select_head}>
                <p className={style.parent_main_business_block_form_select_head_p}>{data.gender}</p>
                <img className={style.parent_main_business_block_form_select_head_img} src={arrowdown} alt="arrowdown" />
              </div>
              <div className={style.parent_main_business_block_form_select_down}>
                <p className={style.parent_main_business_block_form_select_down_option}
                onClick={() => setData({
                  ...data,
                  gender: "Male"
                })}
                style={{color: data.gender==="Male" ? "#EA7E41" : ""}}
                >{"Male"}</p>
                <p className={style.parent_main_business_block_form_select_down_option}
                onClick={() => setData({
                  ...data,
                  gender: "Female"
                })}
                style={{color: data.gender==="Female" ? "#EA7E41" : ""}}
                >{"Female"}</p>
              </div>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="date" 
              id="birthOfDate" 
              onChange={changeData} 
              value={data.birthOfDate}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.birthOfDate ? style.label_focus: style.label_birth}>Birth of Date</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type={visibility ? "text" : "password"} 
              id="password" 
              onChange={changeData} 
              value={data.password}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.password ? style.label_focus: style.label}>Password</p>
              <div className={style.parent_main_business_block_form_block_visibility}
              onClick={() => setVisibility(!visibility)}
              >
                {visibility ?
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5799 11.9999C15.5799 13.9799 13.9799 15.5799 11.9999 15.5799C10.0199 15.5799 8.41992 13.9799 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C13.9799 8.41992 15.5799 10.0199 15.5799 11.9999Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5299 9.46992L9.46992 14.5299C8.81992 13.8799 8.41992 12.9899 8.41992 11.9999C8.41992 10.0199 10.0199 8.41992 11.9999 8.41992C12.9899 8.41992 13.8799 8.81992 14.5299 9.46992Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.41992 19.5299C9.55992 20.0099 10.7699 20.2699 11.9999 20.2699C15.5299 20.2699 18.8199 18.1899 21.1099 14.5899C22.0099 13.1799 22.0099 10.8099 21.1099 9.39993C20.7799 8.87993 20.4199 8.38993 20.0499 7.92993" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.47 14.53L2 22" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L14.53 9.47" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                }
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className={style.parent_main_line}></div>



      <div className={style.parent_main_deleteAccount}>
        <h3 className={style.parent_main_deleteAccount_head}>Delete account</h3>
        <div className={style.parent_main_deleteAccount_down}>
          <p className={style.parent_main_deleteAccount_down_text}>When you delete your account, you lose access to Front account services, and we permanently delete your personal data. You can cancel the deletion for 14 days.</p>
          <div className={style.parent_main_deleteAccount_down_actions}>
            <button className={style.parent_main_deleteAccount_down_actions_btn}>Delete account</button>
            <button className={style.parent_main_deleteAccount_down_actions_btnW}>Learn more</button>
          </div>
        </div>
      </div>
      


    </div>
  </div>
  )
}

export default General;
