import { InputCheckboxProps } from '../../ts/interfaces';
import './input-checkbox.css';

function InputCheckbox({ id, value, select }: InputCheckboxProps) {
  return (
    <form className="movies-app__genres">
      <input
        type="checkbox"
        id={id.toString()}
        value={value}
        onChange={select}
      />
      <label htmlFor={id.toString()}> {value}</label>
    </form>
  );
}

export { InputCheckbox };
