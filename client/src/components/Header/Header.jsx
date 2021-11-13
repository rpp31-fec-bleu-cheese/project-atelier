import React from 'react';

import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';

const Header = props => {
  return (
    <div className='Header'>
      <Logo />
      <SearchBar />
    </div>
  );
};

export default Header;