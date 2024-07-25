import style from './notificationItem.module.scss';
interface INotificationItem {
    id: number,
    name: string,
    description: string
}


const NotificationItem: React.FC<INotificationItem> = (props) => {
    const { id, name, description } = props;



  return (
    <div className={style.item} id={`${id}`} >    
        <h2 className={style.item_head}>{name}</h2>
        <p className={style.item_desc}>{description}</p>
    </div>
  )
}

export default NotificationItem
