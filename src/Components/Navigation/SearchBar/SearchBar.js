import React from "react";
import classes from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  // console.log(searchText);
  return (
    <form className={classes.form}>
      <div className={classes.search}>
        {/* <img className={classes.searchIcon} src={search} alt="search" /> */}
        <BsSearch className={classes.searchIcon} />
        <input
          className={classes.input}
          type="text"
          placeholder="Search mail"
        />
      </div>
    </form>
  );
}

export default SearchBar;
