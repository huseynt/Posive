import style from './general.module.scss'
import { useEffect, useState } from 'react'
import uploadImage from '../../../../../services/Firebase/Firebase'
import { createGetSettingGeneral, createSaveSettingGeneral } from '../../../../../utils/API/API';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { IGetGeneral } from '../../../../../utils/API/types';
import PageLoader from '../../../../common/PageLoader/PageLoader';
import Loader from '../../../../common/Loader/Loader';
import { useTranslation } from 'react-i18next';

interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>;
  requestNotify: (purpose: string, description: string) => void;
}

const General: React.FC<IGeneral> = (props) => {
  const { setMobileSelect, requestNotify } = props
  const [data, setData] = useState({
    imgFile: "",
    storeName: "",
    businessMail: "",
    businessNumber: "",
    fax: "",
    country: "",
    city: "",
    flatUnit: "",
    street: "",
    streetNo: "",
    postcode: "",
  });
  const [uploadProgress, setUploadProgress] = useState<number>(0);



  // ----------------- get data --------------------------
  const {
    data: getGeneralData,
    isLoading: isGeneralLoading,
  } = useQuery<IGetGeneral | undefined>({
    queryKey: ["getSettingGeneral"],
    queryFn: createGetSettingGeneral,
  });
  useEffect(() => {
    if (!isGeneralLoading && getGeneralData) {
      setData({
        imgFile: getGeneralData?.businessDetails.imageUrl || "",
        storeName: getGeneralData?.businessDetails.storeName || "",
        businessMail: getGeneralData?.businessDetails.businessEmail || "",
        businessNumber: getGeneralData?.businessDetails.number || "",
        fax: getGeneralData?.businessDetails.fax || "",
        country: getGeneralData?.address.country || "",
        city: getGeneralData?.address.city || "",
        flatUnit: getGeneralData?.address.flat || "",
        street: getGeneralData?.address.street || "",
        streetNo: getGeneralData?.address.streetNumber || "",
        postcode: getGeneralData?.address.postalCode || "",
      });
    }
    setImagePreview(getGeneralData?.businessDetails.imageUrl || null);
  }, [isGeneralLoading, getGeneralData]);
  //------------------ get data ---------------------------


  // ----------------- save data --------------------------
  const queryClient = useQueryClient();
  const {
    mutate: SaveGeneral,
    isPending: isSaveGeneralPending,
  } = useMutation({
    mutationFn: createSaveSettingGeneral,
    onSuccess: () => {
      requestNotify("done", t("Saved successfully!"));
      queryClient.invalidateQueries({queryKey: ["getSettingGeneral"]})
      queryClient.invalidateQueries({queryKey: ["getNotifications"]});
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      requestNotify("undone", t("An error occurred while saving!"));
    },
  });
  // ---------------- save data ----------------------------
  const [imagePreview, setImagePreview] = useState<string | null>(getGeneralData?.businessDetails.imageUrl || null);
  const { t } = useTranslation();











  const changeData = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { id, value, files } = e.target;

    if (id === "imgFile" && files && files.length > 0) {
      const Imgfile = files[0];

      // upload Firebase storage
      uploadImage(Imgfile, (progress) => {
        setUploadProgress(progress); 
      })
      .then((downloadURL) => {
        setImagePreview(URL.createObjectURL(Imgfile));
        setData({
          ...data,
          [id]: downloadURL.downloadURL as unknown as string,
        });
        setUploadProgress(0); 
      })
      .catch((error) => {
        console.error("Yükləmə zamanı xəta baş verdi: ", error);
        setUploadProgress(0);
      })
      e.target.value = "";
  } else {
      setData({
          ...data,
          [id]: value,
      });
  }
  }

  const resetData = () => {
    if (getGeneralData) {
      setData({
        imgFile: getGeneralData?.businessDetails.imageUrl || "",
        storeName: getGeneralData?.businessDetails.storeName || "",
        businessMail: getGeneralData?.businessDetails.businessEmail || "",
        businessNumber: getGeneralData?.businessDetails.number || "",
        fax: getGeneralData?.businessDetails.fax || "",
        country: getGeneralData?.address.country || "",
        city: getGeneralData?.address.city || "",
        flatUnit: getGeneralData?.address.flat || "",
        street: getGeneralData?.address.street || "",
        streetNo: getGeneralData?.address.streetNumber || "",
        postcode: getGeneralData?.address.postalCode || "",
      });
    }
    setImagePreview(getGeneralData?.businessDetails.imageUrl || null);
  }

  const sendData = () => {
    if (
      data.imgFile !== "" &&
      data.storeName !== "" &&
      data.businessMail !== "" &&
      data.businessNumber !== "" &&
      data.country !== "" &&
      data.city !== "" &&
      data.flatUnit !== "" &&
      data.street !== "" &&
      data.streetNo !== "" &&
      data.postcode !== ""
    ) {
      SaveGeneral(
        {
          businessDetails: {
            storeName: data.storeName,
            number: data.businessNumber,
            businessEmail: data.businessMail,
            fax: data.fax,
            imageUrl: data.imgFile,
          },
          address: {
            country: data.country,
            city: data.city,
            street: data.street,
            flat: data.flatUnit,
            streetNumber: data.streetNo,
            postalCode: data.postcode,
          }
        }
      )
    } else {
      requestNotify("important", t("Fill in all fields!"));
    }
  }







  return (
    <>
    
    {isGeneralLoading && <PageLoader /> }

    
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>

    {/* ----------------- save buttons ------------------------------ */}
    <div className={style.parent_buttons}>
      <button className={style.parent_buttons_cancel}
      onClick={resetData}
      >{t("cancel")}</button>
      <button className={style.parent_buttons_save}
      onClick={sendData}
      >
      { isSaveGeneralPending ?
          <Loader/>
          :
          t("save")
      }
      </button>
    </div>
    
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>{t("General")}</h2>
      <h5 className={style.parent_up_info}>{t("Update your business persona")}</h5>
    </div>

    <div className={style.parent_line}></div>

    <div className={style.parent_main}>
      
      {/* ------------------------ business ---------------------------- */}
      <div className={style.parent_main_business}>
        <h3 className={style.parent_main_business_head}>{t("Business Details")}</h3>

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
              <svg width="56" height="57" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.4 30.033C6.86666 30.033 3.98666 27.1663 3.98666 23.6197V19.833C3.98666 18.9397 4.86666 18.3397 5.70666 18.633C6.05333 18.753 6.4 18.833 6.76 18.8863C6.92 18.913 7.08 18.9397 7.24 18.9397C7.44 18.9663 7.65333 18.9797 7.85333 18.9797C9.33333 18.9797 10.8 18.433 11.96 17.4863C13.0667 18.433 14.4933 18.9797 16.0133 18.9797C17.5333 18.9797 18.9467 18.4597 20.0533 17.4997C21.2 18.433 22.64 18.9797 24.1067 18.9797C24.3333 18.9797 24.5733 18.9663 24.7867 18.9397C24.9467 18.9263 25.08 18.913 25.2267 18.8863C25.6267 18.833 25.9867 18.7263 26.3467 18.6063C27.1733 18.3263 28.04 18.9397 28.04 19.8063V23.6197C28.04 27.153 25.1733 30.033 21.6267 30.033H10.4Z" fill="#1A1C1E"/>
                <path d="M29.3067 11.9535L28.9333 8.4068C28.4 4.54013 26.64 2.9668 22.88 2.9668H19.8667H17.9733H14.08H12.1733H9.09334C5.33334 2.9668 3.58667 4.54013 3.04001 8.4468L2.69334 11.9668C2.56001 13.3401 2.93334 14.6735 3.74667 15.7135C4.72001 16.9801 6.21334 17.7001 7.88001 17.7001C9.49334 17.7001 11.04 16.8868 12.0133 15.5935C12.88 16.8868 14.3733 17.7001 16.0267 17.7001C17.68 17.7001 19.1333 16.9268 20.0133 15.6468C21 16.9135 22.52 17.7001 24.12 17.7001C25.8267 17.7001 27.36 16.9401 28.32 15.6068C29.0933 14.5801 29.44 13.2868 29.3067 11.9535ZM18 10.8068H17V11.8468C17 12.4068 16.5467 12.8468 16 12.8468C15.4533 12.8468 15 12.4068 15 11.8468V10.8068H14C13.4533 10.8068 13 10.3668 13 9.8068C13 9.26013 13.4533 8.8068 14 8.8068H15V7.86013C15 7.31346 15.4533 6.86013 16 6.86013C16.5467 6.86013 17 7.31346 17 7.86013V8.8068H18C18.5467 8.8068 19 9.26013 19 9.8068C19 10.3668 18.5467 10.8068 18 10.8068Z" fill="#EA7E41"/>
              </svg>
            }
            </div>

            <div className={style.parent_main_business_block_photo_upload}>
              <label htmlFor="imgFile" className={style.parent_main_business_block_photo_upload_label}
              style={{backgroundColor: data.imgFile ? "#029802" : ""}}
              >
                {!uploadProgress && (data.imgFile ? t("Selected") : t("Upload Photo"))} {uploadProgress ? `(${uploadProgress}%)` : ""}
              </label>
              <input type="file" 
              accept="image/png, image/jpeg"
              multiple = {false}
              id="imgFile" 
              className={style.parent_main_business_block_photo_upload_input} 
              onChange={changeData}/>
              <p className={style.parent_main_business_block_photo_upload_desc}>{t("For better preview recommended size is 450px x 450px. Max size 5MB.")}</p>
            </div>
          </div>

          <p className={style.parent_main_business_block_descMobile}>{t("For better preview recommended size is 450px x 450px. Max size 5MB.")}</p>


          <div className={style.parent_main_business_block_form}>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="storeName" 
              onChange={changeData} 
              value={data.storeName}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.storeName ? style.label_focus: style.label}>{t("Store Name")}</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="businessMail" 
              onChange={changeData} 
              value={data.businessMail}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.businessMail ? style.label_focus: style.label}>{t("Business Email")}</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="businessNumber" 
              onChange={changeData} 
              value={data.businessNumber}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.businessNumber ? style.label_focus: style.label}>{t("Business Number")}</p>
            </div>

            <div className={style.parent_main_business_block_form_block}>
              <input 
              type="text" 
              id="fax" 
              onChange={changeData} 
              value={data.fax}
              className={style.parent_main_business_block_form_email_block_input}
              />
              <p className={data.fax ? style.label_focus: style.label}>Fax</p>
            </div>

          </div>
        </div>
      </div>
      
      {/* ----------------- adress ------------------------------ */}
      <div className={style.parent_main_adress}>
        <h3 className={style.parent_main_adress_head}>{t("Adress")}</h3>

        <div className={style.parent_main_adress_container}
        // style={{height: window.innerHeight > 798  ? "700px" : ""}}
        >
          
          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="country" 
            onChange={changeData} 
            value={data.country}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.country ? style.label_focus: style.label}>{t("Country")}</p>
          </div>

          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="city" 
            onChange={changeData} 
            value={data.city}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.city ? style.label_focus: style.label}>{t("City")}</p>
          </div>

          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="flatUnit" 
            onChange={changeData} 
            value={data.flatUnit}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.flatUnit ? style.label_focus: style.label}>{t("Flat/Unit")}</p>
          </div>

          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="street" 
            onChange={changeData} 
            value={data.street}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.street ? style.label_focus: style.label}>{t("Street")}</p>
          </div>

          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="streetNo" 
            onChange={changeData} 
            value={data.streetNo}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.streetNo ? style.label_focus: style.label}>{t("Street No")}</p>
          </div>

          <div className={style.parent_main_adress_container_block}>
            <input 
            type="text" 
            id="postcode" 
            onChange={changeData} 
            value={data.postcode}
            className={style.parent_main_adress_container_block_input}
            />
            <p className={data.postcode ? style.label_focus: style.label}>{t("Post Code")}</p>
          </div>
            
        </div>
      </div>






    </div>
  </div>
  </>
  )
}

export default General;
