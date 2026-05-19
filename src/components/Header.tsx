import { CheckSquare } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.iconWrapper}>
        <CheckSquare size={32} strokeWidth={2} />
      </div>
      <div>
        <h1 className={styles.title}>My Todos</h1>
        <p className={styles.subtitle}>Stay organised and get things done</p>
      </div>
    </header>
  );
}
