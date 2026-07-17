import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <p>© {year} Espacio Valdecantos Store. Todos los derechos reservados.</p>
    </footer>
  )
}

export default Footer
