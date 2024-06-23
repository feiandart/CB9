import { useState } from "react";
import styles from './searchbar.module.scss';


const SearchBar = ({ setResult }) => {
  
  const [inputValue, setInputValue] = useState("");
  
  return (
    <div className={styles.searchbarContainer}>
      <form type="submit"
        onSubmit={(e) => {
          e.preventDefault();
          setResult(inputValue);
          setInputValue("");
        }}>
        <input
          className={styles.searchbarInput}
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};



export default SearchBar;

