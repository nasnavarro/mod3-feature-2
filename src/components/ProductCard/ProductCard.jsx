import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productDescription}>{product.description}</p>
      <p className={styles.productPrice}>{product.price.toFixed(2)} €</p>
      <Link to={`/products/${product.id}`} className={styles.productLink}>
        Ver detalles
      </Link>
    </div>
  )
}

export default ProductCard;