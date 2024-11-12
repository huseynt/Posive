import { useState } from 'react';
import { IProducts } from '../../../utils/API/types'
import ProductItemView from '../ProductItemView/ProductItemView';
import style from './productstableitem.module.scss'
import ProductItemChange from '../ProductItemChange/ProductItemChange';
import ProductItemDelete from '../ProductItemDelete/ProductItemDelete';
import Notify from '../Notify/Notify';




const ProductsTableItem: React.FC<IProducts> = (props) => {
    const { name,receiptNo,orderofDay,category,imageUrl,price,stock,tax,discount } = props;
    const [viewOpen, setViewOpen] = useState<string>("");


    const handleView = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        setViewOpen(id);
    }

    //  ----------------------------- for notify ----------------------------
    const [notify, setNotify] = useState<boolean>(false);
    const [notifyPurpose, setNotifyPurpose] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const requestNotify = (purpose: string, description: string | undefined) => {
        setNotifyPurpose(purpose);
        setDescription(description ? description : "");
        setNotify(true);
        const timeout = setTimeout(() => {
        setNotify(false);
        }, 1800);
        return () => {
        clearTimeout(timeout);
        };
    };
    //  ----------------------------- for notify ----------------------------

  return (
    <>

        {viewOpen==="view" && 
        <ProductItemView 
        setViewOpen={setViewOpen} 
        viewOpen={viewOpen} 
        {...props}
        />}



        {viewOpen==="change" && 
        <ProductItemChange
        setViewOpen={setViewOpen} 
        viewOpen={viewOpen} 
        requestNotify={requestNotify}
        {...props}
        />}

        { viewOpen==="delete" &&
          <ProductItemDelete
          setViewOpen={setViewOpen} 
          viewOpen={viewOpen} 
          receiptNo={receiptNo}
          requestNotify={requestNotify}
          />
        }

        <Notify notify={notify} purpose={notifyPurpose} describtion={description}/>





        <tr className={style.productsItem}>
            
            <td className={style.productsItem_head}
            style={{display: "flex", paddingLeft: "12px"}}>
                <img className={style.productsItem_head_img} src={imageUrl} alt={name} />
                <span className={style.productsItem_head_name}>{name}</span>
            </td>

            <td className={style.productsItem_mobile}>{receiptNo}</td>
            <td className={style.productsItem_desktop}>{orderofDay}</td>
            <td className={style.productsItem_desktop}>{category}</td>
            <td className={style.productsItem_desktop}>{price}</td>
            <td className={style.productsItem_desktop}>{stock}</td>
            <td className={style.productsItem_desktop}>{tax}</td>
            <td className={style.productsItem_desktop}>{discount}</td>
            
            <td className={style.productsItem_mobile}>
                <div className={style.productsItem_mobile_action}>
                    <div className={style.productsItem_mobile_action_option}
                    style={{
                        backgroundColor: "#12B3A8",
                    }}
                    id="view"
                    onClick={handleView}
                    >
                        <svg width="12" 
                        height="12" 
                        pointerEvents={"none"} 
                        viewBox="0 0 12 12" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.78996 5.99996C7.78996 6.98996 6.98996 7.78996 5.99996 7.78996C5.00996 7.78996 4.20996 6.98996 4.20996 5.99996C4.20996 5.00996 5.00996 4.20996 5.99996 4.20996C6.98996 4.20996 7.78996 5.00996 7.78996 5.99996Z"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6.00004 10.1354C7.76504 10.1354 9.41004 9.09535 10.555 7.29535C11.005 6.59035 11.005 5.40535 10.555 4.70035C9.41004 2.90035 7.76504 1.86035 6.00004 1.86035C4.23504 1.86035 2.59004 2.90035 1.44504 4.70035C0.995044 5.40535 0.995044 6.59035 1.44504 7.29535C2.59004 9.09535 4.23504 10.1354 6.00004 10.1354Z"
                            stroke="white"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </svg>
                    </div> 

                    <div className={style.productsItem_mobile_action_option}
                    style={{
                        backgroundColor: "#4D81E7",
                    }}
                    id="change"
                    onClick={handleView}
                    >
                        <svg width="12" pointerEvents={"none"} height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.63005 1.79962L2.52505 6.14462C2.37005 6.30962 2.22005 6.63462 2.19005 6.85962L2.00505 8.47962C1.94005 9.06462 2.36005 9.46462 2.94005 9.36462L4.55005 9.08962C4.77505 9.04962 5.09005 8.88462 5.24505 8.71462L9.35005 4.36962C10.06 3.61962 10.38 2.76462 9.27505 1.71962C8.17505 0.68462 7.34005 1.04962 6.63005 1.79962Z"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5.94495 2.52539C6.15995 3.90539 7.27995 4.96039 8.66995 5.10039"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.5 11H10.5"
                                stroke="white"
                                strokeWidth="1.2"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className={style.productsItem_mobile_action_option}
                    style={{
                        backgroundColor: "#C65468",
                    }}
                    id="delete"
                    onClick={handleView}
                    >
                        <svg width="12" pointerEvents={"none"} height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    </div>
                </div>
            </td>
            
        </tr>
    </>
  )
}

export default ProductsTableItem
