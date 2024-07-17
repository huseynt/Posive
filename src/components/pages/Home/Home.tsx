import style from './home.module.scss'
import Sidebar from '../features/Sidebar/Sidebar'
import Main from './Main/Main'
import Aside from './Aside/Aside'
import { useState } from 'react'
import QRCode from '../features/QrCode/Qrcode';
import Table from '../features/Table/Table';
import SuccessOrder from '../features/SuccessOrder/SuccessOrder';

const Home = () => {
  const [bag, setBag] = useState<boolean>(false)
  const [qrOpen, setQrOpen] = useState<boolean>(false)
  const [table, setTable] = useState<boolean>(false)
  const [toggleMenu, setToggleMenu] = useState<boolean>(true);
  const [successOrder, setSuccessOrder] = useState<boolean>(false)



  return (
    <div className={style.home}>
      <Sidebar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu}/>
      
      {/* ----------------------------- for mobile bg ---------------------------- */}
      <div className={style.mobileBg}
      style={{
        display: toggleMenu ? 'none' : 'block'
      }}
      onClick={() => setToggleMenu(true)}
      ></div>
      {/* ----------------------------- for mobile bg ---------------------------- */}

      <Main bag={bag} setBag={setBag} setToggleMenu={setToggleMenu}/>
      <Aside bag={bag} setQrOpen={setQrOpen} setTable={setTable} setBag={setBag} setSuccessOrder={setSuccessOrder}/>
      {qrOpen && <QRCode setQrOpen={setQrOpen}/> }
      {table && <Table setTable={setTable}/>}
      {successOrder && <SuccessOrder setSuccessOrder={setSuccessOrder}/>}
    </div>
  )
}

export default Home
