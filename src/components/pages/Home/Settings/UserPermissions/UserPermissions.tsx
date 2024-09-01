import UserItem from '../../../features/UserItem/UserItem'
import style from './userpermissions.module.scss'
import { users } from '../../../../test/db/users'
interface IGeneral {
  setMobileSelect: React.Dispatch<React.SetStateAction<boolean>>
}

const UserPermissions: React.FC<IGeneral> = (props) => {
  const { setMobileSelect } = props




  return (
    <div className={style.parent}
    onClick={() => setMobileSelect(false)}>
      
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
              <input type="checkbox"/>
            </th>
            <th className={style.parent_main_table_thead_row_item}>No</th>
            <th className={style.parent_main_table_thead_row_item}>Name</th>
            <th className={`${style.parent_main_table_thead_row_item} ${style.hide}`}>Email</th>
            <th className={`${style.parent_main_table_thead_row_item} ${style.hide}`}>Created</th>
            <th className={style.parent_main_table_thead_row_item}>Role</th>
            <th className={style.parent_main_table_thead_row_item}>Action</th>
          </tr>
        </thead>

        <tbody className={style.parent_main_table_tbody}>
          {
            users.map((item) => (
              <UserItem key={item.id}
              {...item}
              />
            ))
          }
        </tbody>

      </table>


    </div>


  </div>
  )
}

export default UserPermissions;
