import styles from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className={styles.notFoundPage}>
      <div className={styles.cards}>
        <div className={styles.darkCard}>
          <span className={styles.errorCode}>404</span>
          <h1 className={styles.title}>La página que buscas no está disponible</h1>
          <p className={styles.description}>
            Puede que el enlace haya cambiado, que el contenido ya no exista o que esta ruta
            no forme parte de la colección actual.
          </p>
          <Link to="/" className={styles.homeButton}>
            Volver a home
          </Link>
        </div>

        <div className={styles.lightCard}>
          <span className={styles.brand}>Espacio Valdecantos Store</span>
          <p className={styles.lightText}>
            Una selección pensada para navegar con calma, descubrir producto y volver al
            punto de partida sin perder el hilo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
