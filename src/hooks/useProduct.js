import { useEffect, useState } from "react"
import { getProductById } from "../api/products"

export function useProduct(productId) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadProduct() {
      try {
        setLoading(true)
        setError(null)
        const data = await getProductById(productId)
        setProduct(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    loadProduct()
  }, [productId])

  return { data: product, loading, error }
}
