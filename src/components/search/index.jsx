import React from "react";
import "./search.css";

const Search = ({ data, searchTerm, setSearchTerm, ...props }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;
