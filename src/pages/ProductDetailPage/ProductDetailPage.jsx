import styles from './ProductDetailPage.module.css'
import {useParams} from 'react-router-dom'
import {MOCK_PRODUCTS} from '../../data/mockProducts.js'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function ProductDetailPage() {
  const {urlFriendly} = useParams()
  const product = MOCK_PRODUCTS.find(p => p.urlFriendly === urlFriendly)
  const [quantity, setQuantity] = useState(1)

  // Función para aumentar la cantidad, asegurándose de no superar el stock disponible
  const addQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  // Función para disminuir la cantidad, asegurándose de no bajar de 1
  const removeQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  if (!product) {
    return <div className={styles.productDetailPage}>Producto no encontrado</div>
  }

  return (
    <div className={styles.productDetailPage}>
      <span className={styles.productBreadcrumbs}>
        <Link to="/">Inicio</Link> / <Link to="/products">Catálogo</Link> / {product.name}
      </span>

      <div className={styles.detailCard}>
        <img src={product.imageUrl} alt={product.name} className={styles.detailImage} />

        <div className={styles.detailInfo}>
          <span className={styles.detailCategory}>{product.category}</span>
          <h1 className={styles.detailName}>{product.name}</h1>
          <p className={styles.detailPrice}>{product.price.toFixed(2)} €</p>
          <p className={styles.detailDescription}>{product.description}</p>

          <div className={styles.detailStock}>
            <p>Stock disponible: <span className={styles.stockValue}>{product.stock}</span> </p>
          </div>

          <div className={styles.quantities}>
            <button onClick={removeQuantity} className={styles.quantityButton}>-</button>
            <span className={styles.quantityValue}>{quantity}</span>
            <button onClick={addQuantity} className={styles.quantityButton}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
