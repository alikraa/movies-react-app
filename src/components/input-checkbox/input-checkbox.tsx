import { InputCheckboxProps } from '../../ts/interfaces';
import styles from './input-checkbox.module.css';

function InputCheckbox({ id, value, select }: InputCheckboxProps) {
  return (
    <form className={styles.genres}>
      <label htmlFor={id.toString()}>
        <input
          className={styles.genre__checkbox}
          type="checkbox"
          id={id.toString()}
          value={value}
          onChange={select}
        />
        <span className={styles.custom__checkbox} />
        {value}
      </label>
    </form>
  );
}

export { InputCheckbox };
