import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard.jsx';

function ProductGrid({ products }) {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid