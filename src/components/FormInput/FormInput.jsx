import { useEffect, useRef } from 'react'
import styles from './FormInput.module.css'

function FormInput({ name, label, type = 'text', value, onChange, placeholder, error, autoFocus = false }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default FormInput