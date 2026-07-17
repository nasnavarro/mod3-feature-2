import styles from './ProductsPage.module.css'
import { useState } from 'react'
import {MOCK_PRODUCTS} from '../../data/mockProducts.js'
import ProductGrid from '../../components/ProductGrid/ProductGrid'

function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProducts = MOCK_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
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
      <ProductGrid products={filteredProducts} />
    </div>
  )
}

export default ProductsPage
