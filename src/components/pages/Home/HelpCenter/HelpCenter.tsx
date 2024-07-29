import style from './helpCenter.module.scss'
import { Helmet } from 'react-helmet'

const HelpCenter = () => {
  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Help Center</title>
        <meta name="description" content="Help Center" />
        <meta name="keywords" content="Posive" />
      </Helmet>
      <div className={style.main}>
        Help Center
        <h2>loading</h2>
      </div>
    </div>
  )
}

export default HelpCenter
