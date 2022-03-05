import "./ListGrid.css"
import Card from "../Cards/Card";
import Search from "../Search/Search";
import Toggle from "../Toggle/Toggle";

const CardList = ({ list, selected, setSelected, setSearchField }) => {
  

  const handleClick = (e) => {
    const { id } = e.target
    setSelected(id)
  }

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchField(value.toLocaleLowerCase());
  };

  return (
    <div className="card-list">
      <div className="category">
        <Toggle changeHandler={handleClick} selected={selected} />
        <Search
          className="movies-search-box"
          changeHandler={handleSearch}
          placeholder={"search " + selected.toLocaleLowerCase()}
        />
      </div>
      {list.map((element, index) => {
        return <Card element={element} key={index} selected={selected} />;
      })}
    </div>
  );
};

export default CardList;