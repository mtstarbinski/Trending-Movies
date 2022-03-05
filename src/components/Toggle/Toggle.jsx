import React from 'react'
import "./Toggle.css"

const Toggle = ({ changeHandler, selected }) => {
  return (
    <ul className="category-list">
      <li className={`category-box ${selected === "Shows" ? "right" : ""}`} />
      <li
        id="Movies"
        onClick={changeHandler}
        className={`select ${selected === "Movies" ? "active" : ""}`}
      >
        Movies
      </li>
      <li
        id="Shows"
        onClick={changeHandler}
        className={`select ${selected === "Shows" ? "active" : ""}`}
      >
        Shows
      </li>
    </ul>
  );
};

export default Toggle