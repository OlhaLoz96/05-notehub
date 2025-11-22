import css from "./SearchBox.module.css";

interface SearchBoxProps {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({ inputValue, onChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      defaultValue={inputValue}
      onChange={onChange}
      placeholder="Search notes"
    />
  );
}

export default SearchBox;
