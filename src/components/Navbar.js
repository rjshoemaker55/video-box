import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageContent } from '../redux/slices/contentSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className='navbar-wrapper'>
      <div className='title-text'>Videobox</div>
      <input
        className='search-bar'
        placeholder='Search'
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <button
        className='search-button'
        onClick={() =>
          dispatch(setPageContent({ component: 'Results', data: searchQuery }))
        }
      >
        Go
      </button>
    </div>
  );
};

export default Navbar;
