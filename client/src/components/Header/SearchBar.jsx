import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = props => {
  return (
    <div id='SearchBar'>
      <FontAwesomeIcon icon={faSearch} />
    </div>
  );
};

export default SearchBar;