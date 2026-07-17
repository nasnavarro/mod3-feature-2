import { useEffect, useState } from "react"
import { getReviews } from "../api/reviews"

export function useReviews(productId) {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadReviews() {
      try {
        setLoading(true)
        setError(null)
        const data = await getReviews(productId)
        setReviews(data)
      } catch (fetchError) {
        setError(fetchError.message)
      } finally {
        setLoading(false)
      }
    }

    loadReviews()
  }, [productId])

  return { data: reviews, loading, error }
}