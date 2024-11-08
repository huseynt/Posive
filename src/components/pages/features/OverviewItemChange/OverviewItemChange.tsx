import { useEffect, useState } from "react";
import { IGetMeals, ISaveOrder } from "../../../utils/API/types";
import style from "./overviewitemchange.module.scss";
import { createSaveOrders } from "../../../utils/API/API";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Loader from "../../../common/Loader/Loader";

interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;
  orderId: number;
  receiptNumber: string[] | null;
  cashier: string | null;
  menu: string[] | null;
  price: number;
  place: string | null;
  tables: string[] | null;
  orderDate: string;
  paymentMethod: string;
  cashiers: string[] | undefined;
  
  menus: IGetMeals[];
  size: string[];

  requestNotify: (purpose: string, description: string | undefined) => void;
}

const OverviewItemChange: React.FC<IQRCodeComponentProps> = (props) => {
  const { setViewOpen, menus, size, paymentMethod, orderDate, cashier, orderId, cashiers, price, requestNotify } = props;


  const ordersRecipeNumbers = menus?.map((m) => m.receiptNo).filter((receiptNo): receiptNo is string => receiptNo !== null && receiptNo !== undefined)
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    ordersRecipeNumbers.reduce((acc, curr) => {
      acc[curr] = parseInt(size?.find((s) => s.split(":")[0] === curr)?.split(":")[1] || "0", 10);
      return acc;
    }, {} as { [key: string]: number })
  );
  const products = Object.entries(productCounts).flatMap(([receiptNo, count]) => 
    Array(count).fill({ receiptNo } as { receiptNo: string})
  );
  const [data, setData] = useState<ISaveOrder>({
    orderId: orderId,
    userName: cashier ?? "",
    productsSet: products?? [],
    price: price,
    orderDate: orderDate,
    paymentMethod: paymentMethod,
  });
  const formattedDate = new Date(data.orderDate).toISOString().split("T")[0];

  useEffect(() => {
    setData({ ...data, productsSet: products });
  } , [productCounts]);

  

  const increaseCount = (receiptNo: string) => {
    if (productCounts[receiptNo] < (menus.find((m) => m.receiptNo === receiptNo)?.stock ?? 0)
    )
    {setProductCounts((prev) => ({
      ...prev,
      [receiptNo]: (prev[receiptNo] || 0) + 1,
    }));}
  };

  const decreaseCount = (receiptNo: string) => {
    setProductCounts((prev) => ({
      ...prev,
      [receiptNo]: Math.max((prev[receiptNo] || 0) - 1, 0),
    }));
  };

  const trashCount = (receiptNo: string) => {
    setProductCounts((prev) => ({
      ...prev,
      [receiptNo]: 0,
    }));
  };

  // ----------------- save order -----------------
  const queryClient = useQueryClient();
  
  const {
    mutate: SaveOrder,
    isPending: isSaveOrders,
  } = useMutation({
    mutationFn: createSaveOrders,
    onSuccess: () => {
      console.log('Success');
      queryClient.invalidateQueries({queryKey: ["getOrders"]})
      setViewOpen("")
      requestNotify("done", "Order saved successfully");
    },
    onError: (error) => {
      console.log('Login error:', error);
      requestNotify("undone", "Order save failed");
    },
  });

  const saveOrder = () => {
    SaveOrder(data);
  }
  // ----------------- save order -----------------


  useEffect(() => {
    console.log(productCounts);
  }, [productCounts]);

  useEffect(() => {
    console.log(data);
  }, [setData, data])

  return (
    <div className={style.view}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>Edit Details</h3>
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
              <div className={style.view_block_main_information_item_head}>Order ID</div>
              <div className={style.view_block_main_information_item_value}
              style={{backgroundColor: "#edf1f3"}}
              >{orderId}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>Receipt Number</div>
              <div className={style.view_block_main_information_item_value}
              style={{backgroundColor: "#edf1f3"}}
              >{menus.map((m) => m.receiptNo).join('').slice(1,10)}</div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>Collected By</div>
              <div className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_payment}`}>
                <div className={`${style.view_block_main_information_item_value_payment_head}`}>
                    {data.userName}
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.28 0.966797L7.9333 5.31346C7.41997 5.8268 6.57997 5.8268 6.06664 5.31346L1.71997 0.966797" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                
                <div className={`${style.view_block_main_information_item_value_payment_down}`}>
                  {cashiers?.map((m, index) => 
                    <div key={index} style={{backgroundColor: data.userName===m ? "#edf1d3" : ""}} onClick={() => setData({ ...data, userName: m })}>{m}</div>
                  )}
                </div>
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>Date & Time</div>
              <div className={style.view_block_main_information_item_value}>
                <input style={{outline:"none", border: "none"}} type="date" value={formattedDate || ""} 
                onChange={(e) => setData({ ...data, orderDate: 
                  e.target.value + "T" + data.orderDate.split("T")[1]
                 })}
                />
              </div>
            </div>

            <div className={style.view_block_main_information_item}>
              <div className={style.view_block_main_information_item_head}>Payment Method</div>
              <div className={`${style.view_block_main_information_item_value} ${style.view_block_main_information_item_value_payment}`}>
                <div className={`${style.view_block_main_information_item_value_payment_head}`}>
                    {paymentMethod}
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.28 0.966797L7.9333 5.31346C7.41997 5.8268 6.57997 5.8268 6.06664 5.31346L1.71997 0.966797" stroke="#1A1C1E" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className={`${style.view_block_main_information_item_value_payment_down}`}>
                  <div onClick={() => setData({ ...data, paymentMethod: "Master Card" })}
                    style={{backgroundColor: data.paymentMethod == "Master Card" ? "#edf1d3": ""}}
                    >Master Card</div>
                  <div onClick={() => setData({ ...data, paymentMethod: "Paypal" })}
                  style={{backgroundColor: data.paymentMethod == "Paypal" ? "#edf1d3": ""}}
                    >Paypal</div>
                  <div onClick={() => setData({ ...data, paymentMethod: "QR-Code" })}
                    style={{backgroundColor: data.paymentMethod == "QR-Code" ? "#edf1d3": ""}}
                    >QR-Code</div>
                </div>
              </div>
              
            </div>
          </div>


          <div className={style.view_block_main_menu}>
            <div className={style.view_block_main_menu_head}>
              <div>Menu Orders</div>
              <div className={style.view_block_main_menu_head_count}>{size.length} Menu</div>
            </div>

            <div className={style.view_block_main_menu_container}>
              <div className={style.view_block_main_menu_container_list}>

                {/* do same and add if data includes same data */}
                {
                  menus?.filter((menu, index, self) => 
                    index === self.findIndex((t) => (
                      t.name === menu.name && data.productsSet?.find((p) => p.receiptNo === menu.receiptNo)
                    ))
                  ).map((menu) => 
                    (<div key={menu.id} className={style.view_block_main_menu_container_list_item}>
                      <div className={style.view_block_main_menu_container_list_item_img}>
                        <img src={menu.imageUrl ?? ""} alt="menu" />
                      </div>
                      <div className={style.view_block_main_menu_container_list_item_head}>
                        <div className={style.view_block_main_menu_container_list_item_head_up}>
                          {menu.name} 
                          {/* ({size?.find((size) => menu.receiptNo && size.split(":")[0] === menu.receiptNo.toString())?.split(":")[1]}) */}
                          </div>
                        <div className={style.view_block_main_menu_container_list_item_head_actions}>
                          <div className={style.view_block_main_menu_container_list_item_head_actions_btn}
                          onClick={() => decreaseCount(menu.receiptNo ?? "")}
                          >-</div>
                          <div className={style.view_block_main_menu_container_list_item_head_actions_count}>
                            {productCounts[menu.receiptNo ?? ""] || 0}
                          </div>
                          <div className={style.view_block_main_menu_container_list_item_head_actions_btn}
                          onClick={() => increaseCount(menu.receiptNo ?? "")}
                          >+</div>
                        </div>
                      </div>
                      <div className={style.view_block_main_menu_container_list_item_price}>
                        <div className={style.view_block_main_menu_container_list_item_price_trash}
                        onClick={() => trashCount(menu.receiptNo ?? "")}
                        >
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023" fill="#b30606"/>
                            <path d="M10.5 2.99023C8.835 2.82523 7.16 2.74023 5.49 2.74023C4.5 2.74023 3.51 2.79023 2.52 2.89023L1.5 2.99023" stroke="#b30606" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.25 2.485L4.36 1.83C4.44 1.355 4.5 1 5.345 1H6.655C7.5 1 7.565 1.375 7.64 1.835L7.75 2.485" stroke="#b30606" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.42495 4.57031L9.09995 9.60531C9.04495 10.3903 8.99995 11.0003 7.60495 11.0003H4.39495C2.99995 11.0003 2.95495 10.3903 2.89995 9.60531L2.57495 4.57031" stroke="#b30606" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.16504 8.25H6.83004" stroke="#b30606" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4.75 6.25H7.25" stroke="#b30606" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className={style.view_block_main_menu_container_list_item_price_num}>${(menu.price).toFixed(2)}</div>
                      </div>
                    </div>)
                    )
                } 





              
              </div>
            </div>
          </div>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_print}`}
          onClick={saveOrder}
          >
            {isSaveOrders ? 
            <Loader/>
            : 
            <span>Save</span>
            }
          </div>

          <div className={style.view_block_actions_option}
          style={{width: "100px"}}
          onClick={()=> setViewOpen("")}
          >
            <span>Cancel</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewItemChange;
