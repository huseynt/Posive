import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDeleteProduct } from "../../../utils/API/API";
import style from "./productitemdelete.module.scss";
import Loader from "../../../common/Loader/Loader";

interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  viewOpen: string;
  receiptNo: string;
  requestNotify: (purpose: string, description: string | undefined) => void;
}

const ProductItemDelete: React.FC<IQRCodeComponentProps> = (props) => {
  const { setViewOpen, receiptNo , requestNotify } = props;

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
        requestNotify("done", "Order deleted successfully");
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      setViewOpen("");
      requestNotify("undone", "Error deleting order");
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
          <h3>Delete Product ?</h3>
        </div>
        
        <div className={style.view_block_main}>
          <p>Are you sure you want to delete Product?</p>
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

export default ProductItemDelete;
