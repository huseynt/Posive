import UserItem from '../../../features/UserItem/UserItem'
import style from './userpermissions.module.scss'
// import { users } from '../../../../test/db/users'
import { createDeletePermissionUserAll, createGetUsers } from '../../../../utils/API/API'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import PageLoader from '../../../../common/PageLoader/PageLoader'
import Notify from '../../../features/Notify/Notify'
import Loader from '../../../../common/Loader/Loader'
interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

// {
//   "userPermissions": [
//       {
//           "username": "EsmaNebiyeva",
//           "email": "enebiyeva@std.beu.edu.az",
//           "created": "2024-11-09T02:54:18.703473",
//           "role": "ADMIN"
//       },
//       {
//           "username": "qwsaedfd",
//           "email": "esma.@gmail.com",
//           "role": "MEMBER"
//       }
//   ],
//   "countUserPermissions": 2
// }

interface IGetPermission {
  userPermissions: {
    username: string,
    email: string,
    created: string,
    role: string
  }[],
  countUserPermissions: {
    totalElements: number
  }
}

const UserPermissions: React.FC<IGeneral> = (props) => {
  const { setMobileSelect,  } = props
  const [pagination, setPagination] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [itemperpage, setItemPerPage] = useState<number>(10);
  const [countOrders, setCountOrders] = useState<number>(1);
  const [allDataCount, setAllDataCount] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);
  const [multiCheck, setMultiCheck] = useState<string[]>([]);

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


  // ----------------- get data --------------------------
  const {
    data: getPermissionData,
    isPending: isPermissionLoading,
  } = useQuery<IGetPermission | undefined>({
    queryKey: ["getPermission", { page: page-1, size: itemperpage }],
    queryFn: () => createGetUsers({ page: page-1, size: itemperpage}),
  });
  useEffect(() => {
    if (getPermissionData && !isPermissionLoading) {
      setCountOrders(
        Number(getPermissionData.countUserPermissions) % itemperpage === 0
          ? Number(getPermissionData.countUserPermissions) / itemperpage
          : Math.floor(Number(getPermissionData.countUserPermissions) / itemperpage) + 1
        
      );
      setAllDataCount(Number(getPermissionData.countUserPermissions));
    }
  }, [getPermissionData, isPermissionLoading, itemperpage]);
  //------------------ get data ---------------------------




  // ----------------- handle multicheck --------------------------
  useEffect(() => {
    if (checked == false) {
      setMultiCheck([]);
    }
  }, [checked, getPermissionData]);
  useEffect(() => { 
    setChecked(false);
    setMultiCheck([]);
  }, [getPermissionData]);
  // ----------------- handle multicheck --------------------------



  // ----------------- delete all --------------------------
  const queryClient = useQueryClient();
  const {
    mutate: DeletePermissionUserAll,
    isPending: isDeletePermissionLoading,
  } = useMutation({
    mutationFn: createDeletePermissionUserAll,
    onSuccess: () => {
      requestNotify("done", "Deleted successfully");
      setMultiCheck([]);
      setChecked(false);
      queryClient.invalidateQueries({queryKey: ["getPermission"]})
    },
    onError: (error) => {
      console.log('Delete error:', error);  
      requestNotify("undone", "Delete failed");
    },
  });
  const handleDeleteAll = () => {
    DeletePermissionUserAll(multiCheck);
  }
  // ----------------- delete all --------------------------


  return (
    <>

    {isPermissionLoading && <PageLoader /> }

    <Notify notify={notify} purpose={notifyPurpose} describtion={description}/>


    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>


    {/* ----------------- save buttons ------------------------------ */}
    { multiCheck.length > 0 &&
      <div className={style.parent_buttons}>
        <button className={style.parent_buttons_cancel}
        onClick={() => {
          setChecked(false);
          setMultiCheck([]);
        }}
        >Cancel</button>

        <button className={style.parent_buttons_save}
          onClick={handleDeleteAll}
          >
          { isDeletePermissionLoading ?
          <Loader/>
          :
          "Delete All"
          }
          </button>
      </div>
    }
    {/* ----------------- save buttons ------------------------------ */}
      
    <div className={style.parent_up}>
      <h2 className={style.parent_up_head}>User Permissions</h2>
      <h5 className={style.parent_up_info}>Manage who has access in your system</h5>
    </div>

    <div className={style.parent_line}></div>


    <div className={style.parent_main}>
      
      <table className={style.parent_main_table}>
        <thead className={style.parent_main_table_thead}>
          <tr className={style.parent_main_table_thead_row}>
            <th className={style.parent_main_table_thead_row_item}>
              <input type="checkbox"
              checked={checked}
              onChange={(e) => {setChecked(e.target.checked)}}
              />
            </th>
            <th className={style.parent_main_table_thead_row_item}>No</th>
            <th className={style.parent_main_table_thead_row_item}>Name</th>
            <th className={`${style.parent_main_table_thead_row_item} ${style.hide}`}>Email</th>
            <th className={`${style.parent_main_table_thead_row_item} ${style.hide}`}>Created</th>
            <th className={`${style.parent_main_table_thead_row_item} ${style.hide}`}>Role</th>
            <th className={style.parent_main_table_thead_row_item} style={{width: '80px !important'}}>Action</th>
          </tr>
        </thead>

        <tbody className={style.parent_main_table_tbody}>
          {/* id, fullName, email, created, role */}
          {
            getPermissionData?.userPermissions.map((item, index) => (
              <UserItem 
              key={index}
              id={index + 1}
              fullName={item.username}
              email={item.email}
              created={item.created}
              role={item.role}
              multiCheck={multiCheck}
              setMultiCheck={setMultiCheck}
              checked={checked}
              requestNotify={requestNotify}
              isDeletePermissionLoading={isDeletePermissionLoading}
              />
            ))
          }
        </tbody>

      </table>

      <div className={style.main_down_pagination}>
                
        <div className={style.main_down_pagination_pages}>

          {/* left button */}
          <div className={style.main_down_pagination_pages_left}
          onClick={() => {
            setPage(page> 1 ? page - 1 : page)
            page === pagination && setPagination(pagination > 1 ? pagination - 1 : pagination)
          }}
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12.2797L1.65333 7.93306C1.14 7.41973 1.14 6.57973 1.65333 6.06639L6 1.71973" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* pages */}
          <div className={style.main_down_pagination_pages_page}
          style={{border: page === pagination ? "1px solid #6c7278" : ""}}
          onClick={() => setPage(pagination)}
          >
            {pagination}
          </div>
          
          {countOrders >1 && <div className={style.main_down_pagination_pages_page}
          style={{border: page === pagination + 1 ? "1px solid #6c7278" : ""}}
          onClick={() => setPage(pagination + 1)}
          >
            {pagination + 1}
          </div>}
          
          {countOrders >2 && <div className={style.main_down_pagination_pages_page}
          style={{border: page === pagination + 2 ? "1px solid #6c7278" : ""}}
          onClick={() => setPage(pagination + 2)}
          >
            {pagination + 2}
          </div>}

          {countOrders >3 && <div className={`${style.main_down_pagination_pages_dots} 
          ${pagination + 4 === countOrders ? style.main_down_pagination_pages_dots_hover : ""}`}
          style={{
            border: page === pagination + 3 ? "1px solid #6c7278" : "",
          }}
          onClick={() => setPage(pagination + 4 === countOrders ? countOrders -1 : page)}
          >
            {pagination + 4 === countOrders ? countOrders -1 : "..." }
          </div>}

          {countOrders >4 && <div className={style.main_down_pagination_pages_page}
          style={{
            border: page === countOrders || pagination + 9 === page  ? "1px solid #6c7278" : "",
          }}
          onClick={() => {
            setPage(
            pagination + 9 <= countOrders ? pagination + 9 : countOrders
          )
            setPagination(countOrders - 4 > pagination + 9 ? pagination + 9 : countOrders - 4)
          }}
          >
            {
              pagination + 9 <= countOrders ? pagination + 9 : countOrders
            }
          </div>}

          {/* right button */}
          <div className={style.main_down_pagination_pages_right}
          onClick={() => {
            setPage(countOrders > page ? page + 1 : page)
            page - 2 === pagination && setPagination(pagination + 4 < countOrders ? pagination + 1 : pagination)
          }}
          >
            <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.940002 12.2797L5.28667 7.93306C5.8 7.41973 5.8 6.57973 5.28667 6.06639L0.940002 1.71973" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>

        <div className={style.main_down_pagination_itemperpage}>
            
            <div className={style.main_down_pagination_itemperpage_info}>
              Showing {page === 1 ? 1 : page * itemperpage - itemperpage + 1} to {page * itemperpage > allDataCount ? allDataCount : page * itemperpage} of {allDataCount} entries
            </div>
            
            <div className={style.main_down_pagination_itemperpage_action}>
              <select
                className={style.main_down_pagination_itemperpage_action_select}
                onChange={(e) =>
                  setItemPerPage(Number(e.target.value))
                }
                value={itemperpage}
              >
                <option value="5">Show 5</option>
                <option value="8">Show 8</option>
                <option value="10">Show 10</option>
              </select>
            </div>

        </div>
      </div>


    </div>


  </div>

  </>
  )
}

export default UserPermissions;
