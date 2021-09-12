import React, { useState } from "react";
// import PropTypes from "prop-types";

import s from "./SearchBar.module.css";

function SearchBar({ onSubmit }) {
  // static propTypes = {
  //   onSubmit: PropTypes.func.isRequired,
  // };

  // state = {
  //   searchQuery: "",
  // };

  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setSearchQuery({ [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { searchQuery } = this.state;
    onSubmit(searchQuery);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>
        <input
          className={s.SearchForm_input}
          type="text"
          autoComplete="off"
          name="searchQuery"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </header>
  );
}

export default SearchBar;
