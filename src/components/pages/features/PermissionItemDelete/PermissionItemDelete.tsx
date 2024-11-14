import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createDeleteUserPermission } from "../../../utils/API/API";
import style from "./permissionitemdelete.module.scss";
import Loader from "../../../common/Loader/Loader";

interface IQRCodeComponentProps {
  setViewOpen: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  requestNotify: (purpose: string, description: string | undefined) => void;
}

const PermissionItemDelete: React.FC<IQRCodeComponentProps> = (props) => {
  const { setViewOpen, email , requestNotify } = props;

  // ------------------- delete user ------------------------
  const queryClient = useQueryClient();
  const {
    mutate: DeleteUser,
    isPending: isDeleting,
  } = useMutation({
    mutationFn: () => createDeleteUserPermission(email),
    onSuccess: (response) => {
      console.log('Delete success:', response);
        console.log('Deleted');
        setViewOpen("");
        queryClient.invalidateQueries({queryKey: ["getPermission"]});
        requestNotify("done", "Order deleted successfully");
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      setViewOpen("");
      requestNotify("undone", "Error deleting order");
    },
  });
  // ------------------- delete user ------------------------




  return (
    <div className={`${style.view} ${style.printable_modal}`}>
      <div className={style.view_bg} onClick={() => setViewOpen("")}></div>

      <div className={style.view_block}>
        <div className={style.view_block_head}>
          <h3>Delete User ?</h3>
        </div>
        
        <div className={style.view_block_main}>
          <p>Are you sure you want to delete User?</p>
        </div>

        <div className={style.view_block_actions}>
          <div className={`${style.view_block_actions_option} ${style.view_block_actions_delete}`}
          onClick={() => DeleteUser()}
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

export default PermissionItemDelete;
