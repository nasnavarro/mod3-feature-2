import styles from './Button.module.css'

function Button({ onClick, children, type = 'button', variant = 'primary' }) {
  return (
    <button onClick={onClick} type={type} className={styles[variant]}>
      {children}
    </button>
  )
}

export default Button