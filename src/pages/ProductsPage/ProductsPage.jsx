import styles from './ProductsPage.module.css'
import { useState } from 'react'
import {useProducts} from '../../hooks/useProducts.js';
import ProductGrid from '../../components/ProductGrid/ProductGrid'

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const {data, loading, error} = useProducts();

  const filteredProducts = data.filter(product =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.productsPage}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos..."
          className={styles.searchInput}
        />
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>
      <h1>Productos</h1>
      {loading && <p>Cargando productos...</p>}
      {error && <p>Error al cargar productos: {error}</p>}
      {!loading && !error && data.length === 0 && <p>No hay productos disponibles.</p>}
      {!loading && !error && data.length > 0 && filteredProducts.length === 0 && <p>No hay productos disponibles que coincidan con el filtro.</p>}
      {!loading && !error && data.length > 0 && filteredProducts.length > 0 &&
      <ProductGrid products={filteredProducts} />}
    </div>
  )
}

export default ProductsPage
