import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import { useState } from 'react'
import QRCode from '../features/QrCode/Qrcode';
import Table from '../features/Table/Table';

const Home = () => {
  const [bag, setBag] = useState<boolean>(true)
  const [qrOpen, setQrOpen] = useState<boolean>(false)
  const [table, setTable] = useState<boolean>(false)


  return (
    <div className={style.home}>
      <Sidebar />
      <Main bag={bag} setBag={setBag}/>
      <Aside bag={bag} setQrOpen={setQrOpen} setTable={setTable}/>
      {qrOpen && <QRCode setQrOpen={setQrOpen}/> }
      {table && <Table setTable={setTable}/>}
    </div>
  )
}

export default Home
