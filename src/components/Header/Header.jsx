import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Espacio Valdecantos Store" className={styles.logo} />
      <nav className={styles.nav}>
        {/* end: solo se activa con coincidencia exacta, no por prefijo */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          Home
        </NavLink>
        {/* sin end: se activa si la URL empieza por /products (incluye /products/:id) */}
        <NavLink
          to="/products"
          className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
        >
          Catálogo
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
