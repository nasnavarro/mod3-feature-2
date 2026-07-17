import { useEffect, useState } from 'react'

export function useBackendStatus() {
  const [status, setStatus] = useState('checking') // 'checking' | 'up' | 'down'

  useEffect(() => {
    let cancelled = false

    const backendOrigin = new URL(import.meta.env.VITE_API_BASE_URL).origin

    fetch(`${backendOrigin}/health`)
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
