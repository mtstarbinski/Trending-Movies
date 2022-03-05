import "./Search.css"
import {BiSearchAlt} from 'react-icons/bi'

const Search = ({ className, placeholder, changeHandler }) => (
  <div className="search-wrapper">
    <input
      className={`${className} search-box`}
      type="search"
      placeholder={placeholder}
      onChange={changeHandler}
    />
    <BiSearchAlt size="30px" className="search-icon" />
  </div>
);

export default Search;