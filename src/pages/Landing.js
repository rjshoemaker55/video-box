import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageContent, getPageContent } from '../app/slices/contentSlice';
import Results from './Results';

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const pageContent = useSelector(getPageContent);
  const dispatch = useDispatch();

  console.log(pageContent.content);

  return (
    <div className='landing-wrapper'>
      <div className='main-header'>Videobox</div>
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
        Search
      </button>
      {pageContent.content.component == 'Results' ? <Results /> : ''}
    </div>
  );
};

export default Landing;
