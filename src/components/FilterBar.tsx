import clsx from 'clsx';
import { FilterType } from '@/types';
import styles from './FilterBar.module.css';

type FilterBarProps = {
  filter: FilterType;
  onFilterChange: (f: FilterType) => void;
  activeCount: number;
  completedCount: number;
  onClearCompleted: () => void;
};

const FILTERS: { value: FilterType; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function FilterBar({
  filter,
  onFilterChange,
  activeCount,
  completedCount,
  onClearCompleted,
}: FilterBarProps) {
  return (
    <div className={styles.bar}>
      <div className={styles.filterGroup}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={clsx(styles.filterBtn, { [styles.active]: filter === f.value })}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className={styles.info}>
        <span className={styles.count}>
          <span className={styles.countNum}>{activeCount}</span> left
        </span>
        {completedCount > 0 && (
          <button className={styles.clearBtn} onClick={onClearCompleted}>
            Clear completed
          </button>
        )}
      </div>
    </div>
  );
}
