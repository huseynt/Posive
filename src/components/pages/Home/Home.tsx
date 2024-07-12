import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import { useState } from 'react'
import QRCode from '../features/QrCode/Qrcode';
// import Notification from '../features/Notification/Notification'


const Home = () => {
  const [bag, setBag] = useState<boolean>(true)
  const [qrOpen, setQrOpen] = useState<boolean>(false)


  return (
    <div className={style.home}>
      <Sidebar />
      <Main bag={bag} setBag={setBag}/>
      <Aside bag={bag} setQrOpen={setQrOpen}/>
      {qrOpen && <QRCode qrOpen={qrOpen} setQrOpen={setQrOpen}/> }
      {/* <Notification/> */}
    </div>
  )
}

export default Home
