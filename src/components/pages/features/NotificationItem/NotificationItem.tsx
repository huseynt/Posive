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

    // { text: string; description: string }[];

  return (
    <div className={style.item} id={`${id}`}>    
      <div className={style.item_block}>
        <h2 className={style.item_block_head}>{name}</h2>
        <p className={style.item_block_desc}>{descriptionId}</p>
      </div> 
      
      <p className={style.item_new}
      style={{display: newNotifications.some((item) => item.description === descriptionId) ? "" : "none"}}
      >new</p>
    </div>
  )
}

export default NotificationItem
