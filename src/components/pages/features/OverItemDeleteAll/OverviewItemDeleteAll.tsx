import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDeleteOrdersAll } from "../../../utils/API/API";
import style from "./overviewitemdeleteall.module.scss";
import Loader from "../../../common/Loader/Loader";
import { useTranslation } from "react-i18next";

interface IQRCodeComponentProps {
  setDeleteAllOpen: React.Dispatch<React.SetStateAction<boolean>>;
  multiCheck: number[];
  setMultiCheck: React.Dispatch<React.SetStateAction<number[]>>;
  // requestNotify: (purpose: string, description: string | undefined) => void;
}

const OverviewItemDeleteAll: React.FC<IQRCodeComponentProps> = (props) => {
  const { setDeleteAllOpen, multiCheck, setMultiCheck } = props;
  const {t} = useTranslation();
  
  // ------------------- delete orders all ------------------------
  const queryClient = useQueryClient();
  const {
    mutate: DeleteOrdersAll,
    isPending: isDeletingAll,
  } = useMutation({
    mutationFn: createDeleteOrdersAll,
    onSuccess: () => {
      console.log('Delete success:');
        console.log('Deleted');
        queryClient.invalidateQueries({queryKey: ["getOrders"]})
        queryClient.invalidateQueries({queryKey: ["getNotifications"]});
        setMultiCheck([]);
        setDeleteAllOpen(false);
        // requestNotify("done", "Order deleted successfully");
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      // requestNotify("undone", "Error deleting order");
    },
  });
  const handleDeleteAll = () => {
    DeleteOrdersAll(multiCheck);
  }
  // ------------------- delete orders all ------------------------






  return (
    <div className={`${style.view} ${style.printable_modal}`}>
      <div className={style.view_bg} onClick={() => {
        setDeleteAllOpen(false);
      }}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>{t("Delete Transactions ?")}</h3>
        </div>
        
        <div className={style.view_block_main}>
          <p>{t("Are you sure you want to delete Transactions ?")}</p>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_delete}`}
          onClick={handleDeleteAll}
          >
            { isDeletingAll ? 
            <Loader/>
            :
            <span>{t("Delete")}</span>}
          </div>

          <div className={style.view_block_actions_option}
          onClick={() => {
            setDeleteAllOpen(false);
          }}>
            <span>{t("Cancel")}</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewItemDeleteAll;
