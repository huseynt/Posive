import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDeleteOrders } from "../../../utils/API/API";
import style from "./overviewitemdelete.module.scss";
import Loader from "../../../common/Loader/Loader";

interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;
  orderId: number;
  requestNotify: (purpose: string, description: string | undefined) => void;
}

const OverviewItemDelete: React.FC<IQRCodeComponentProps> = (props) => {
  const { setViewOpen, orderId, requestNotify } = props;

  // ------------------- delete user ------------------------
  const queryClient = useQueryClient();
  const {
    mutate: DeleteOrder,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: () => createDeleteOrders(orderId?.toString()),
    onSuccess: (response) => {
      console.log('Delete success:', response);
        console.log('Deleted');
        setViewOpen("");
        queryClient.invalidateQueries({queryKey: ["getOrders"]})
        requestNotify("done", "Order deleted successfully");
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      setViewOpen("");
      requestNotify("undone", "Error deleting order");
    },
  });
  const handleDeleteOrder = () => {
    DeleteOrder();
  }
  // ------------------- delete user ------------------------






  return (
    <div className={`${style.view} ${style.printable_modal}`}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>Delete Transaction details ?</h3>
        </div>
        
        <div className={style.view_block_main}>
          <p>Are you sure you want to delete Transaction details?</p>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_delete}`}
          onClick={handleDeleteOrder}
          >
            { isDeleting ? 
            <Loader/>
            :
            <span>Delete</span>}
          </div>

          <div className={style.view_block_actions_option}
          onClick={() => setViewOpen("")}>
            <span>Cancel</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewItemDelete;