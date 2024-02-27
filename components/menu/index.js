import Link from 'next/link';
import styles from './styles.module.css';

const Menu = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/users">User</Link></li>
      </ul>
    </div>
  )
}

export default Menu;