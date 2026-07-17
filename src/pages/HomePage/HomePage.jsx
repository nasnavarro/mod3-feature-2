import styles from './HomePage.module.css';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import {MOCK_PRODUCTS} from '../../data/mockProducts.js';

function HomePage() {
    const productosDestacados = [...MOCK_PRODUCTS]
  .sort(() => Math.random() - 0.5)
  .slice(0, 6)

    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Productos destacados</h1>
            <div className={styles.featuredWrapper}>
                <ProductGrid products={productosDestacados} />
            </div>
        </div>
    );
}

export default HomePage;