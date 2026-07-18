import styles from './ProductDetailPage.module.css'
import {useParams} from 'react-router-dom'
import {useProduct} from '../../hooks/useProduct.js'
import {useReviews} from '../../hooks/useReviews.js'
import StarRating from '../../components/StarRating/StarRating.jsx'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function ProductDetailPage() {
  const {id } = useParams()
  const {data: product, loading, error } = useProduct(id)
  const [quantity, setQuantity] = useState(1)
  const {data: reviews, loading: reviewsLoading, error: reviewsError } = useReviews(id)

  if (loading) {
    return <div className={styles.productDetailPage}>Cargando detalles del producto...</div>
  }
  if (error) {
    return <div className={styles.productDetailPage}>Error al cargar detalles del producto</div>
  }
  if (!product) {
    return <div className={styles.productDetailPage}>Producto no encontrado</div>
  }

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

  return (
    <div className={styles.productDetailPage}>
      <span className={styles.productBreadcrumbs}>
        <Link to="/">Inicio</Link> / <Link to="/products">Catálogo</Link> / {product.name}
      </span>

      <div className={styles.detailCard}>
        <img src={product.imageUrl} alt={product.name} className={styles.detailImage} />

        <div className={styles.detailInfo}>
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

          <p className={styles.detailReviews}>Reseñas:</p>
          {reviewsLoading && <p>Cargando reseñas...</p>}
          {reviewsError && <p>Error al cargar reseñas</p>}
          {reviews && reviews.length === 0 && (
            <p>No hay reseñas disponibles.</p>
          )}
          {reviews && reviews.length > 0 && (
            <div className={styles.reviewsList}>
              {reviews.map((review) => (
                <div key={review._id} className={styles.reviewItem}>
                  <p>{review.comment}</p>
                  <p>Calificación: <StarRating rating={review.rating} /></p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
