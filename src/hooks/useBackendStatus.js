import { useEffect, useState } from 'react'

export function useBackendStatus() {
  const [status, setStatus] = useState('checking') // 'checking' | 'up' | 'down'

  useEffect(() => {
    let cancelled = false

    fetch(`${import.meta.env.VITE_API_BASE_URL}/health`)
      .then((res) => {
        if (!cancelled) setStatus(res.ok ? 'up' : 'down')
      })
      .catch(() => {
        if (!cancelled) setStatus('down')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return status
}
