import styles from './FormInput.module.css'

function FormInput({ name, label, type = 'text', value, onChange, placeholder , error }) {
  return (
    <div className={styles.formInput}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
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