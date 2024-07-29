import style from './product.module.scss'
import { Helmet } from 'react-helmet'

const Product = () => {
  return (
    <div className={style.overflow}>
      <Helmet>
        <title>Posive Product</title>
        <meta name="description" content="Product" />
        <meta name="keywords" content="Posive" />
      </Helmet>

      <div className={style.main}>
        Product
        <h2>loading</h2>
      </div>
    </div>
  )
}

export default Product
