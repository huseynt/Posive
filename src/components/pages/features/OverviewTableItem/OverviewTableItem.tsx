import style from "./overviewTableItem.module.scss";
import { useEffect, useState } from "react";

interface Order {
  orderId: string;
  receiptNo: string;
  menu: string[];
  collectedBy: string;
  dateTime: string;
  paymentMethod: string;
  action: string;
  checked: boolean;
}

const OverviewTableItem:React.FC<Order> = (props) => {
  const { orderId, receiptNo, menu, collectedBy, dateTime, action, paymentMethod, checked } = props;
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <>
      <tr className={style.tr}>
        <td style={{textAlign : "center"}}><input type="checkbox" onChange={()=> setIsChecked(!isChecked)} checked={isChecked} /></td>
        <td>{orderId}</td>
        <td className={style.tr_desktop}>{receiptNo}</td>
        <td className={style.tr_desktop}>{menu}</td>
        <td className={style.tr_desktop}>{collectedBy}</td>
        <td>{dateTime}</td>
        <td className={style.tr_desktop}>{paymentMethod}</td>
        <td>{action}</td>
      </tr>
    </>
  );
};

export default OverviewTableItem;
