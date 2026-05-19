import { useState } from 'react';
import { Plus } from 'lucide-react';
import clsx from 'clsx';
import { Priority } from '@/types';
import styles from './AddTodoForm.module.css';

type AddTodoFormProps = {
  onAdd: (text: string, priority: Priority) => void;
};

const PRIORITIES: { value: Priority; label: string }[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export default function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    onAdd(text, priority);
    setText('');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add a new task…"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        maxLength={200}
      />
      <div className={styles.controls}>
        <div className={styles.priorityGroup}>
          {PRIORITIES.map((p) => (
            <button
              key={p.value}
              type="button"
              className={clsx(styles.priorityBtn, styles[p.value], {
                [styles.active]: priority === p.value,
              })}
              onClick={() => setPriority(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <button
          type="submit"
          className={styles.addBtn}
          disabled={!text.trim()}
        >
          <Plus size={18} strokeWidth={2.5} />
          Add Task
        </button>
      </div>
    </form>
  );
}
