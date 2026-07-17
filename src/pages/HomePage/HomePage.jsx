import styles from './HomePage.module.css';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import {useProducts} from '../../hooks/useProducts.js';
import { useMemo } from 'react'

function HomePage() {
    const {data, loading, error} = useProducts();
    //Con useMemo, se memoriza el resultado de la función que genera
    //los productos destacados, evitando que se recalculen en cada
    // renderizado si los datos no han cambiado.
    const productosDestacados = useMemo(() => {
        return [...data].sort(() => Math.random() - 0.5).slice(0, 6);
    }, [data]);
    return (
        <div className={styles.homePage}>
            <h1 className={styles.title}>Productos destacados</h1>
            <div className={styles.featuredWrapper}>
                {loading && <p>Cargando productos...</p>}
                {error && <p>Error al cargar productos: {error}</p>}
                {!loading && !error && data.length === 0 && <p>No hay productos disponibles.</p>}
                {!loading && !error && data.length > 0 &&
                <ProductGrid products={productosDestacados} />}
            </div>
        </div>
    );
}

export default HomePage;