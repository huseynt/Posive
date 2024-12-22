import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDeleteProduct } from "../../../../utils/API/API";
import style from "./productitemdelete.module.scss";
import Loader from "../../../common/Loader/Loader";
import { useTranslation } from "react-i18next";

interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;
  receiptNo: string;
  requestNotify: (purpose: string, description: string | undefined) => void;
}

const ProductItemDelete: React.FC<IQRCodeComponentProps> = (props) => {
  const { setViewOpen, receiptNo , requestNotify } = props;
  const {t} = useTranslation();

  // ------------------- delete user ------------------------
  const queryClient = useQueryClient();
  const {
    mutate: DeleteProduct,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: () => createDeleteProduct(receiptNo?.toString()),
    onSuccess: (response) => {
      console.log('Delete success:', response);
        console.log('Deleted');
        setViewOpen("");
        queryClient.invalidateQueries({queryKey: ["getProducts"]});
        queryClient.invalidateQueries({queryKey: ["getNotifications"]});
        requestNotify("done", t("Order deleted successfully"));
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      setViewOpen("");
      requestNotify("undone", t("Error deleting order"));
    },
  });
  const handleDeleteOrder = () => {
    DeleteProduct();
  }
  // ------------------- delete user ------------------------






  return (
    <div className={`${style.view} ${style.printable_modal}`}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>{t("Delete Product ?")}</h3>
        </div>
        
        <div className={style.view_block_main}>
          <p>{t("Are you sure you want to delete Product ?")}</p>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_delete}`}
          onClick={handleDeleteOrder}
          >
            { isDeleting ? 
            <Loader/>
            :
            <span>{t("Delete")}</span>}
          </div>

          <div className={style.view_block_actions_option}
          onClick={() => setViewOpen("")}>
            <span>{t("Cancel")}</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProductItemDelete;
