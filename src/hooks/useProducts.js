import { useEffect, useState } from "react"
import { getProducts } from "../api/products"

export function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        setError(null)
        const data = await getProducts()
        setProducts(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  return { data: products, loading, error }
}