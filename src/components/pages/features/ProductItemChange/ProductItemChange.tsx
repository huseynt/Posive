import { useState } from "react";
import style from "./productitemchange.module.scss";
import { uploadMealImage } from '../../../services/Firebase/Firebase'
import { createChangeProduct } from "../../../utils/API/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import Loader from "../../../common/Loader/Loader";


interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;

  // id: number;
  name: string;
  receiptNo: string;
  orderofDay: number;
  category: string;
  imageUrl: string;
  price: number;
  stock: number;
  tax: number;
  discount: number;
  description: string;

  requestNotify: (purpose: string, description: string | undefined) => void;
}

interface IUpdateProduct {
  name: string;
  category: string;
  receiptNo: string;
  tax: number;
  discount: number;
  price: number;
  stock: number;
  imageUrl: string;
  description: string;
}

const ProductItemChange: React.FC<IQRCodeComponentProps> = (props) => {
  const { requestNotify, setViewOpen,  receiptNo, discount, tax, category, name, price, stock, imageUrl, description } = props;
  const {t} = useTranslation();

  const [data, setData] = useState<IUpdateProduct>({
    name: name ?? "",
    category: category ?? "",
    receiptNo: receiptNo ?? "",
    tax: tax ?? 0,
    discount: discount ?? 0,
    price: price ?? 0,
    stock: stock ?? 0,
    imageUrl: imageUrl ?? "",
    description: description ?? "",
  });
  const [imagePreview, setImagePreview] = useState<string>("");
  const [uploadProgress, setUploadProgress] = useState<number>(0);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === "tax" || name === "discount" || name === "price" || name === "stock") {
      const only = /^[0-9.]*$/;
      if (only.test(value)) {
        setData({ ...data, [name]: value });
      }
    } 
    else if (name === "imageUrl" && files && files.length > 0) {
      const Imgfile = files[0];

      // upload Firebase storage
      uploadMealImage(Imgfile, (progress: number) => {
        setUploadProgress(progress); 
      })
      .then((downloadURL) => {
        setImagePreview(URL.createObjectURL(Imgfile));
        setData({
          ...data,
          [name]: downloadURL.downloadURL as unknown as string, 
        });
        setUploadProgress(0); 
      })
      .catch((error: Error) => {
        console.error("Yükləmə zamanı xəta baş verdi: ", error);
        setUploadProgress(0);
      })
      e.target.value = "";
    } 
    else {
      setData({ ...data, [name]: value });
    }
  }

  // useEffect(() => {
  //   setData({ ...data, productsSet: products });
  // } , [productCounts]);

  

  // ----------------- save product -----------------
  const queryClient = useQueryClient();
  const {
    mutate: ChangeProduct,
    isPending: isSaveProductPending,
  } = useMutation({
    mutationFn: createChangeProduct,
    onSuccess: () => {
      console.log('Success');
      queryClient.invalidateQueries({queryKey: ["getProducts"]});
      setViewOpen("")
      requestNotify("done", t("Product saved successfully"));
    },
    onError: (error) => {
      console.log('Login error:', error);
      requestNotify("undone", t("Product save failed"));
    },
  });

  const saveOrder = () => {
    if (
      data.receiptNo &&
      data.name && 
      data.price && 
      data.stock && 
      data.imageUrl &&
      data.tax &&
      data.discount &&
      data.category &&
      data.description
    ) {
      ChangeProduct(data);
      console.log(data);
    }
  }
  // ----------------- save product -----------------

  return (
    <div className={style.view}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>{t("Edit Product Details")}</h3>
          <div className={style.view_block_head_exit}
          onClick={() => setViewOpen("")}
          >
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.750488 1.25L11.2498 11.7493" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M0.750218 11.7493L11.2495 1.25" stroke="#1A1C1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        <div className={style.view_block_main}>

          <div className={style.view_block_main_information}>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Product Name")}</div>
              <div className={style.view_block_main_information_item_value}>
                <input type="text" 
                name="name" 
                value={data.name} 
                style={{outline:"none", border: "none"}}
                onChange={handleChange} />
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Category")}</div>
              <div className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_payment}`}>
                <div className={`${style.view_block_main_information_item_value_payment_head}`}>
                    {
                      data.category === "Main Course" ? t("Main Course") :
                      data.category === "Rice Bowl" ? t("Rice Bowl") :
                      data.category === "Fast food" ? t("Fast Food") :
                      data.category === "Healthy food" ? t("Healthy Food") : ""
                    }
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.28 0.966797L7.9333 5.31346C7.41997 5.8268 6.57997 5.8268 6.06664 5.31346L1.71997 0.966797" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                <div className={`${style.view_block_main_information_item_value_payment_down}`}>
                  <div style={{backgroundColor: data.category==="Main Course" ? "#edf1d3" : ""}} onClick={() => setData({ ...data, category: "Main Course" })}>{t("Main Course")}</div>
                  <div style={{backgroundColor: data.category==="Rice Bowl" ? "#edf1d3" : ""}} onClick={() => setData({ ...data, category: "Rice Bowl" })}>{t("Rice Bowl")}</div>
                  <div style={{backgroundColor: data.category==="Fast food" ? "#edf1d3" : ""}} onClick={() => setData({ ...data, category: "Fast food" })}>{t("Fast Food")}</div>
                  <div style={{backgroundColor: data.category==="Healthy food" ? "#edf1d3" : ""}} onClick={() => setData({ ...data, category: "Healthy food" })}>{t("Healthy Food")}</div>
                </div>
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Receipt Number")}</div>
              <div className={style.view_block_main_information_item_value}
              style={{backgroundColor: "#edf1f3"}}
              >{data.receiptNo}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Input Tax")}</div>
              <div className={style.view_block_main_information_item_value}>
                <input type="text" 
                name="tax" 
                value={data.tax} 
                style={{outline:"none", border: "none"}}
                onChange={handleChange} /> %
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Discount")}</div>
              <div className={style.view_block_main_information_item_value}>
                <input type="text" 
                name="discount" 
                value={data.discount} 
                style={{outline:"none", border: "none"}}  
                onChange={handleChange} /> %
              </div>
            </div>

          </div>


          <div className={style.view_block_main_menu}>
            
            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Price")}</div>
              <div className={style.view_block_main_information_item_value}>
                $<input type="text" 
                name="price" 
                value={data.price} 
                style={{outline:"none", border: "none"}}  
                onChange={handleChange} />
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>{t("Stock")}</div>
              <div className={style.view_block_main_information_item_value}>
                <input type="text" 
                name="stock" 
                value={data.stock} 
                style={{outline:"none", border: "none"}}  
                onChange={handleChange} />
              </div>
            </div>
            
            <div className={style.view_block_main_menu_head}>{t("Product Image")}</div>
            <div className={style.view_block_main_menu_drag}>
              <div className={style.view_block_main_menu_drag_img}>
                <label htmlFor="imageUrl"></label>
                <input type="file" 
                accept="image/png, image/jpeg"
                multiple = {false}
                name="imageUrl" 
                id="imageUrl"
                style={{display: "none"}}
                className={style.parent_main_business_block_photo_upload_input} 
                onChange={handleChange}/>

                {uploadProgress ?  
                <div className={style.view_block_main_menu_drag_progress}>{uploadProgress}%</div> 
                :
                <svg width="30" height="30" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0002 23.167V15.167L9.3335 17.8337" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15.167L14.6667 17.8337" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.3332 13.8337V20.5003C29.3332 27.167 26.6665 29.8337 19.9998 29.8337H11.9998C5.33317 29.8337 2.6665 27.167 2.6665 20.5003V12.5003C2.6665 5.83366 5.33317 3.16699 11.9998 3.16699H18.6665" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.3332 13.8337H23.9998C19.9998 13.8337 18.6665 12.5003 18.6665 8.50033V3.16699L29.3332 13.8337Z" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                }

                {/* <svg width="30" height="30" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0002 23.167V15.167L9.3335 17.8337" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 15.167L14.6667 17.8337" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.3332 13.8337V20.5003C29.3332 27.167 26.6665 29.8337 19.9998 29.8337H11.9998C5.33317 29.8337 2.6665 27.167 2.6665 20.5003V12.5003C2.6665 5.83366 5.33317 3.16699 11.9998 3.16699H18.6665" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M29.3332 13.8337H23.9998C19.9998 13.8337 18.6665 12.5003 18.6665 8.50033V3.16699L29.3332 13.8337Z" stroke="#EA7E41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg> */}
              </div>
              <div className={style.view_block_main_menu_drag_name}>{t("Drag and drop a file to upload")}</div>
            </div>

            { imageUrl &&
              <div className={style.view_block_main_menu_image}>
              <div className={style.view_block_main_menu_image_img}>
                <img src={imagePreview ? imagePreview : imageUrl} alt={name} />
              </div>
              <div className={style.view_block_main_menu_image_name}>{name}</div>
              <div className={style.view_block_main_menu_image_size}>
                {imageUrl.length}KB
              </div>
            </div>}



          </div>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_print}`}
          onClick={saveOrder}
          >
            {isSaveProductPending ? 
              <Loader/>
            : 
              <span>{t("Update")}</span>
            }
          </div>

          <div className={style.view_block_actions_option}
          style={{width: "100px"}}
          onClick={()=> setViewOpen("")}
          >
            <span>{t("Cancel")}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductItemChange;

