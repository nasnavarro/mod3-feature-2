import { useBackendStatus } from '../../hooks/useBackendStatus.js'
import styles from './BackendStatusBanner.module.css'

function BackendStatusBanner() {
  const status = useBackendStatus()

  if (status !== 'down') return null

  return (
    <div className={styles.banner} role="alert">
      No se pudo conectar con el backend en <code>{new URL(import.meta.env.VITE_API_BASE_URL).origin}</code>.
      Arráncalo con <code>npm run dev</code> desde <code>modulo2/project-break2-backend</code>.
    </div>
  )
}

export default BackendStatusBanner
