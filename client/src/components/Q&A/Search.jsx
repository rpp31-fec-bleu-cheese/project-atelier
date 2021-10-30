import React from 'react';

const Search = () => {
  return (
    <div className="search">
      <form>
        <div className="search-bar">
          <input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
          <button><i className="fa fa-search"></i></button>
        </div>
      </form>
    </div>
  )
};

export default Search;