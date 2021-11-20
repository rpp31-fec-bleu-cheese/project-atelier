import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ handleSearch, filterDataOnSearch }) => {
  return (
    <div data-testid="search-bar" className="search">
      <form onChange={handleSearch}>
        <div className="search-bar">
          <input data-testid='search-txt' placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></input>
          <button className="icon-btn" onClick={filterDataOnSearch}><i className="fa fa-search"></i></button>
        </div>
      </form>
    </div>
  )
};

Search.propTypes = {
  handleSearch: PropTypes.func,
  filterDataOnSearch: PropTypes.func
}

export default Search;