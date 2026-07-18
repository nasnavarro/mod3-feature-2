import styles from './StarRating.module.css'

function StarRating({ rating }) {
  const fullStars = Math.floor(rating)
  const emptyStars = 5 - fullStars

  return (
    <div className={styles.starRating}>
      {Array.from({ length: fullStars }, (_, index) => (
        <span key={`full-${index}`} className={styles.starFull}>&#9733;</span>
      ))}
      {Array.from({ length: emptyStars }, (_, index) => (
        <span key={`empty-${index}`} className={styles.starEmpty}>&#9734;</span>
      ))}
    </div>
  )
}

export default StarRating