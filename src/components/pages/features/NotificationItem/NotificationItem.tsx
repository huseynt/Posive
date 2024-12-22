import style from './notificationItem.module.scss';
interface INotificationItem {
    id: number,
    name: string,
    descriptionId: string
    newNotifications: { 
      text: string; 
      description: string 
    }[]
}


const NotificationItem: React.FC<INotificationItem> = (props) => {
    const { id, name, descriptionId, newNotifications } = props;

  return (
    <div className={style.item} id={`${id}`}>    
      <div className={style.item_block}>
        <div className={style.item_block_head}>
          <p>{name}</p>
          <p className={style.item_block_head_new}
          style={{display: newNotifications.some((item) => item.description === descriptionId) ? "" : "none"}}
          >new</p>
        </div>


        <p className={style.item_block_desc}>{descriptionId}</p>
      </div> 
      
      
    </div>
  )
}

export default NotificationItem
