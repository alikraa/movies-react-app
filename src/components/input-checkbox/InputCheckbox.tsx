import './InputCheckbox.css';

interface Props {
  id: number;
  value: string;
}

function InputCheckbox({ id, value }: Props) {
  return (
    <form className="movies-app__genres">
      <input type="checkbox" id={id.toString()} value={value} />
      <label htmlFor={id.toString()}> {value}</label>
    </form>
  );
}

export { InputCheckbox };
