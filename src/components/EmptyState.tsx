import { ClipboardList } from 'lucide-react';
import { FilterType } from '@/types';
import styles from './EmptyState.module.css';

type EmptyStateProps = {
  filter: FilterType;
};

const MESSAGES: Record<FilterType, { title: string; sub: string }> = {
  all: { title: 'No tasks yet', sub: 'Add a task above to get started!' },
  active: { title: 'No active tasks', sub: 'All your tasks are completed. Great job!' },
  completed: { title: 'No completed tasks', sub: 'Complete a task and it will appear here.' },
};

export default function EmptyState({ filter }: EmptyStateProps) {
  const msg = MESSAGES[filter];
  return (
    <div className={styles.wrapper}>
      <ClipboardList size={48} strokeWidth={1.25} className={styles.icon} />
      <p className={styles.title}>{msg.title}</p>
      <p className={styles.sub}>{msg.sub}</p>
    </div>
  );
}
