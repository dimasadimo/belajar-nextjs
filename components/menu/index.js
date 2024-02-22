import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.header}>
      <a href="/">Home</a>
      <a href="/profile">Profile</a>
    </div>
  )
}

export default Menu;